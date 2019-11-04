let cnv = document.getElementsByTagName("canvas")[0];
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

let draw = _ => {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    requestAnimationFrame(draw);
}

(_ => draw())();