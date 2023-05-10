// Imports
import { canvas, ctx } from "../canvas.js";

export function drawGameOver() {
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2 + 5);
}