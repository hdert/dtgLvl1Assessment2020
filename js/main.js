/*
main.js © Copyright 2020 Justin Muirhead under the BSD 3-Clause License
code snippets taken from: https://www.w3schools.com/
and: https://github.com/jhay0112/jhay0112.github.io/
go visit: https://jordanhay.tk/
*/

// SPDX-License-Identifier: BSD-3-Clause

"use strict";

var WRAPPER = document.getElementById("wrapper");
var PREVSCROLLPOS = window.pageYOffset;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exitLoadingScreen() {
    document.getElementById("logo").style.animation = "fadeOut 0.5s 1s forwards ease";
    document.getElementById("spinner").style.animation = "spin 1s infinite linear, fadeOut 2s forwards";
    document.getElementById("loadingScreen").style.animation = "slideOutBottom 1.3s 1.5s forwards ease-out";
    await sleep(1200);
    WRAPPER.style.overflowY = "auto";
    /* This makes it so that the scrollbar doesn't show until the loading animation is near complete. */
}

/* Menu */

function openMenu() {
    document.getElementById("menu").style.width = "100vw";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0vw";
}

/* Scroll functions */

function goToTop() {
    WRAPPER.scrollTop = 0; // For Safari
}

function navbarHide() {
    var currentScrollPos = WRAPPER.scrollTop;

    if (currentScrollPos <= 0) {
        document.getElementById("navbar").style.top = "0";
        return;
    }
    if (PREVSCROLLPOS > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    PREVSCROLLPOS = currentScrollPos;
}

function scrollIndicatorUpdate() {
    var winScroll = WRAPPER.scrollTop;
    var height = WRAPPER.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

function backToTopButtonUpdate() {
    if (WRAPPER.scrollTop > 250) {
        document.getElementById("backToTopButton").style.animation = "fadeIn ease 0.3s"
    } else {
        document.getElementById("backToTopButton").style.animation = "fadeOut ease 0.3s forwards"
    }
}

WRAPPER.onscroll = function() {
    backToTopButtonUpdate();
    navbarHide();
    scrollIndicatorUpdate();
}