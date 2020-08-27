class Rain {
    
}

class Raindrop {
    constructor(cx, cy, radius, color) {
        this.cx=cx;
        this.cy=cy;
        this.radius=radius;
        this.color=color
        this.speed= 2 + Math.random() *2;
    }

    update() {
        this.cy=this.cy + this.speed;
        fill(this.color);
        circle(this.cx, this.cy, this.radius);
    }
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

var rain = []
var ground = new Ground(0, 475, 50, 600, [50, 74, 168]);
rain[1] = new Raindrop(100, 0, 2, [50, 74, 168]);
rain[2] = new Raindrop(200, 0, 2, [50, 74, 168]);



function setup() {
    createCanvas(600,500);
}

function draw() {
    console.log("draw");
    background(163, 164, 168);

    fill(ground.color);
    rect(ground.coordX, ground.coordY, ground.width, ground.height);
    
    rain[1].update();
    rain[2].update();
}
