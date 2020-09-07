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
    constructor(coordX, coordY, height, width) {
        this.coordX=coordX;
        this.coordY=coordY;
        this.height=height;
        this.width=width;
        this.r = 0;
        this.g = 0;
        this.b = 12.75;
        this.color= [this.r,this.g,this.b];
    }

    update() {
        this.color= [this.r,this.g,this.b];
        fill(this.color);
        rect(this.coordX, this.coordY, this.width, this.height);
        console.log(this.b);
    }

    
}

var rain = []
var ground = new Ground(0, 475, 50, 600);
rain[1] = new Raindrop(100, 0, 2, [50, 74, 168]);
rain[2] = new Raindrop(200, 0, 2, [50, 74, 168]);
rain[3] = new Raindrop(300, 0, 2, [50, 74, 168]);
rain[4] = new Raindrop(400, 0, 2, [50, 74, 168]);



function setup() {
    createCanvas(600,500);
}

function draw() {
    background(163, 164, 168);


    ground.update();
    
    rain.forEach(
        function (raindrop) {
            raindrop.update();
            var isHitGround = isDropHitGround(raindrop.cx, raindrop.cy, ground.coordX, ground.coordY, ground.width, ground.height);
                if(isHitGround) {
                    ground.b += 5;
                    raindrop.cy = 0;

        
                }
        }
    )

    

    

    
}

function isDropHitGround(pointX, pointY, boxX, boxY, boxWidth, boxHeight) {
    //assume no hit
    var hitDetected = false;

    //check for hit
    if((pointX > boxX) && (pointY > boxY)) {
        if((pointX < boxX + boxWidth) && (pointY < boxY + boxHeight)) {
            
        //change to true if hitting
        hitDetected = true;
                
            
        }

        
    }
    
    return hitDetected;
    
    
}