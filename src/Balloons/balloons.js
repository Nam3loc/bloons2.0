// Imports
import { canvasWidth } from "../GameBoard/canvas.js";
import { RedBalloon } from "./redBalloon.js";

let balloons = [];

export function handleBalloons() {
    for(let i = 0; i < balloons.length; i++) {

        if (balloons[i].x > canvasWidth){
            health--;
            balloons.splice(i, 1);
        }

        balloons[i].update();
        balloons[i].draw();
    }
    if (frame % 100 === 0) {
        balloons.push(new RedBalloon())
    }
    if(balloons.length === 1){
        balloons.push(new RedBalloon())
    } else {
        this.speed++;
    }
}