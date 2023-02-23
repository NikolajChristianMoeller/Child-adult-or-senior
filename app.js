
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
}

function isAdult() {
    console.log("Is adult");
}

function isSenior() {
    console.log("Is senior");
}

function isUnborn() {
    console.log("Is unborn");
}

startApp();



