"use strict";
const WRAPPER = document.getElementById("wrapper");
const NAVBAR = document.getElementById("navbar");
const PROGRESSBAR = document.getElementById("progressBar");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function exitLoadingScreen() {
  document.getElementById("logo").style.animation =
    "fadeOut 0.5s 1s forwards ease";
  document.getElementById("spinner").style.animation =
    "spin 1s infinite linear, fadeOut 2s forwards";
  document.getElementById("loadingScreen").style.animation =
    "slideOutBottom 1.3s 1.5s forwards ease-out";
  await sleep(1200);
  WRAPPER.style.overflowY = "auto";
}

function openMenu() {
  document.getElementById("menu").style.width = "100vw";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0vw";
}

function goToTop() {
  WRAPPER.scrollTop = 0;
}
var navbarHide = (function() {
  var PREVSCROLLPOS = WRAPPER.scrollTop;
  return function() {
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

function scrollIndicatorUpdate() {
  PROGRESSBAR.style.width =
    ((WRAPPER.scrollTop / (WRAPPER.scrollHeight -
      document.documentElement.clientHeight)) * 100) + "%";
}

function backToTopButtonUpdate() {
  if (WRAPPER.scrollTop > 250) {
    document.getElementById("backToTopButton").style.animation =
      "fadeIn ease 0.3s";
  } else {
    document.getElementById("backToTopButton").style.animation =
      "fadeOut ease 0.3s forwards";
  }
}
WRAPPER.onscroll = function() {
  backToTopButtonUpdate();
  navbarHide();
  scrollIndicatorUpdate();
};