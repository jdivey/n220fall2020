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
rain[5] = new Raindrop(450, 0, 2, [50, 74, 168]);
rain[6] = new Raindrop(150, 0, 2, [50, 74, 168]);
rain[7] = new Raindrop(250, 0, 2, [50, 74, 168]);
rain[8] = new Raindrop(350, 0, 2, [50, 74, 168]);
rain[9] = new Raindrop(175, 0, 2, [50, 74, 168]);
rain[10] = new Raindrop(375, 0, 2, [50, 74, 168]);
rain[11] = new Raindrop(550, 0, 2, [50, 74, 168]);
rain[12] = new Raindrop(575, 0, 2, [50, 74, 168]);
rain[13] = new Raindrop(75, 0, 2, [50, 74, 168]);
rain[14] = new Raindrop(50, 0, 2, [50, 74, 168]);
rain[15] = new Raindrop(25, 0, 2, [50, 74, 168]);

var rainhits = 0;

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
                     
                    rainhits += 1;
                    raindrop.cy = 0;
                    console.log(rainhits);
                    
                    if(rainhits % 10 == 0) {
                        ground.b += 10;
                    }
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