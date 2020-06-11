window.addEventListener("load", hamburgerSetup);
// window.addEventListener("resize", resizedHam);


let state = false;
let hamburger, navElem;


function hamburgerSetup(){
    hamburger =  document.querySelector(".hamburger");
    navElem = document.querySelector("#top > nav");
    hamburger.addEventListener("click", openHamburger);
    document.querySelector("#introsectionMain").addEventListener("click",()=>{
        window.location = "disastertracker.html";
    }) // #TODO: SEP CONCERNS
}

function openHamburger(){
    if (!state) {
        hamburger.classList.add("is-active");
        navElem.style.display = "flex"; 
    } else {
        hamburger.classList.remove("is-active");
        navElem.style.display = "none"; 
    }
    state = !state;
}

// function resizedHam(){
//     if (screen.width > 767){
        
//         hamburger.classList.remove("is-active");
//         state = false;
//     }
// }
 
// #TODO: BUG when resizing from within a expanded hamburger the 
// top nav is broken due to the direact overwrite of display
// flex in openHam... function