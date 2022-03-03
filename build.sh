#!/bin/bash

rm -rf docs
ng build --prod --base-href "/learncyrillic/" --deploy-url "/learncyrillic/"
mv dist/learncyrillic docs
rm -rf dist

