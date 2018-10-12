// initialize the map
var map = L.map('map').setView([51.394845, -0.538516], 12);

// load a tile layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
  minZoom: 9
}).addTo(map);

// load GeoJSON from an external file
$.getJSON("incidents.geojson", function(data) {
  var clusters = L.markerClusterGroup();
  // add GeoJSON layer to the map once the file is loaded
  var incidents = L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      var marker = L.marker(latlng);
      marker.bindPopup('Fly tip reported on ' + feature.properties.date_rec + '<br/>' + 'Reported waste type: ' + feature.properties.waste_type + '<br/>' + 'Located on land type: ' + feature.properties.land_type);
      return marker;
    },
    onEachFeature: function (feature, layer) {
      layer.addTo(clusters);
    }
  });
  //var clusters = L.markerClusterGroup();
  //clusters.addLayer(incidents);
  map.addLayer(clusters);
});
