// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80);

// Filled Triangle for Hair
ctx.beginPath();
ctx.moveTo(180, 80);
ctx.lineTo(140, 100);
ctx.lineTo(220, 100);
ctx.fill();

// Filled Triangle for Hair
ctx.beginPath();
ctx.moveTo(340, 80);
ctx.lineTo(300, 100);
ctx.lineTo(380, 100);
ctx.fill();

// Outlined Triangle for Hair
ctx.beginPath();
ctx.moveTo(260, 80);
ctx.lineTo(220, 100);
ctx.lineTo(300, 100);
ctx.closePath()
ctx.stroke();

// Outlined Triangle for Hair
ctx.beginPath();
ctx.moveTo(420, 80);
ctx.lineTo(380, 100);
ctx.lineTo(460, 100);
ctx.closePath()
ctx.stroke();

// Filled Triangle for Neck
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(220, 600);
ctx.lineTo(380, 600);
ctx.fill();

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
ctx.fillRect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
ctx.beginPath();
ctx.arc(200, 250, 50, 0, 2 * Math.PI);
ctx.fill();

// Filled Circle for Right Eye Socket
ctx.beginPath();
ctx.arc(400, 250, 50, 0, 2 * Math.PI);
ctx.fill();

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
ctx.beginPath();
ctx.moveTo(200, 380);
ctx.lineTo(400, 380);
ctx.stroke();

// First Vertical Line for Teeth
ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(250, 410);
ctx.stroke();

// Second Vertical Line for Teeth
ctx.beginPath();
ctx.moveTo(300, 350);
ctx.lineTo(300, 410);
ctx.stroke();

// Third Vertical Line for Teeth
ctx.beginPath();
ctx.moveTo(350, 350);
ctx.lineTo(350, 410);
ctx.stroke();

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.beginPath();
ctx.arc(200, 250, 30, 0, 2 * Math.PI);
ctx.fill();

// Filled Circle for Right Eye
ctx.beginPath();
ctx.arc(400, 250, 10, 0, 2 * Math.PI);
ctx.fill();

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
ctx.beginPath();
ctx.arc(200, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

// Outlined Circle for Right Eye Socket
ctx.beginPath();
ctx.arc(400, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

// Line for Left Eyebrow
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(150, 180);
ctx.lineTo(250, 180);
ctx.stroke();

// Line for Right Eyebrow
ctx.beginPath();
ctx.moveTo(350, 160);
ctx.lineTo(450, 180);
ctx.stroke();

// Outlined Triangle for Nose
ctx.beginPath();
ctx.moveTo(300, 280);
ctx.lineTo(320, 320);
ctx.lineTo(280, 320);
ctx.closePath();
ctx.stroke();