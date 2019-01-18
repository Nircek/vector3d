var canvas, ctx;
var ax=(1+25/180)*Math.PI, ay=1/2*Math.PI, az=0;
var jx=0.435889, jy=0.9, jz=1;
var scale=10;
var u=10; // Units
var middle = {x:0, y:0};
function line(p1, p2, color='black') {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function start() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    window.addEventListener('resize', draw, false);
    draw();
}

function next(p, a, d) {
    return {x: p.x+d*Math.sin(a), y: p.y+d*Math.cos(a)};
}

function draw() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(1,-1);
    line(middle, next(middle, ax, jx*10*scale), '#FF0000');
    line(middle, next(middle, ay, jy*10*scale), '#00FF00');
    line(middle, next(middle, az, jz*10*scale), '#0000FF');
    setTimeout(draw, 200);
}
