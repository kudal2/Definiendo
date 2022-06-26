window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'asset',
           location: {
               lat: 10.236125,
               lng: -68.006586,
           }
       },

       
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', 'assets/asset.gltf');
       model.setAttribute('rotation', '0 270 0');
       model.setAttribute("position", "4 0.1 0");
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '.5 .5 .5');
       

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}