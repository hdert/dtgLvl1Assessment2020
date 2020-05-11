/*
main.js © Copyright 2020 Justin Muirhead under the BSD 3-Clause License
code snippets taken from: https://www.w3schools.com/
and: https://github.com/jhay0112/jhay0112.github.io/
go visit: https://jordanhay.tk/
*/

// SPDX-License-Identifier: BSD-3-Clause

"use strict";

const WRAPPER = (document.getElementById("wrapper") as HTMLDivElement);
const NAVBAR = (document.getElementById("navbar") as HTMLDivElement);
const PROGRESSBAR = (document.getElementById("progressBar") as HTMLDivElement);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function exitLoadingScreen() {
  (document.getElementById("logo") as HTMLImageElement).style.animation =
    "fadeOut 0.5s 1s forwards ease";
  (document.getElementById("spinner") as HTMLImageElement).style.animation =
    "spin 1s infinite linear, fadeOut 2s forwards";
  (document.getElementById("loadingScreen") as HTMLDivElement).style.animation =
    "slideOutBottom 1.3s 1.5s forwards ease-out";
  await sleep(1200);
  WRAPPER.style.overflowY = "auto";
  /* This makes it so that the scrollbar doesn't show until the loading animation is near complete. */
}

/* Menu */

function openMenu() {
  (document.getElementById("menu") as HTMLDivElement).style.width = "100vw";
}

function closeMenu() {
  (document.getElementById("menu") as HTMLDivElement).style.width = "0vw";
}

/* Scroll functions */

function goToTop() {
  WRAPPER.scrollTop = 0;
}

var navbarHide = (function () {
  var PREVSCROLLPOS = WRAPPER.scrollTop;

  return function () {
    var currentScrollPos = WRAPPER.scrollTop;

    if (currentScrollPos <= 0) {
      NAVBAR.style.top = "0";
      return;
    }
    if (PREVSCROLLPOS > currentScrollPos) {
      NAVBAR.style.top = "0";
    }
    else {
      NAVBAR.style.top = "-50px";
    }
    PREVSCROLLPOS = currentScrollPos;
  };
})();

function scrollIndicatorUpdate() {
  PROGRESSBAR.style.width =
    ((WRAPPER.scrollTop / (WRAPPER.scrollHeight -
      document.documentElement.clientHeight)) * 100) + "%";
}

function backToTopButtonUpdate() {
  if (WRAPPER.scrollTop > 250) {
    (document.getElementById("backToTopButton") as HTMLButtonElement).style.animation =
      "fadeIn ease 0.3s";
  }
  else {
    (document.getElementById("backToTopButton") as HTMLButtonElement).style.animation =
      "fadeOut ease 0.3s forwards";
  }
}

WRAPPER.onscroll = function () {
  backToTopButtonUpdate();
  navbarHide();
  scrollIndicatorUpdate();
};