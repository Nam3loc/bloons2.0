// Imports
import { canvas, ctx, canvasWidth, canvasHeight } from "../../GameBoard/canvas.js";

// Creating monkey towers
const monkeys = [];

export class Monkey {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.shooting = false;
        this.projectiles = [];
        this.timer = 0;
        this.radius = 20;
    }

    draw() {
        this.monkeyImage = new Image();
        this.monkeyImage.src = 'images/Dart-Monkey-removebg.png' 
        ctx.drawImage(this.monkeyImage, 0, 0, this.monkeyImage.width, this.monkeyImage.height, this.x, this.y, this.width, this.height);
    }

    update() {
        this.timer++;
        if (this.timer % 100 === 0) {
            projectiles.push(new Projectile(this.x + 50, this.y + 50, balloons[0]));
        }
    }
}

canvas.addEventListener('click', function(){
    const gridPositionX = mouse.x - (mouse.x % cellSize);
    const gridPositionY = mouse.y - (mouse.y % cellSize);
    for(let i = 0; i < monkeys.length; i++) {
        if(monkeys[i].x === gridPositionX && monkeys[i]. y === gridPositionY){
            return;
        }
    }

    let monkeyCost = 100;
    if (gold >= monkeyCost) {
        monkeys.push(new Monkey(gridPositionX, gridPositionY));
        gold -= monkeyCost;
    }
})

export function handleMonkeys() {
    for(let i = 0; i < monkeys.length; i++){
        monkeys[i].draw();
        monkeys[i].update();
        // towerVision(monkeys[i]);
    }
}