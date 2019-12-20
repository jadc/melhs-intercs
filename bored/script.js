let cnv = document.getElementsByTagName("canvas")[0];
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

// Consts
const waterColor = "rgb(17, 52, 128)";

// Scalable canvas
window.addEventListener("resize", _ => {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
});

let raindrops = [];
class Raindrop {
    constructor(){ this.set() }

    set = _ => {
        this.x = Math.random() * cnv.width;
        this.y = 0;
        this.width = 1;
        this.height = 50;
        this.speed = Math.random() * (30 - 10) + 10;
    }

    update = _ => {
        this.y += this.speed;
        if(this.y + this.height > cnv.height || (this.y > umbrella.y - 50 && (this.x < umbrella.x + 50 && this.x > umbrella.x - 50))) {
            
            for(let i = 0; i < 5; i++) splashes.push(new Splash(this.x, this.y + 30));

            this.y = 0;
            this.set();
        }

        ctx.lineWidth = this.width;
        ctx.strokeStyle = waterColor;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.height);
        ctx.stroke();
    }
}
for(let i = 0; i < 100; i++){
    raindrops.push(new Raindrop());
}

let splashes = [];
class Splash {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xDir = (Math.random() > 0.5) ? 1 : -1;
        this.accel = Math.random() * 10;
    }

    update = _ => {
        this.x += this.xDir * (Math.random() * 5);
        this.y -= this.accel;
        this.accel--;

        if(this.y > cnv.height){
            splashes.splice(splashes.indexOf(this), 1);
        }

        ctx.fillStyle = waterColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, 2*Math.PI);
        ctx.fill();
    }
}

let draw = _ => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    for(let r of raindrops) r.update();
    for(let s of splashes) s.update();

    // Umbrella
    ctx.fillStyle = "white";
    ctx.fillRect(umbrella.x, umbrella.y, 5, 100);
    ctx.fillRect(umbrella.x - 50, umbrella.y, 100, 5);

    // Next frame
    requestAnimationFrame(draw);
}

let umbrella = {
    x: cnv.width + 1000,
    y: cnv.height + 1000
}

cnv.addEventListener("mousemove", e => {
    umbrella.x = e.clientX;
    umbrella.y = e.clientY - 50;
});

draw();