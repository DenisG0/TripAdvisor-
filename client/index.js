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
  // console.log("DATA@0",data[0])

  const hotelList=data[0]
  const parent = document.getElementById('hotels-choices')
console.log(parent)
  const option =document.createElement("option");
  option.value="hotel"
  // console.log(option)
  console.log(hotelList[1].name)
  var hotel1 =option.append(hotelList[1].name)
  console.log("HOTEL1",hotel1)
  // option.append([i])
  // parent.appendChild(hotel.name)
for(var i=0;i<hotelList.length;i++){
  parent.append(option.append(hotelList[i].name))
}
})
.catch(console.error)

//we want to attach each element in the at array[0] to an option tage in the select #hote-choices tag