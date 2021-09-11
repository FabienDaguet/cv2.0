"use strict";

let start = document.querySelector(".start-js");
let myPage = document.getElementById("mypage-js");

function welcome() {
let target = myPage;
target.scrollIntoView({
    behavior: "smooth"
});

 console.log("test");
}

start.addEventListener("click", welcome);