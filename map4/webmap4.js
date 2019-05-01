let demoMap = L.Wrld.map("map4", "3fdeb51df3c639e929b0e6391503c9fc", {
    center: [29.95, -90.07],
    zoom: 15
});


/*
demoMap.themes.setWeather(L.Wrld.themes.weather.Rainy)
demoMap.themes.setTime(L.Wrld.themes.time.Day)
*/


let geojsonUrl = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson'
jQuery.getJSON(geojsonUrl, function (data) {
  L.geoJSON(data, {
    onEachFeature: createPopup
  }).addTo(demoMap)
});

jQuery('#jackson-square').on('click', function () {
  demoMap.setView([29.957, -90.063], 17, {
    headingDegrees: -45,
    animate: true,
    durationSeconds: 3
  })
});
