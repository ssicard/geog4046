let map = L.map('map').setView([30.4515, -91.1871], 9)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

//
let seniorCentersUrl = 'https://opendata.arcgis.com/datasets/ca5cc72995064330ae19708f2cfaf134_0.geojson'

var centers;
jQuery.getJSON(seniorCentersUrl, function (data) {
	let centerStyle = function(feature) {

			let greenIcon = new L.Icon({
				iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
			});
			
		return {
			icon: greenIcon
  		// shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  		// iconSize: [25, 41],
  		// iconAnchor: [12, 41],
  		// popupAnchor: [1, -34],
		  // shadowSize: [41, 41]
		}
	}
	let seniorCenterGeojsonOptions = {
		style: centerStyle,
		onEachFeature: createPopup
	}
	centers = L.geoJSON(data, seniorCenterGeojsonOptions).addTo(map);
});

let createPopup = function(feature, layer){
	let name = feature.properties.NAME;
	let address = feature.properties.FULL_ADDRESS;
	let city = feature.properties.CITY;
	let state = feature.properties.STATE;
	let zip = feature.properties.ZIP;
	layer.bindPopup('<b>Senior Center Name: </b>' + name + '<br><br>' +
		'<b> Address: </b>' + address + ', ' + city + ', ' + state + ', ' + zip);
}
