var canvas, ctx;
var xf=2*Math.PI, yf=2*Math.PI; // XY Facing
var u=10; // Units
function line(x1, y1, x2, y2, color='black') {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
    console.log(x1,y1,x2,y2);
}

function start() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    window.addEventListener('resize', draw, false);
    draw();
}

function draw() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(1,-1);
    xf += 0.1;
    xf %= 2*Math.PI;
    function x(){line(0,0,10*u*Math.sin(xf), 10*u*0, '#FF0000');}
    function y(){line(0,0,10*u*Math.cos(xf), 10*u*0, '#00FF00');}
    function z(){line(0,0,10*u*0, 10*u*1, '#0000FF');}
    if(xf<Math.PI){y();x();}else{x();y();}
    z();
    setTimeout(draw, 200);
}
