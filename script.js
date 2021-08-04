"use strict";

window.addEventListener('load', function () {
  var dropdownBtn = document.querySelector('#dd-btn');
  dropdownBtn.addEventListener('click', function () {
    document.querySelector('#dropdown-content').classList.toggle('open-dropdown-content');
  }); // display current date to the welcome section.

  document.querySelector('#date').innerHTML = new Date().toLocaleDateString();
});
