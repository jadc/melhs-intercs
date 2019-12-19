// DS - MODULE EXAM

// Canvas Setup
let cnv = document.getElementsByTagName("canvas")[0];
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 700;

// Global Vars
let bg = document.getElementById("spacebg");

class Laser {
    constructor(){
        this.height = 5;
        this.reset();
    }

    reset = _ => {
        this.x = -this.width;
        this.y = getRandomInteger(0, cnv.height);
        this.width = getRandomInteger(50, 200);
        this.speed = getRandomInteger(10, 30);
        this.color = getRandomColor();
    }

    update = _ => {
        // Motion
        if(this.x < cnv.width + this.width || this.x < 0 - this.width){
            this.x += this.speed;
            this.y += getRandomInteger(0, 2) - 1;
        }else{
            this.reset();
        }

        // Drawing
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let lasers = [];
for(let i = 0; i < 100; i++) lasers.push(new Laser());

// Event Listeners
cnv.addEventListener("mousemove", mouseEventHandler);
document.addEventListener("keydown", keypressHandler);
document.addEventListener("mouseup", myBonusFunction);

// Canvas Drawing

let draw = _ => {
    // Clear canvas
    ctx.globalAlpha = 0.25;
    ctx.drawImage(bg, 0, 0, cnv.width, cnv.height);

    // Draw lasers
    for(let laser of lasers) laser.update();

    // Draw next frame
    requestAnimationFrame(draw);
}

// Run draw first time
(_ => draw())();


// getRandomColor
function getRandomColor() {
    return `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`
}

// mouseEventHandler Handler
function mouseEventHandler(e){
    for(let laser of lasers) laser.y = e.clientY - 80;
}

// keypressHandler
function keypressHandler(e){
    let delta = 0;
    if(e.key === "q") delta = 1;
    if(e.key === "z") delta = -1;
    for(let laser of lasers) laser.speed += delta;
}

// myBonusFunction
function getRandomInteger(min, max){
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
}

function myBonusFunction(){
    for(let i = 0; i < 10; i++) lasers.push(new Laser());
}