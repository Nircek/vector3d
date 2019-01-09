var canvas, ctx;
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function start() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.scale(1,-1);
    line(0,0,10,0);
    line(0,0,0,10);
}
