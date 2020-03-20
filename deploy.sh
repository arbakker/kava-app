#!/usr/bin/env bash

npm run-script build &&\
  rm ../gh-pages/* &&\
    cp dist/* ../gh-pages &&\
      git -C ../gh-pages add --all &&\
        git -C ../gh-pages commit -m "deployment" &&\
          git -C ../gh-pages push