var svgcircles = document.getElementsByClassName("st1");
var circles = Array.from(svgcircles);
var rscoredisplay = document.getElementById("rscore");
var yscoredisplay = document.getElementById("yscore");


console.log(circles);



class  RedPlayer {
    constructor() {
        this.rscore= 0;
    }

    addredpoint() {
        redscore.rscore += 1;
        rscoredisplay = document.getElementById("rscore").innerHTML= redscore.rscore;
        gameturn.reset();
    }

    render() {
        return this.rscore;
    }
}

class YellowPlayer{
    constructor() {
        this.yscore=0;
    }
    
    addyellowpoint() {
        yellowscore.yscore += 1;
        yscoredisplay = document.getElementById("yscore").innerHTML = yellowscore.yscore;
        gameturn.reset();
    }

    render() {
        return this.yscore;
    }
}

class GameTurn {
    constructor() {
        this.turn=0;
        this.turnColor= "white";
        this.clicked = false;
    }

    reset() {
        for (let i=0; i < circles.length; i++) {
            circles[i].style.fill= "white";
        }
    }

    render() {
        return this.turn;
        
    }


}

var redscore = new RedPlayer;
var yellowscore = new YellowPlayer;
var gameturn = new GameTurn;

function addColor(newEvent) {
    if(gameturn.turn%2 === 0 ) {
        newEvent.target.style.fill = "yellow";
        TweenMax.from(newEvent.target, {duration: 0.5, y:-162});
        gameturn.turn += 1;
        console.log(gameturn.turn);
    }else{
        newEvent.target.style.fill = "red";
        TweenMax.from(newEvent.target, {duration: 0.5, y: -162});
        gameturn.turn += 1;
        console.log(gameturn.turn);
    }
}





function gameTime() {
    for (let i=0; i < circles.length; i++) {
    circles[i].addEventListener("click", addColor);
}
        redscore.render();
        yellowscore.render();
        gameturn.render();
    }   




gameTime();
console.log(gameturn.turn);





