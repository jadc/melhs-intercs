// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

/* 
I am aware on how to create objects, so
I taught myself classes (again, I keep forgetting)
to optimize the code even further
*/
class Block {
    constructor(x, y, w, color){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = 10;
        this.speed = Math.random() * 10 - 5;
        this.color = color;
        this.update = () => {
            this.x += this.speed;
            if(this.x + this.w > cnv.width || this.x < 0) this.speed = -this.speed;
        }
        this.draw = () => {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }
}

// Global Variables
let block1 = new Block(100, 200, 100, "orange");
let block2 = new Block(300, 300, 75, "purple")
let block3 = new Block(500, 500, 120, "green");

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE
    block1.update();
    block2.update();
    block3.update();

    // DRAW
    
    /// Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    /// Draw blocks 1, 2, and 3
    block1.draw();
    block2.draw();
    block3.draw();

    // Request Another Animation Frame
    requestAnimationFrame(animate);
}