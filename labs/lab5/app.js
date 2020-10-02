
let application = document.getElementById("application");
TweenMax.from(application, { duration: 2, x: -650, alpha: 0});


let titlebox = document.getElementById("titlebox");
let purp1 = document.getElementById("purp1");
let purp2 = document.getElementById("purp2");
let purp3 = document.getElementById("purp3");
let purp4 = document.getElementById("purp4");
let purp5 = document.getElementById("purp5");
let purp6 = document.getElementById("purp6");

function disapp(item) {
    TweenMax.to(item, {duration: 0.7, opacity: 0});
    
}



