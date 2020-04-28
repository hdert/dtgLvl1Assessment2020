/*
main.js © Copyright 2020 Justin Muirhead under the BSD 3-Clause License
code snippets taken from: https://www.w3schools.com/
and: https://github.com/jhay0112/jhay0112.github.io/
go visit: https://jordanhay.tk/
*/

// SPDX-License-Identifier: BSD-3-Clause

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exitLoadingScreen() {
    loadingScreen = document.getElementById("loadingScreen");
    loadingSpinner = document.getElementById("spinner");
    loadingLogo = document.getElementById("logo");

    loadingLogo.style.animation = "fadeOut 0.5s 1s forwards ease";
    loadingSpinner.style.animation = "spin 1s infinite linear, fadeOut 2s forwards";
    loadingScreen.style.animation = "slideOutBottom 1.3s 1.5s forwards ease-out";
    await sleep(1200);
    document.body.style.overflowY = "auto";
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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For others
}

function navbarHide() {
    var currentScrollPos = window.pageYOffset;

    if (window.pageYOffset <= 0) {
        document.getElementById("navbar").style.top = "0";
        return;
    }
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

function scrollIndicatorUpdate() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

function backToTopButtonUpdate() {
    var backToTopButton = document.getElementById("backToTopButton");

    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backToTopButton.style.animation = "fadeIn ease 0.3s"
    } else {
        backToTopButton.style.animation = "fadeOut ease 0.3s forwards"
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    backToTopButtonUpdate();
    navbarHide();
    scrollIndicatorUpdate();
}