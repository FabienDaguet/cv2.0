"use strict";

let body = document.querySelector(".body");
let homePage = document.querySelector(".home");
let start = document.querySelector(".start-js");
let layout = document.querySelector(".layout-js");
let myPage = document.querySelector("#head-js");

function welcome(e) {
    e.preventDefault(e);

}

start.addEventListener("click", welcome);