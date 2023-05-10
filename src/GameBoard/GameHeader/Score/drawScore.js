// Imports
import { ctx } from "../../canvas.js";

export function drawScore() {
    ctx.fillStyle = 'white';
    ctx.fillText("Health: " + health, 55, 80);
}