// SETTING GLOBAL VARS //
var brCenterCol = "#28502E";
var noBrCenterCol = "#1B2F33";
let seniorCentersUrl = 'https://opendata.arcgis.com/datasets/ca5cc72995064330ae19708f2cfaf134_0.geojson';

let map = L.map('map').setView([30.5, -91.18], 10)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map)


$.getJSON(seniorCentersUrl, function(data) {
    var allCenters = L.geoJson(data);

    // SETTING STYLE ELEMENTS //
    let centerStyle = function (feature) {
      let city = feature.properties.CITY


      //=======DEFAULTS========//
      let color = noBrCenterCol;
      let fillOpacity = .8; //more transparent

      if(city == 'BATON ROUGE'){
        color = brCenterCol, //greenish
        fillOpacity = 1   //more solid
      }

      return {
        stroke: false,
        radius: 10,
        fillColor: color,
        fillOpacity: fillOpacity
      }
    }

    let brCenterGeojsonOptions = {
      style: centerStyle,
      onEachFeature: createPopup,
      pointToLayer: createMarker,
      filter: function(feature, layer) {
        return feature.properties.CITY == "BATON ROUGE";
      }
    }

    let noBrCenterGeojsonOptions = {
      style: centerStyle,
      onEachFeature: createPopup,
      pointToLayer: createMarker,
      filter: function(feature, layer) {
        return feature.properties.CITY != "BATON ROUGE";
      }
    }

    var brCenters = L.geoJson(data, brCenterGeojsonOptions);
    var noBrCenters = L.geoJson(data, noBrCenterGeojsonOptions);

      map.fitBounds(allCenters.getBounds());
      brCenters.addTo(map);
      noBrCenters.addTo(map);

      $("#noBrCenters").click(function() {
           map.addLayer(noBrCenters)
           map.removeLayer(brCenters)
       });
       $("#brCenters").click(function() {
           map.addLayer(brCenters)
           map.removeLayer(noBrCenters)
       });
       $("#allCenters").click(function() {
           map.addLayer(brCenters)
           map.addLayer(noBrCenters)
       });
});

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
