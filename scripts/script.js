// variabelen
var navbutton = document.querySelector("header nav:nth-of-type(2) button");

var dropdownmenu = document.querySelector("header nav:nth-of-type(2) div")


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




// scrollbar 

var firstNav = document.querySelector("header>nav:nth-of-type(1)");
var firstNavButton = document.querySelector("header>nav:nth-of-type(1) button");

var firstNavList = document.querySelector("header>nav>ul");

var buttonSVG = document.querySelector("header>nav:nth-of-type(1) button svg")


firstNavButton.addEventListener("click", toggleScroll);

firstNavList.addEventListener('scroll', (event) => {
    const scrollLeft = firstNavList.scrollLeft
    const scrollWidth = firstNavList.scrollWidth
    const rect = firstNavList.getBoundingClientRect();
    const width = rect.width

    if (Math.ceil(scrollLeft + width) == scrollWidth) {
        firstNav.classList.add("end");
        buttonSVG.setAttribute("transform", "rotate(180)");

    } else if (scrollLeft == 0) {
        firstNav.classList.remove("end");
        buttonSVG.setAttribute("transform", "rotate(0)");
    }
});


function toggleScroll() {
	if (firstNav.classList.contains("end")) {
		firstNavList.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	} else {
		firstNavList.scrollTo({
			top: 0,
			left: firstNavList.scrollWidth,
			behavior: 'smooth'
		});
	}
	
	
	
	firstNav.classList.toggle("end");
}

