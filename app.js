"use strict";

let body = document.querySelector(".body");
let homePage = document.querySelector(".home");
let start = document.querySelector(".start-js");
let layout = document.querySelector(".layout-js");
let myPage = document.querySelector("#head-js");
let comp = document.querySelector(".comp-js");
const progress = document.querySelectorAll(".progress-js");

function translate(e) {
    e.preventDefault(e);

    homePage.classList.add("home-js");

    console.log("test");

}

function scrollAnimation() {

    for (let element of progress) {
            
        if (comp.getBoundingClientRect().top < 596.5625) {
            element.style.width = element.getAttribute("data-done") + "%";
            element.style.opacity = 1;
        } 
    }
}


start.addEventListener("click", translate);

window.addEventListener("scroll", scrollAnimation); 

