/*
main.js © Copyright 2020 Justin Muirhead under the BSD 3-Clause License
code snippets taken from: https://w3schools.com/
and: https://github.com/jhay0112/jhay0112.github.io
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
    loadingScreen.style.animation = "fadeOut 1.3s 1.5s forwards ease-out, slideOutBottom 1.3s 1.5s forwards ease-out";
    await sleep(1200);
    document.body.style.overflowY = "auto";
    /* this makes it so that the scrollbar doesn't show until the loading animation is near complete */
    // await sleep(1000);
    // loadingScreen.style.animation = "slideOutBottom 0.1s forwards"
}