
//thing is alway plural
function createListDiv(thing, locInArr){
    document.getElementById(`${thing}-add`).addEventListener('click',function(){
        ///CREATE DIV
            const select =document.getElementById(`${thing}-choices`)
            const selectedId =select.value;
            const hotelEl = document.createElement("div")
            hotelEl.append(selectedId)
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

}

module.exports ={createListDiv}