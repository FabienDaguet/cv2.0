"use strict";

let body = document.querySelector(".body");
let homePage = document.querySelector(".home");
let start = document.querySelector(".start-js");
let layout = document.querySelector(".layout-js");
let myPage = document.querySelector("#head-js");
let comp = document.querySelector(".comp-js");
const progress = document.querySelectorAll(".progress-js");

function welcome(e) {
    e.preventDefault(e);

}

function scrollAnimation() {

    for (let element of progress) {
            
        if (comp.getBoundingClientRect().top < 596.5625) {
            element.style.width = element.getAttribute("data-done") + "%";
            element.style.opacity = 1;
        } 
    }
}



window.addEventListener("scroll", scrollAnimation); 

start.addEventListener("click", welcome);