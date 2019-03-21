let map = L.map('map').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(map);

L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer?request=GetCapabilities&service=WMS', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA'
}).addTo(map);

L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_inundation/MapServer/WMSServer', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA'
}).addTo(map);
