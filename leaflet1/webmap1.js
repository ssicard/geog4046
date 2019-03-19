let map = L.map('map').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

let howeRussell = L.marker([30.411751,-91.178565]).addTo(map);

let lsuPoly = L.polygon([
  [30.415734, -91.176316],
  [30.404668, -91.173655],
  [30.408480, -91.185864],
  [30.415549, -91.187366]
]).addTo(map);

var directions = [
    [30.412985, -91.177180],
    [30.412911, -91.176237],
    [30.402103, -91.170574],
    [30.420905, -91.152988],
    [30.436071,-91.152691],
    [30.436018,-91.156378]
];
var pathToHighSchool = L.polyline(directions, {color: 'red'}).addTo(map);
map.fitBounds(pathToHighSchool.getBounds());

howeRussell.bindPopup('This is where class is.');
lsuPoly.bindPopup('This is where I go to school.');
lsuPoly.bindPopup('This is directions from LSU to my high school.');
