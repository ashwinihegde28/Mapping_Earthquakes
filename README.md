# Mapping_Earthquakes

## Project Overview :

Support website and mobile application development by using the latest earthquake GeoJSON data from the U.S geological Survey website. To traverse and retrieve the earthquake data using javascript d3 and leaflet libraries and plot the data on a Mapbox map through an API request.On the map, the magnitude and location of each earthquake will be shown in a popup marker.The diameter of the markers show the magnitude. Earthquakes with higher magnitude are larger in size and darker.Scripts are built using JavaScript and D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. Leaflet library is used  to plot the data on a Mapbox style map through an API request and makes it interactive by adding visualization for different map styles, creating layers to display Tectonic plates, Earthquake magnitude and location information.<br>
Challenge code can be found [Here](https://github.com/ashwinihegde28/Mapping_Earthquakes/tree/main/Earthquake_Challenge)<br><br>

## Steps involved in Brief:
- Created branches from the main branch on GitHub. Performed add and commit operations and pushed data to a GitHub branch and finally merged the branches with the main     branch on GitHub.
- Changed the index.html page to include the scripts.
- Retrieved data from a GeoJSON file.
- Made API requests to a server to host geographical maps.
- Populated geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library.
- Added multiple map layers to geographical maps using Leaflet control plugins to add user interface controls.
- Used JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.
- Hosted maps on a local Python Http server.<br><br>

## Challenge
### Deliverable 1 :
Using the knowledge of JavaScript, Leaflet.js, and geoJSON data, added tectonic plate data using d3.json(), added the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and added the tectonic plate data to the overlay object with the earthquake data. <br>
![TectonicPlateLayer](https://github.com/ashwinihegde28/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/TectonicPlateLayer.PNG) <br><br>

### Deliverable 2 :
Added major earthquake data to the map using d3.json(). Added color and set the radius of the circle markers based on the magnitude of earthquake, and a popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer, geoJSON().<br>
![Major Earthquake Image](https://github.com/ashwinihegde28/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/MajorEarthquakeImg.PNG) <br><br>

### Deliverable 3 :
Using the options from the Mapbox styles (Links to an external site.), added few map style as a tile layer object to the challenge_logic.js file.<br>
![Navigation Day](https://github.com/ashwinihegde28/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/NavigationDay.PNG) <br><br>
![Navigation Night](https://github.com/ashwinihegde28/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/NavigationNight.PNG) <br><br>
![Light](https://github.com/ashwinihegde28/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/Light.PNG) <br><br>
![Dark](https://github.com/ashwinihegde28/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/Dark.PNG) <br><br>






