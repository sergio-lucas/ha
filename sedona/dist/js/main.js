(function(){
  var toggleShow = document.querySelector('.js-toggleShow'),
      startBtnCalc = document.getElementById('start-value'),
      startBtnCalc = document.getElementById('end-value'),
      toogleForm = document.querySelector('.js-show');

  toggleShow.addEventListener('click', function (e) {
    e.preventDefault();
    toogleForm.classList.toggle('show');
  });

})();
