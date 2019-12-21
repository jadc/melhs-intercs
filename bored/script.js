let cnv = document.getElementsByTagName("canvas")[0];
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

// Scalable canvas
window.addEventListener("resize", _ => {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
});

let raindrops = [];
class Raindrop {
    constructor(){ 
        this.x = Math.random() * cnv.width;
        this.y = 0;
        this.width = 2;
        this.height = 20;
        this.speed = Math.random() * (30 - 10) + 10;
        this.color = `hsl(230, 50%, 50%)`;
        this.collided = false;
     }

    update = _ => {

        if(this.collided){ // Shrink
            this.height -= this.speed;
            if(this.height <= 0){
                raindrops.splice(raindrops.indexOf(this), 1);
                raindrops.push(new Raindrop());
            }
        }else{
            this.y += this.speed;
            if(this.y > cnv.height + this.height) {
                raindrops.splice(raindrops.indexOf(this), 1);
                raindrops.push(new Raindrop());
            }

            if((this.y > umbrella.y - 50 && this.y < umbrella.y) && (this.x < umbrella.x + 50 && this.x > umbrella.x - 50)) {
                
                for(let i = 0; i < 2; i++) splashes.push(new Splash(this));

                this.collided = true;
            }
        }

        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.height);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
    }
}

let splashes = [];
class Splash {
    constructor(raindrop){
        this.x = raindrop.x;
        this.y = raindrop.y;
        this.xDir = (Math.random() > 0.5) ? 1 : -1;
        this.accel = raindrop.speed / (Math.random() * (10 - 3) + 3);
        this.color = raindrop.color;
    }

    update = _ => {
        this.x += this.xDir * (Math.random() * 3);
        this.y -= this.accel;
        this.accel -= 0.25;

        if(this.y > cnv.height){
            splashes.splice(splashes.indexOf(this), 1);
        }

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, 2*Math.PI);
        ctx.fill();
    }
}

let game = 0;
let draw = _ => {
    game++;
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Objects
    for(let r of raindrops) r.update();
    for(let s of splashes) s.update();

    // Umbrella
    let umimg = new Image();
    umimg.src = "umbrella.svg";
    ctx.drawImage(umimg, umbrella.x - 60, umbrella.y - 60, 120, 120);

    
    if(raindrops.length < 1000 && (game % 30 == 0)) raindrops.push(new Raindrop());

    // Next frame
    requestAnimationFrame(draw);
}

let umbrella = {
    x: cnv.width/2,
    y: cnv.height/2
}

cnv.addEventListener("mousemove", e => {
    umbrella.x = e.clientX;
    umbrella.y = e.clientY - 50;
});

draw();