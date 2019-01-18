var canvas, ctx;
var A = {x:(1+25/180)*Math.PI, y:1/2*Math.PI, z:0};
var J = {x:0.435889, y:0.9, z:1};
var C = {x: '#FF0000', y: '#00FF00', z: '#0000FF'};
var scale = 10;
var M = {x:0, y:0};
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

function straight(p, a, d) {
    line(p, next(p, A[a], J[a]*d*scale), C[a]);
}

function draw() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(1,-1);
    straight(M, 'x', 10);
    straight(M, 'y', 10);
    straight(M, 'z', 10);
    setTimeout(draw, 200);
}
