let cnv = document.getElementsByTagName("canvas")[0];
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

let draw = _ => {
    // Clear canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, Math.random() * 100, Math.random() * 100);

    requestAnimationFrame(draw);
}

(_ => draw())();