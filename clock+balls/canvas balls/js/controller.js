const logic = new Logic();
const ball = new Ball(50,70, 1, 1);
model.allBalls.push(ball);

export default {
    initController(){
        clickCanvas()
        setInterval(() => {
            logic.getContext();
            logic.addRound();
            moving(model.allBalls);
        },10)
    },
}

