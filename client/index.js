const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

/*
  * Instantiate the Map
  */

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNnMCIsImEiOiJjajY4N3dmMjAwZGJzMzNwbGUzYzR3eGd1In0.LAv0u0CjUdnFBRYmjTfNfg';
const map = new mapboxgl.Map({
  container: "map-canvas",
  center: [-74.0, 40.731],
  zoom: 12.5, // starting zoom
  pitch: 35,
  bearing: 20,
  style: "mapbox://styles/mapbox/streets-v10"
});
// console.log("HEELLLOOOO")
fetch('/api')
.then(result=>result.json())
.then(data=>{
  console.log("DATA@0",data)

  const hotelList=data[0]
  const parent = document.getElementById('hotels-choices')
// console.log(parent)
  // const option =document.createElement("option");
  // option.value="hotel"
  // option.append(hotelList[0].name)

var mapArr =hotelList.forEach(function(a){
  const option = document.createElement("option")
  option.append(a.name)
  parent.append(option)   ///OR PARENT.ADD add method is specific for select tags
})

// var 
})
.catch(console.error)

//we want to attach each element in the at array[0] to an option tage in the select #hote-choices 