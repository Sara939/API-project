const mymap = L.map('map').setView([0,0], 1);
const tile= L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(mymap);



button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude; 
    let long = position.coords.longitude;
    marker = L.marker([lat,long]).addTo(mymap); 

  });
});


