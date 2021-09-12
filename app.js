"use strict";

let body = document.querySelector(".body");
let homePage = document.querySelector(".home");
let start = document.querySelector(".start-js");
let layout = document.querySelector(".layout");
let comp = document.querySelector(".comp-js");
//let head = document.querySelector(".header");
//let welcomeContainer = document.querySelector(".welcome");
//let welcomeTitle = document.querySelector(".welcome-title");
const progress = document.querySelectorAll(".progress-js");
const scrollRestoration = history.scrollRestoration;



if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

function translate() {

    homePage.classList.add("translate-js");

    setTimeout(function(){
        layout.classList.add("translate-js");
    },400);

//    welcomeLayout();
}


function scrollAnimation() {

    for (let element of progress) {
            
        if (comp.getBoundingClientRect().top < 596.5625) {
            element.style.width = element.getAttribute("data-done") + "%";
            element.style.opacity = 1;
        } 
    }
}

/*
function welcomeLayout() {
    setTimeout(function(){
         welcomeTitle.classList.add("opacity-js");
    },2000);
}
*/

start.addEventListener("click", translate);
window.addEventListener("scroll", scrollAnimation);