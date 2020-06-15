/*
main.ts © Copyright 2020 Justin Muirhead under the BSD 3-Clause License
code snippets taken from: https://www.w3schools.com/
and: https://github.com/jhay0112/jhay0112.github.io/
go visit: https://jordanhay.tk/
*/

// SPDX-License-Identifier: BSD-3-Clause

"use strict";

/* Declare frequently used HTML DOM elements so as to not slow down the DOM element finder */

const WRAPPER = document.getElementById("wrapper") as HTMLDivElement;
const NAVBAR = document.getElementById("navbar") as HTMLDivElement;
const PROGRESSBAR = document.getElementById("progressBar") as HTMLDivElement;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  /* A function that sleeps for a time in ms */
}

async function exitLoadingScreen() {
  (document.getElementById("logo") as HTMLImageElement).style.animation =
    "fadeOut 0.5s 1s forwards ease";
  (document.getElementById("spinner") as HTMLImageElement).style.animation =
    "spin 1s infinite linear, fadeOut 2s forwards";
  (document.getElementById("loadingScreen") as HTMLDivElement).style.animation =
    "slideOutBottom 0.9s 1.5s forwards ease-out";
  await sleep(1450);
  WRAPPER.style.overflowY = "auto";
  /* This makes it so that the scrollbar doesn't show until the loading animation is near complete. */
  /* A function that exits the loading screen by making each element transparent then making 
  the background transparent whilst moving it down to allow the user to interact with the page */
}

/* Menu */

function openMenu() {
  (document.getElementById("menu") as HTMLDivElement).style.width = "100vw";
}

function closeMenu() {
  (document.getElementById("menu") as HTMLDivElement).style.width = "0vw";
}

/* These funcions open and close the menu with an animation which is done by
setting a transition time in the css. */

/* Scroll functions */

function goToTop() {
  WRAPPER.scrollTop = 0;
  /* Takes user to the top of the page */
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
    } else {
      NAVBAR.style.top = "-50px";
    }
    PREVSCROLLPOS = currentScrollPos;
  };
})();
/* This function hides and unhides the navbar based on whether the user has scrolled up
or scrolled down since the last function call */

function scrollIndicatorUpdate() {
  PROGRESSBAR.style.width =
    (WRAPPER.scrollTop /
      (WRAPPER.scrollHeight - document.documentElement.clientHeight)) *
      100 +
    "%";
}
/* This function updates the progressBar at the bottom of the navbar everytime the user
scrolls proportional to where they are on the page in the x-axis at the moment. */

function backToTopButtonUpdate() {
  if (WRAPPER.scrollTop > 250) {
    (document.getElementById(
      "backToTopButton"
    ) as HTMLButtonElement).style.animation = "fadeIn ease 0.3s";
  } else {
    (document.getElementById(
      "backToTopButton"
    ) as HTMLButtonElement).style.animation = "fadeOut ease 0.3s forwards";
  }
}
/* This function checks if the user has scrolled past a certain point, if they have
it shows the backToTopButton and if they haven't it hides it. */

WRAPPER.onscroll = function () {
  backToTopButtonUpdate();
  navbarHide();
  scrollIndicatorUpdate();
};
/* This attaches an onScroll event to the scroll wrapper and calls the scroll events
when it is triggered. */
