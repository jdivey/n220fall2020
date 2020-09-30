
let recOne = document.getElementById("recOne");
recOne.addEventListener("click", drawX1);
recOne.addEventListener("dblclick", drawO1);
var lineOne = document.getElementById("lineOne");
let lineTwo = document.getElementById("lineTwo");
var circOne = document.getElementById("circOne");

let recTwo = document.getElementById("recTwo");
recTwo.addEventListener("click", drawX2);
recTwo.addEventListener("dblclick", drawO2);
var lineThree = document.getElementById("lineThree");
let lineFour = document.getElementById("lineFour");
var circTwo = document.getElementById("circTwo");

let recThree = document.getElementById("recThree");
recThree.addEventListener("click", drawX3);
var lineFive = document.getElementById("lineFive");
let lineSix = document.getElementById("lineSix");

let recFour = document.getElementById("recFour");
recFour.addEventListener("click", drawX4);
recFour.addEventListener("dblclick", drawO4);
var lineSeven = document.getElementById("lineSeven");
let lineEight = document.getElementById("lineEight");
var circFour = document.getElementById("circFour");

function drawX1() {
    console.log("click" + lineOne);
    
    lineOne.style.stroke= "black";
    lineTwo.style.stroke= "black";
}

function drawX2() {
    
    lineThree.style.stroke= "black";
    lineFour.style.stroke= "black";
}

function drawX3() {
    
    lineFive.style.stroke= "black";
    lineSix.style.stroke= "black";
}

function drawX4() {
    
    lineSeven.style.stroke= "black";
    lineEight.style.stroke= "black";
}

function drawO1() {
    lineOne.style.stroke= "white";
    lineTwo.style.stroke= "white";
    circOne.style.stroke= "black";
}

function drawO2() {
    lineThree.style.stroke= "white";
    lineFour.style.stroke= "white";
    circTwo.style.stroke= "black";
}

function drawO4() {
    lineSeven.style.stroke= "white";
    lineEight.style.stroke= "white";
    circFour.style.stroke= "black";
}

drawFrame();

function drawFrame() {

    
    requestAnimationFrame(drawFrame);
}