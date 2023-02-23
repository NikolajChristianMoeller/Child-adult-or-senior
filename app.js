
"use strict";
console.log("app.js is ready");


function startApp() {
    console.log("startApp kører");

    let age = 1;

    if (age > 18 && age <= 64) {
        isAdult()
    } else if (age < 18 && age >0) {
        isChild();
    } else if (age > 64) {
        isSenior();
    } else if (age == 0) {
        isUnborn();
    }   
    
}


function isChild() {
    console.log("Is child");
    document.querySelector("body").classList.add("blue");
}

function isAdult() {
    console.log("Is adult");
    document.querySelector("body").classList.add("green");
}

function isSenior() {
    console.log("Is senior");
    document.querySelector("body").classList.add("red");
}

function isUnborn() {
    console.log("Is unborn");
    document.querySelector("body").classList.add("yellow");
}

startApp();



