// Imports
import { canvas, ctx, canvasWidth, canvasHeight } from "./GameBoard/canvas.js";

// Tower Vision Radius
// Given tower position (Tx, Ty) and enemy position (Ex, Ey). And tower vision radius (rx and ry)

// UNUSED CODE

let a = 0;
let b = 0;
let Tx = [...monkeys].x;
let Ty = [...monkeys].y;
let Ex = [...balloons].x;
let Ey = [...balloons].y;
let rx = 10;
let ry = 10;
let enemyInRange;


function towerVision() {
    a = (Ex - Tx);
    a = a * a / (rx * rx)
    b = (Ey - Ty);
    b = b * b / (ry * ry)

    // Drawing vision radius

    ctx.arc(Tx, Ty, (rx, ry), 0, Math.PI * 2)
    ctx.fill();
    return (enemyInRange = a + b <= 1);
}