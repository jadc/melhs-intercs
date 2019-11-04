// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
let resetArray = _ => {
    myArray = [];
    for(let i = 0; i < 100; i++) myArray.push(300);
    
}
(() => { resetArray() })()

// Key Press Handler
window.addEventListener("keydown", e => {
    // On 'Space" press
    if(e.keyCode === 32){ 
        for(let i = 0; i < myArray.length; i++) myArray[i] += Math.floor(Math.random() * (5 * 2 + 1)) - 5;
    }
    // On 'r' press
    if(e.keyCode === 82) resetArray();
    // On '1' press
    if(e.keyCode === 49){
        for(let i = 0; i < myArray.length; i++){
            if(myArray[i] === 400) myArray.splice(i--, 1);
        }
    }
    // On '2' press
    if(e.keyCode === 50){
        for(let i = 0; i < myArray.length; i++){
            if(myArray[i] === 200) myArray.splice(i--, 1);
        }
    }
});

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}