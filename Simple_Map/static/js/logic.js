// Add console.log to check to see if our code is working.
console.log("workings");

// Create the map object with a center and zoom level. The mapid will reference the id tag in our <div> element on the index.html file
// The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
// We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// We create the tile layer that will be the background of our map.
// assign the tileLayer() method  to the variable streets. Leaflet offers various tile layer APIs
// We add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map. mapbox/streets-v11, pueden sr:
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    Sattribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);






