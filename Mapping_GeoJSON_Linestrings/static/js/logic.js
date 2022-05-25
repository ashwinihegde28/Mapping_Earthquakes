
// We create the tile layer that will be the background of our map.  "streets-v11" and  "satellite-streets-v11" are styles
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });  

  // We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
  });

  // Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark],
  
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
  let torontoData  = "https://raw.githubusercontent.com/ashwinihegde28/Mapping_Earthquakes/main/torontoRoutes.json";
 
  var myStyle = {
    "color": "Yellow", //#ffffa1 can be used.
    "weight": 2,
    //"opacity": 0.65
};

// Grabbing our GeoJSON data.
d3.json(torontoData ).then(function(data) {
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
});






