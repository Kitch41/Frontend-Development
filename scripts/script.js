// variabelen
var navbutton = document.querySelector("header nav:nth-of-type(2) button");

var dropdownmenu = document.querySelector(".dropdown-menu")


// nav button javascript

navbutton.addEventListener("click", dropdownbuttonevents);


// functions

function navbuttonClick() {
  navbutton.classList.toggle("menuOpen");
}

function dropdownbuttonevents() {
    toggleMenu()
    navbuttonClick()
}

// dropdown menu



function toggleMenu(){

    dropdownmenu.classList.toggle("menuOpen");
}

// calling events
