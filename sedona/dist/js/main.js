(function(){
  var toggleShow = document.querySelector('.js-toggleShow'),
      asd = document.getElementById('asd');
      toogleForm = document.querySelector('.js-show');

  if(!!toggleShow) {
    toggleShow.addEventListener('click', function (e) {
      e.preventDefault();
      toogleForm.classList.toggle('show');
    });
  }

})();
var map,
    mapElement = document.getElementById('map');

function initMap() {
  if (!!mapElement) {
    map = new google.maps.Map(mapElement, {
      center: {lat: 35.1811269, lng: -111.7480437},
      scrollwheel: false,
      zoom: 8,
      mapTypeControl: false
    });
  }
}
