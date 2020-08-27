class Rain {
    constructor(height, weight) {
        this.height=2,
        this.width=2
    }
}

class Raindrop {

}



class Ground {
    constructor(coordX, coordY, height, width, color) {
        this.coordX=coordX;
        this.coordY=coordY;
        this.height=height;
        this.width=width;
        this.color= color;
    }
}

var ground = new Ground(100,100, 50, 500, [50, 74, 168]);



function setup() {
    createCanvas(600,500);
}

function draw() {
    console.log("draw");
    rect(ground.coordX, ground.coordY, ground.width, ground.height);
}
