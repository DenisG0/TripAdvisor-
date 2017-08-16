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

const restList = data[2];
const restParent = document.getElementById('restaurants-choices')

var mapRest =restList.forEach(function(a){
  const option = document.createElement("option")
  option.append(a.name)
  restParent.add(option)


  const actList = data[3]
  const actParent = document.getElementById('activities-choices')

  var mapAct = actList.forEach(function(a){
    const option = document.createElement("option")
    option.append(a.name)
    actParent.add(option)
  })

  })
})
.catch(console.error)

//we want to attach each element in the at array[0] to an option tage in the select #hote-choices 
//HELPER FUNCTION LOOKUP 

// let lookup=function(dataArr){
//   dataArr.filter(function(obj){
//     if(obj.name==selectedId){
//       return dataArr
// }

fetch('/api')
.then(result=>result.json())
.then(data=>{
  
////HOTELS/////////////////////////////////////////////////////////////////
  document.getElementById('hotels-add').addEventListener('click',function(){

    const select =document.getElementById('hotels-choices')
    const selectedId =select.value;
    const hotelEl = document.createElement("div")
    hotelEl.append(selectedId)
    // console.log(hotelEl)

    document.getElementById("hotels-list").append(hotelEl)
   
    var lookup = data[0].filter(function(obj){
      if(obj.name==selectedId){
        return data[0]
      }
    })
    var location =lookup[0].place.location
    console.log(location)
      
      buildMarker('hotels',location).addTo(map)

  



  })


  document.getElementById('restaurants-add').addEventListener('click',function(){
      const select =document.getElementById('restaurants-choices');
      const selectId = select.value;
      const restEl = document.createElement("div");
      restEl.append(selectId)

      document.getElementById('restaurants-list').appendChild(restEl)
    
      var lookup = data[2].filter(function(obj){
        if(obj.name==selectId){
          return data[0]
      }
    })
      var location =lookup[0].place.location

      buildMarker('restaurants',location).addTo(map)
  });



//////////////ACTIVITIES////////////////////////////////////////////////
  document.getElementById('activities-add').addEventListener('click',function(){
    const select =document.getElementById('activities-choices');
    const selectId = select.value;
    const actEl = document.createElement("div");
    actEl.append(selectId)

    document.getElementById('activities-list').appendChild(actEl)

    var lookup = data[3].filter(function(obj){
      if(obj.name==selectId){
        return data[0]
    }
  })
    var location =lookup[0].place.location
    buildMarker('activities',location).addTo(map)

    });






  });
  
  
  
  // ()=>console.log(document.getElementById("hotels-choices"