let map = L.map('map').setView([30.4515, -91.1871], 9)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

let seniorCenters = 'https://opendata.arcgis.com/datasets/ca5cc72995064330ae19708f2cfaf134_0.geojson'

var centers;
jQuery.getJSON(seniorCenters, function (data) {
	let centerStyle = function(feature) {
		return {
			color: 'green',
		  weight: 1,
		  fillOpacity: 0.2
		}
	}
	let seniorCenterGeojsonOptions = { style: centerStyle }
	centers = L.geoJSON(data, seniorCenterGeojsonOptions).addTo(map);
});
