window.addEventListener("load", hamburgerSetup);
// window.addEventListener("resize", resizedHam);


let state = false;
let hamburger, navElem, asideLinks;


function hamburgerSetup(){
    hamburger =  document.querySelector(".hamburger");
    navElem = document.querySelector("#top > nav");
    asideLinks = document.querySelector("#asideSocialLinks")
    hamburger.addEventListener("click", openHamburger);
}

function openHamburger(){
    if (!state) {
        hamburger.classList.add("is-active");
        navElem.style.display = "flex"; 
        asideLinks.style.display = "none";
    } else {
        hamburger.classList.remove("is-active");
        navElem.style.display = "none"; 
        asideLinks.style.display = "flex";
    }
    state = !state;
}

function resizedHam(){
    if (screen.width > 992){
        hamburger.classList.remove("is-active");
        navElem.style.display = "flex";
        state = false;
    }
}
 
// #TODO: BUG when resizing from within a expanded hamburger the 
// top nav is broken due to the direact overwrite of display
// flex in openHam... function