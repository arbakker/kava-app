/* eslint-disable no-undef */
import 'leaflet/dist/leaflet'
import 'leaflet-extra-markers'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import marker from './images/marker-icon.png'
import markerRed from './images/marker-icon-red.png'
import markerShadow from './images/marker-shadow.png'
import './index.css'
import Fuse from 'fuse.js'
import autocomplete from 'autocompleter'
import 'autocompleter/autocomplete.css'
import scrollIntoView from 'scroll-into-view-if-needed'
const L = window.L

// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

var apoUrl = 'https://portaal-stadantwerpen.opendata.arcgis.com/datasets/76c26d48b3924728b79283b0ec60c8ba_576.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D'

function compare (a, b) {
  const aProps = a.properties
  const bProps = b.properties
  if (aProps.NAAM < bProps.NAAM) {
    return -1
  }
  if (aProps.NAAM > bProps.NAAM) {
    return 1
  }
  return 0
}

function selectApo (apoId, json) {
  selectedItem = String(apoId)
  apothekersLayer.clearLayers() // inherited from LayerGroup
  apothekersLayer.addData(json)
  const list = document.getElementById('apoList')
  Array.from(list.children).forEach(function (e) {
    e.classList.remove('selected')
  })
  const selEl = document.getElementById(String(apoId))
  selEl.classList.add('selected')
  scrollIntoView(selEl, {
    scrollMode: 'if-needed',
    block: 'center  ',
    inline: 'nearest'
  })
  apothekersLayer.clearLayers()
  apothekersLayer.addData(json)

  fitbounds(String(apoId))
}

function resetFilter (json) {
  const list = document.getElementById('apoList')
  list.innerHTML = ''
  json.features.forEach(function (ft) {
    const props = ft.properties
    filteredItems.push(props.OBJECTID)
    addResult(props.OBJECTID, props.NAAM, props.STRAAT, props.POSTCODE, props.HUISNR, props.DISTRICT, json)
  })
}

function showApo (json) {
  apothekersLayer.clearLayers()
  apothekersLayer.addData(json)
  fitbounds()
}

function fitbounds (id = '') {
  let bounds
  if (id !== '') {
    Object.keys(apothekersLayer._layers).forEach(function (key) {
      const lyr = apothekersLayer._layers[key]

      const ft = lyr.feature
      if (ft.properties.OBJECTID === parseInt(id)) {
        // cannot calc bounds of single point, so we make two points
        const point1 = L.latLng(lyr._latlng.lat + 0.00001, lyr._latlng.lng + 0.00001)
        const point2 = L.latLng(lyr._latlng.lat - 0.00001, lyr._latlng.lng - 0.00001)
        bounds = L.latLngBounds([point1, point2])
      }
    })
  } else {
    bounds = apothekersLayer.getBounds()
  }
  map.fitBounds(bounds, { maxZoom: 16 })
}

function getJSON () {
  Array.from(document.getElementsByTagName('div')).forEach(function (el) {
    if (el.id !== 'loader') {
      el.classList.add('hide')
    }
  })
  return fetch(apoUrl)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      Array.from(document.getElementsByTagName('div')).forEach(function (el) {
        el.classList.remove('hide')
        if (el.id === 'loader') {
          el.classList.add('hide')
        }
      })
      return data
    })
}

var southWest = L.latLng(50.964591, 4.038897)
var northEast = L.latLng(51.493328, 4.790175)
var bounds = L.latLngBounds(southWest, northEast)

var map = L.map('mapid', {
  maxBounds: bounds
}).setView([51.222791, 4.409208], 10)
var filteredItems = []
var selectedItem = ''
var apothekersLayer

getJSON().then(function (data) {
  function onEachFeature (feature, layer) {
    layer.on({
      click: function () { selectApo(feature.properties.OBJECTID, data) }
    })
  }

  data.features.sort(compare)
  var apothekersObs = []
  data.features.forEach(function (ft) {
    apothekersObs.push(ft.properties)
  })
  const options = {
    shouldSort: true,
    threshold: 0.2,
    location: 0,
    distance: 100,
    minMatchCharLength: 3,
    keys: ['NAAM', 'STRAAT', 'POSTCODE', 'DISTRICT']
  }
  var fuse = new Fuse(apothekersObs, options)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  apothekersLayer = L.geoJSON(data, {
    attribution: 'Apotheken: &copy; <a href="https://www.kava.be/">Kava</a>',
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      let selectedMarker = marker
      if (feature.properties.OBJECTID === parseInt(selectedItem)) {
        selectedMarker = markerRed
      }
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: selectedMarker,
          shadowUrl: markerShadow,
          iconAnchor: [10.5, 41],
          shadowAnchor: [10.5, 41]
        })
      })
    },
    filter: function (ft) {
      if (filteredItems.length === 0) {
        return true
      }
      if (filteredItems.indexOf(ft.properties.OBJECTID) !== -1) {
        return true
      }
      return false
    }

  })
  map.addLayer(apothekersLayer)

  Array.prototype.forEach.call(document.getElementsByClassName('leaflet-layer'), function (el) {
    el.classList.add('dark')
  })
  document.body.classList.add('dark')
  Array.prototype.forEach.call(document.getElementsByClassName('leaflet-container'), function (el) {
    el.classList.add('dark')
  })

  document.getElementsByClassName('apoListItem')
  Array.prototype.forEach.call(document.getElementsByClassName('apoListItem'), function (el) {
    el.onclick = function () {
      selectApo(parseInt(el.id), data)
    }
  })

  const search = document.getElementById('search')
  search.oninput = function (e) {
    const val = e.target.value
    if (val === '') {
      resetFilter(data)
    }
  }

  autocomplete({
    input: search,
    fetch: function (text, update) {
      const apoList = document.getElementById('apoList')
      while (apoList.lastElementChild) {
        apoList.removeChild(apoList.lastElementChild)
      }
      const searchResult = fuse.search(text, {})
      if (searchResult.length === 0) {
        apothekersLayer.clearLayers()
        return
      }
      const suggestions = []
      filteredItems = []
      console.log(searchResult)
      searchResult.forEach(function (item) {
        suggestions.push({ label: item.item.NAAM, value: item.item.OBJECTID, straat: item.item.STRAAT, huisnr: item.item.HUISNR, postcode: item.item.POSTCODE, district: item.item.DISTRICT.capitalize() })
        filteredItems.push(item.item.OBJECTID)
      })

      update(suggestions)
      showApo(data)
    },
    onSelect: function () {
      return null
    },
    render: function (item, currentValue) {
      if (document.getElementById(item.value) !== null) {
        return null
      }
      addResult(item.value, item.label, item.straat, item.postcode, item.huisnr, item.district, data)
      return null
    }
  })
  resetFilter(data)
  fitbounds()
})

function addResult (id, name, straat, postcode, huisnr, district, data) {
  const div = document.createElement('div')
  div.id = id
  div.classList.add('apoListItem')
  const header = document.createElement('h3')
  const p = document.createElement('p')
  p.innerHTML = `${straat} ${huisnr}<br>${postcode} ${district.capitalize()}`
  header.innerText = name
  div.appendChild(header)
  div.appendChild(p)
  div.onclick = function () {
    selectApo(parseInt(this.id), data)
  }
  const apoList = document.getElementById('apoList')
  apoList.appendChild(div)
}
