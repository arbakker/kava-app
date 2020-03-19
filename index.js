/* eslint-disable no-undef */
import 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import marker from './images/marker-icon.png'
import markerShadow from './images/marker-shadow.png'
import './index.css'
const L = window['L'];
import apothekers from "./apotheker.json"
import  Fuse from 'fuse.js'
import autocomplete from 'autocompleter'
import 'autocompleter/autocomplete.css'
import scrollIntoView from 'scroll-into-view-if-needed';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var map = L.map('mapid').setView([51.222791,4.409208], 10);


function compare( a, b ) {
    let aProps = a.properties
    let bProps = b.properties
    if ( aProps.NAAM < bProps.NAAM ){
      return -1;
    }
    if ( aProps.NAAM > bProps.NAAM ){
      return 1;
    }
    return 0;
  }

apothekers.features.sort(compare)

var apothekersObs = []
apothekers.features.forEach(function(ft){
    apothekersObs.push(ft.properties)
})
console.log(apothekersObs)
var options = {
    keys: ['NAAM', 'STRAAT', 'POSTCODE', 'HUISNR    ']
  };
var fuse = new Fuse(apothekersObs, options)
// console.log(fuse.search('Valaar'))

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.222791,4.409208], {
//     icon: L.icon({
//         iconUrl: marker,
//         shadowUrl: markerShadow,
//         iconAnchor: [10.5,41], // point of the icon which will correspond to marker's location
//         shadowAnchor: [10.5,41],  // the same for the shadow
//     })
// }).addTo(map)


var selectedId = ''
const apothekersLayer = L.geoJSON(apothekers, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {icon: L.icon({
            iconUrl: marker,
            shadowUrl: markerShadow,
            iconAnchor: [10.5,41], // point of the icon which will correspond to marker's location
            shadowAnchor: [10.5,41],  // the same for the shadow
        })});
        
    },
    filter: function(ft){
        if (selectedId === ''){
            return true
        }
        if (ft.properties.OBJECTID == selectedId){
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
let entries = ''
apothekers.features.forEach(function(ft){
    let props = ft.properties
    let district = props.DISTRICT.capitalize()
    let entry = `<div id="${props.OBJECTID}" class="apoListItem"><h3>${props.NAAM}</h3><p>${props.STRAAT} ${props.HUISNR}<br>${props.POSTCODE} ${district}</p></div>`
    entries += entry
})
let apoList = document.getElementById("apoList")
apoList.innerHTML = entries

document.getElementsByClassName('apoListItem')
Array.prototype.forEach.call(document.getElementsByClassName('apoListItem'), function (el) {
    el.onclick = function () {
       
        selectApo(el.id)

    }
})  

function selectApo(apoId){
    if (selectedId!==''){
        document.getElementById(selectedId).classList.remove("selected")
    }
    selectedId = apoId
    apothekersLayer.clearLayers(); // inherited from LayerGroup
    apothekersLayer.addData(apothekers);
    let selectedEl = document.getElementById(selectedId)
    selectedEl.classList.add("selected")
    scrollIntoView(selectedEl, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
        scrollMode: 'if-needed'
      });
      

    fitbounds()
}

function showAll(){
    if (selectedId!==''){
        document.getElementById(selectedId).classList.remove("selected")
    }
    selectedId = ''
    apothekersLayer.clearLayers(); // inherited from LayerGroup
    apothekersLayer.addData(apothekers);
    fitbounds()
}

let search = document.getElementById("search")
search.onfocus = function(){
    search.value= ''
    showAll()
};

function fitbounds(){
    map.fitBounds(apothekersLayer.getBounds(), {maxZoom: 16})
}



fitbounds()


autocomplete({
    input: search,
    fetch: function (text, update) {
        const searchResult = fuse.search(text)
        const suggestions = []
        console.log(searchResult)
        searchResult.forEach(function (item) {
            const name = item.item.NAAM
            const id = item.item.OBJECTID
            suggestions.push({ label: name, value: id })
          })
          update(suggestions)
    },
    onSelect: function (item) {
        search.value = item.label
        const id = item.value
        selectApo(id)
      }
  })