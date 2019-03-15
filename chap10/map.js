require([
  "esri/Map",
  "esri/views/MapView",
  "esri/WebMap"
], function(Map, MapView, WebMap) {

  var webmap = new WebMap({
    portalItem: {
      id: "1d358466ccef47ddbdf8649d3ded4386"
    }
  });

   var view = new MapView({
     container: "viewDiv",
     map: webmap,
     zoom: 16
   });
});
