// Blocks

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let block1 = {
    x: 100,
    y: 200,
    w: 100,
    h: 10,
    speed: randomDec(-5, 5),
    color: "orange"
}

let block2 = {
    x: 300,
    y: 300,
    w: 75,
    h: 10,
    speed: randomDec(-5, 5),
    color: "purple"
}

let block3 = {
    x: 500,
    y: 500,
    w: 120,
    h: 10,
    speed: randomDec(-5, 5),
    color: "green"
}

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE

    // Update block 1 - move and bounce horizontally
    block1.x += block1.speed;
    if (block1.x + block1.w > cnv.width || block1.x < 0) {
        block1.speed = -block1.speed;
    }

    // Update block 2 - move and bounce horizontally
    block2.x += block2.speed;
    if (block2.x + block2.w > cnv.width || block2.x < 0) {
        block2.speed = -block2.speed;
    }

    // Update block 3 - move and bounce horizontally
    block3.x += block3.speed;
    if (block3.x + block3.w > cnv.width || block3.x < 0) {
        block3.speed = -block3.speed;
    }

    // DRAW
    
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw block 1
    ctx.fillStyle = block1.color;
    ctx.fillRect(block1.x, block1.y, block1.w, block1.h);

    // Draw block 2
    ctx.fillStyle = block2.color;
    ctx.fillRect(block2.x, block2.y, block2.w, block2.h);

    // Draw block 3
    ctx.fillStyle = block3.color;
    ctx.fillRect(block3.x, block3.y, block3.w, block3.h);

    // Request Another Animation Frame
    requestAnimationFrame(animate);
}

// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}