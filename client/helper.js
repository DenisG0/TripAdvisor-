const buildMarker = require("./marker");
const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNnMCIsImEiOiJjajY4N3dmMjAwZGJzMzNwbGUzYzR3eGd1In0.LAv0u0CjUdnFBRYmjTfNfg';
const map = new mapboxgl.Map({
  container: "map-canvas",
  center: [-74.0, 40.731],
  zoom: 12.5, // starting zoom
  pitch: 35,
  bearing: 20,
  style: "mapbox://styles/mapbox/streets-v10"
});
const state = {
    hotels: [],
    restaurants: [],
    activities: []
  };
//thing is alway plural
function createListDiv(thing, locInArr){


    fetch('/api')
    .then(result=>result.json())
    .then(data=>{
    document.getElementById(`${thing}-add`).addEventListener('click',function(){
        ///CREATE DIV
            const select =document.getElementById(`${thing}-choices`)
            const selectedId =select.value;
            const hotelEl = document.createElement("div")
            hotelEl.append(selectedId)
      //      console.log(select.value);

        ///END CREATE DIV

        //CREATE BUTTON
            const button = document.createElement("button")
            button.classList.add("btn-danger")
            button.append("X")
            hotelEl.appendChild(button)
        //END CREATE BUTTON

        //APPEND BUTTON AND DIV
            document.getElementById(`${thing}-list`).append(hotelEl)
        //END APPEND BUTTON AND DIV
        if(thing==="hotels"){
            state.hotels.push(select.value)

        }
        else if(thing==="restaurants"){
            state.restaurants.push(select.value)

        }else{
            state.activities.push(select.value)
        }
        console.log(state,"STATE");
            ///LOOKS UP LOCATION
            var lookup = data[`${locInArr}`].filter(function(obj){
              if(obj.name==selectedId){
                return data[0]
              }
            })

            var location =lookup[0].place.location
            console.log(location)
             //END LOOK UP LOCATION

             //CREATE AND FLT YO MARKER
             var marker= buildMarker(`${thing}`,location).addTo(map)
             map.flyTo({center: location, zoom: 17})
          //END CREATE AND FLY TO MAREKR

          //REMOVE
             button.onclick=function(){
              hotelEl.remove();
             marker.remove()
            }
        //END REMOVE

          })
        })
}

module.exports =createListDiv
