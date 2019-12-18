let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2  ;
ctx.translate(radius, radius);
radius = radius * 0.9
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    drawLines(ctx, radius);

}

function drawFace(ctx, radius) {
    let grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.7, 0,0,radius*1.2);
    grad.addColorStop(0, 'white');
    grad.addColorStop(0.5, 'black');
    grad.addColorStop(0.5, 'black');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.03, 0, 2*Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    let ang;
    let num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    ctx.fillStyle = 'white';

    for(num = 1; num <=12; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, - radius*0.85);
        ctx.strokeRect (5,-25,0.5 ,0);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}
function  drawLines(ctx, radius) {
    let number;
    let ang;

      for(num = 1; num <=60; num++){
        ang = num * Math.PI / 30;
        ctx.rotate(ang);
        ctx.translate(0, - radius*0.9);
        ctx.rotate(-ang);
        ctx.strokeRect (-85,-5,0.3 ,0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour=hour%12;
    hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.01);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(-0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}