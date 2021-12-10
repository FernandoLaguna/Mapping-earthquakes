

// We create the tile layer that will be the background of our map.
// assign the tileLayer() method  to the variable streets. Leaflet offers various tile layer APIs
// We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map. mapbox/streets-v11, pueden sr:
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    Sattribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
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
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// When creating the Layers Control, the argument passed, baseMaps, is the base layer object
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL from Github "raw" after the tile layer
let airportData = "https://raw.githubusercontent.com/FernandoLaguna/Mapping-earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
// Creating a GeoJSON layer with the retrieved data. 
L.geoJSON(data, {
  pointToLayer: function(feature, latlng) {
  console.log(feature);
  return L.marker(latlng)
  .bindPopup(feature.properties.city)
}
}).addTo(map);
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);






