const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");
const helper = require('./helper')

fetch('/api')
.then(result=>result.json())
.then(data=>{
  console.log("DATA@0",data)

  const hotelList=data[0]
  const parent = document.getElementById('hotels-choices')


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

fetch('/api')
.then(result=>result.json())
.then(data=>{

 console.log(helper)
 helper("hotels",0);
 helper('restaurants',2);
 helper('activities',3);

})
