let cnv = document.getElementsByTagName("canvas")[0];
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

// Scalable canvas
window.addEventListener("resize", _ => {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
});

// Constants
const wind = 500;

class Snowflake {
    constructor(){
        this.x = Math.random() * cnv.width;
        this.y = Math.random() * cnv.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 4 + 1;
        this.shade = Math.random() * 100 + 155;

        this.sparkle = Math.random() * 10;
    }
    update = _ => {
        // Appearance
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);

        // Random x variation
        this.x += (Math.random() * 2) - 1;

        // Sparkle
        if(this.shade <= 155 || this.shade >= 255) this.sparkle *= -1;
        this.shade += this.sparkle;

        // Motion
        if(this.y < cnv.height + this.size) {
            this.y += this.speed;
        }else{
            this.y = -this.size;
            this.x = Math.random() * cnv.width;
        }

        ctx.fillStyle = `rgb(${this.shade},${this.shade},${this.shade})`;
        ctx.fill();
    }
}

let snowflakes = [];
let draw = _ => {
    // Clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Instructions
    ctx.strokeStyle = "lightgray";
    ctx.font = "32px times";
    ctx.textAlign = "center";
    ctx.strokeText(snowflakes.length > 0 ? ` ${snowflakes.length} snowflakes` : "click anywhere for snowflakes...", cnv.width/2, cnv.height/2);
    
    // Render snowflakes
    for(let flake of snowflakes) flake.update();

    // Next frame
    requestAnimationFrame(draw);
}

(_ => draw())();

// Spawn with a click
window.addEventListener("click", _ => {
    if(snowflakes.length < 7000){
        for(let i = 0; i < 50; i++){
            snowflakes.push(new Snowflake());
        }
    }
});