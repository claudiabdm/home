function init() {

  // Dropdown
  // --------------------------------------------------------
  var dropdown = document.querySelector('.dropdown__btn');
  var dropdownIcon = document.querySelector('.dropdown__icon');

  dropdown.onclick = function(event) {
    var dropdown = this;
    if (dropdown.hasAttribute('aria-expanded') && dropdown.getAttribute('aria-expanded') === 'false') {
      dropdown.setAttribute('aria-expanded', 'true');
      dropdownIcon.setAttribute('class', 'dropdown__icon icon-Triangle-up');
    } else {
      dropdown.setAttribute('aria-expanded', 'false');
      dropdownIcon.setAttribute('class', 'dropdown__icon icon-Triangle-down');
    }
  }

  // Search form
  // --------------------------------------------------------
  var input = document.querySelector('.dropdown__input');

  input.onfocus = function(e) {
    this.setAttribute('aria-expanded', 'true');
  }

  input.onblur = function(e) {
    this.setAttribute('aria-expanded', 'false');
  }

};

window.onload = init;

// Prueba: nueva función para cambiar de tabs en el reproductor
function openInfo(infoName) {
  let x = document.getElementsByClassName("info");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(infoName).style.display = "block";
}