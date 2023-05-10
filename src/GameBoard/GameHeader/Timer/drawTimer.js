// Imports
import { ctx } from "../../canvas.js";

export function drawTimer() {
    ctx.fillStyle = 'white';
    ctx.fillText("Timer: " + createTimer(), 375, 80);
}