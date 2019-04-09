let map = L.map('map').setView([30.5, -91.18], 10)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map)


let seniorCentersUrl = 'https://opendata.arcgis.com/datasets/ca5cc72995064330ae19708f2cfaf134_0.geojson'

jQuery.getJSON(seniorCentersUrl, function (data) {
  let centerStyle = function (feature) {
    let city = feature.properties.CITY


    //=======DEFAULTS========//
    let color = '#B1B6A6'; //beige
    let fillOpacity = .6; //more transparent

    if(city == 'BATON ROUGE'){
      color = '#819595', //greenish
      fillOpacity = .8   //more solid
    }

    return {
      stroke: false,
      radius: 10,
      fillColor: color,
      fillOpacity: fillOpacity
    }
  }

  let seniorCenterGeojsonOptions = {
    style: centerStyle,
    onEachFeature: createPopup,
    pointToLayer: createMarker
  }

  L.geoJSON(data, seniorCenterGeojsonOptions).addTo(map)
})

let createPopup = function (feature, layer) {
  let name = feature.properties.NAME
  let address = feature.properties.FULL_ADDRESS
  let city = feature.properties.CITY
  let state = feature.properties.STATE
  let zip = feature.properties.ZIP
  layer.bindPopup('<b>Senior Center Name: </b>' + name + '<br><br>' + '<b> Address: </b>' + address + ', ' + city + ', ' + state + ', ' + zip)
}

let createMarker = function (feature, latlng) {
  return L.circleMarker(latlng)
}

//TODO search
function searchName() {
  console.log("hello");
  var x = document.getElementById("searchInput");
  document.getElementById("demo").innerHTML = "You are searching for: " + x.value;

}
