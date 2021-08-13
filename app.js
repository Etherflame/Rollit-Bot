"use strict";

const dropMenu = document.querySelector(".menu");
const dropMenuButton = document.querySelector(".main-header__svg");

dropMenuButton.addEventListener("click", function () {
  dropMenu.classList.toggle("none");
});
