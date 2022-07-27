"use strict";
let openSlide = document.getElementById("nav-menu");
let closeSlide = document.querySelector(".close-button");
let navSlide = document.querySelector(".nav-slide");
openSlide === null || openSlide === void 0 ? void 0 : openSlide.addEventListener("click", function () {
    navSlide.style.width = "100%";
});
closeSlide === null || closeSlide === void 0 ? void 0 : closeSlide.addEventListener("click", function () {
    navSlide.style.width = "0";
});
