// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let block1X = 100;
let block1Y = 200;
let block1W = 100;
let block1H = 10
let block1Xspeed = randomDec(-5, 5);
let block1Color = 'orange';

let block2X = 300;
let block2Y = 300;
let block2W = 75;
let block2H = 10
let block2Xspeed = randomDec(-5, 5);
let block2Color = 'purple';

let block3X = 500;
let block3Y = 500;
let block3W = 120;
let block3H = 10
let block3Xspeed = randomDec(-5, 5);
let block3Color = 'green';

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE

    // Update block 1 - move and bounce horizontally
    block1X += block1Xspeed;
    if (block1X + block1W > cnv.width || block1X < 0) {
        block1Xspeed = -block1Xspeed;
    }

    // Update block 2 - move and bounce horizontally
    block2X += block2Xspeed;
    if (block2X + block2W > cnv.width || block2X < 0) {
        block2Xspeed = -block2Xspeed;
    }

    // Update block 3 - move and bounce horizontally
    block3X += block3Xspeed;
    if (block3X + block3W > cnv.width || block3X < 0) {
        block3Xspeed = -block3Xspeed;
    }

    // DRAW
    
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw block 1
    ctx.fillStyle = block1Color;
    ctx.fillRect(block1X, block1Y, block1W, block1H);

    // Draw block 2
    ctx.fillStyle = block2Color;
    ctx.fillRect(block2X, block2Y, block2W, block2H);

    // Draw block 3
    ctx.fillStyle = block3Color;
    ctx.fillRect(block3X, block3Y, block3W, block3H);

    // Request Another Animation Frame
    requestAnimationFrame(animate);
}

// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}