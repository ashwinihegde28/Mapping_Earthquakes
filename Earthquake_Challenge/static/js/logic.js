
// We create the tile layer that will be the background of our map.  "streets-v11" ,"light-v10"  "satellite-streets-v11" are styles
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });  

  // We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });

  // Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "SatelliteStreets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets],
  
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
  let torontoHoods   = "https://raw.githubusercontent.com/ashwinihegde28/Mapping_Earthquakes/main/torontoNeighborhoods.json";
 
  var myStyle = {
    "color": "blue", 
    "weight": 1,
    "fillColor": "#ffffa1",
    //"opacity": 0.65
};

/* // Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.Edited for the Skill Drill 13.5.3 - Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names.
L.geoJSON(data,{
     onEachFeature: function(feature, layer) {
       console.log(layer);
       layer.bindPopup("<h3>" + "Airport Code: " + feature.properties.airline_id +
       "</h3><hr><p> Destination: " + feature.properties.dst + "</p>")
     }    ,
     style: myStyle
    }).addTo(map)
}); */


d3.json(torontoHoods).then(function(data){
  console.log(data);
  L.geoJSON(data,{
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h3>" + "Area Name: " + feature.properties.AREA_NAME +
      "</h3><hr><p> Area Code: " + feature.properties.AREA_S_CD + "</p>")
    }    ,
    style: myStyle
   }).addTo(map)
});



