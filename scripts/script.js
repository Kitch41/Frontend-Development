// variabelen


// nav button javascript
var navbutton = document.querySelector("header section:nth-of-type(2) button");



navbutton.addEventListener("click", navbuttonClick);


// functions

function navbuttonClick() {
  navbutton.classList.toggle("menuOpen");
}