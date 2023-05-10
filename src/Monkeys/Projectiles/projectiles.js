// Imports
import { canvas, ctx } from "../../GameBoard/canvas.js";

// Projectiles
const projectiles = [];

export class Projectile {
    constructor(x, y, enemy) {
        this.dartImage = new Image();
        this.dartImage.src = 'images/dart-sprite-removebg.png'        

        this.x = x; 
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.speed = 0.6;
        this.velocity = {
            x: 0,
            y: 0
        }

        this.enemy = enemy;

        this.power = 1;
    }

    update() {
        this.x += this.speed;

        const angle = Math.atan2(balloons[0].y - this.y, 
                                balloons[0].x - this.x
        )
        this.velocity.x = Math.cos(angle);
        this.velocity.y = Math.sin(angle);

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    draw() {
        ctx.drawImage(this.dartImage, 0, 0, this.dartImage.width, this.dartImage.height, this.x, this.y, this.width, this.height);
    }
}

export function handleProjectiles() {
    for (let i = 0; i < projectiles.length; i++) {
        projectiles[i].update();
        projectiles[i].draw();
        for(let j = 0; j < balloons.length; j++){
            if(balloons[j] && projectiles[i] && collision(projectiles[i], balloons[j])){
                balloons[j].layers -= projectiles[i].power;
                if(balloons[j].layers <= 0){
                    balloons.splice(j, 1);
                    j--;
                    gold++;
                }
                
                projectiles.splice(i, 1);
                i--;
            }
        }

        if(projectiles[i] && projectiles[i].x > canvas.width + cellSize){
            projectiles.splice(i, 1);
            i--;
        }
    }
}