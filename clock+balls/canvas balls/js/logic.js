    getContext() {
        model.ctx = document.getElementById('canvas').getContext('2d');
        model.ctx.save();
    }
    addRound(){
        model.ctx.clearRect(0,0,400,600);
        model.ctx.beginPath();
        model.ctx.lineWidth = 5;
        model.ctx.moveTo(50, 0);
        model.ctx.lineTo(0,600);
        model.ctx.lineTo(400,600);
        model.ctx.lineTo(400,0);
        model.ctx.lineTo(0,0);
        model.ctx.stroke();
        model.ctx.fillStyle = 'rgba(0,0,0, 0)';
        model.ctx.fill();
    }
};

export const moving = (balls) => {
    for(let i = 0; i < balls.length; i++){
        balls[i].setCoord();
        balls[i].collision();
        balls[i].direction();
    }
};

export default class Ball {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.model = new Model(x, y, dx, dy);
        this.model.save();
        this.getCoords = () =>{
            return [this.x, this.y]
        };
        this.setCoord = () => {
            this.x += this.dx;
            this.y += this.dy;
            if(this.x + this.dx >= 380 || this.x + this.dx === 20){
                this.dx = -this.dx;
            }
            if(this.y + this.dy >= 580 || this.y + this.dy === 20){
                this.dy = -this.dy;
            }
        };
        this.move = (x,y) =>{
            this.model.ctx.beginPath();
            this.model.ctx.lineWidth = 1;
            this.model.ctx.arc(x , y, 20, 0, 2 * Math.PI);
            this.model.ctx.stroke();
            this.model.ctx.fillStyle = 'blue';
            this.model.ctx.fill();
        };
        this.direction = () => {
            this.model.x += this.model.dx;
            this.model.y += this.model.dy;
            if(this.model.x + this.model.dx >= 380 || this.model.x + this.model.dx === 20){
                this.model.dx = -this.model.dx;
            }
            if(this.model.y + this.model.dy >= 580 || this.model.y + this.model.dy === 20){
                this.model.dy = -this.model.dy;
            }
            this.move(this.model.x, this.model.y)
        };
        this.collision = () => {
            for (let i = 0; i < model.allBalls.length; i++) {
                if(model.allBalls[i].x !== this.x && model.allBalls[i].y !== this.y ) {
                    let distanse = Math.sqrt(Math.pow(this.model.x - model.allBalls[i].model.x, 2) + Math.pow(this.model.y - model.allBalls[i].model.y, 2))
                    console.log(distanse)
                    if(distanse <= 40){
                        this.model.dx = -this.model.dx;
                        this.model.dy = -this.model.dy;
                    }
                }
            }
        };
        this.addBalls = (e) => {
            let clickX = e.offsetX;
            let clickY = e.offsetY;
            let distanceFromCenter;
            distanceFromCenter = Math.sqrt(Math.pow(this.model.x - clickX, 2) + Math.pow(this.model.y - clickY, 2));
            if (distanceFromCenter < 20) {
                console.log(model.allBalls);
                this.model.save();
                let newBall1 = new Ball(clickX + 40, clickY - 40, -this.model.dx , -this.model.dy );
                model.allBalls.push(newBall1);
                let newBall2 = new Ball(clickX - 40, clickY + 40, this.model.dx , -this.model.dy );
                model.allBalls.push(newBall2);
                let newBall3 = new Ball(clickX - 40, clickY - 40, -this.model.dx , this.model.dy );
                model.allBalls.push(newBall3);
                this.model.save();
            }
        }
    }
}

export function clickCanvas(){
    model.canvas.addEventListener('click', function (e) {
        let length = model.allBalls.length
        for(let i = 0; i < length; i++){
            model.allBalls[i].addBalls(e);

    })
}