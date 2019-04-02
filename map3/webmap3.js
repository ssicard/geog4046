let map = L.map('map').setView([30.4515, -91.1871], 9)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map)

let seniorCentersUrl = 'https://opendata.arcgis.com/datasets/ca5cc72995064330ae19708f2cfaf134_0.geojson'
//
// let test1 = 'try2'
// var redMarker = {
//   stroke: false,
//   radius: 8,
//   fillColor: "#ff0000",
//   fillOpacity: .4
// }
// var greenMarker = {
//   stroke: false,
//   radius: 10,
//   fillColor: "#15560d",
//   fillOpacity: .8
// }
var marker;

jQuery.getJSON(seniorCentersUrl, function (data) {
  let centerStyle = function (feature) {
    let city = feature.properties.CITY
    let color = '#ff0000'; //defaults to red
    let fillOpacity = .4; //defaults to more transparent

    if(city == 'BATON ROUGE'){
      color = '#15560d',
      fillOpacity = .8
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
  return L.circleMarker(latlng);
}
