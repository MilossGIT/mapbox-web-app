mapboxgl.accessToken =
  'MAPBOX_ACCESS_TOKEN'; //Your Mapbox Access token goes here

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

let map;

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([14.5068, 46.0569]); // Ljubljana, Slovenia
}

function setupMap(center) {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: 'MAPBOX_ACCESS_TOKEN', //Your Mapbox Access token goes here
    unit: 'metric',
    profile: 'mapbox/cycling'
  });

  map.addControl(directions, 'top-left');
}
