// Imports
import { RedBalloon } from "./Balloons/redBalloon.js";
import { drawPath } from './GameBoard/path.js';
import { Cell, createGrid, handleGameGrid } from './GameBoard/grid.js';
import { collision } from "./collision.js";
import { canvas, ctx, canvasWidth, canvasHeight } from "./GameBoard/canvas.js";
import { Monkey, handleMonkeys } from "./Monkeys/Monkey/monkey.js";
import { Projectile, handleProjectiles } from "./Monkeys/Projectiles/projectiles.js";
import { handleBalloons } from "./Balloons/balloons.js";

window.addEventListener('load', function() {
    // Creating Game
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.redBalloon = new RedBalloon(this);
            this.cell = new Cell(this);
        }
        update() {
            this.redBalloon.update();
        }
        draw(context) {
            drawPath(ctx, canvasHeight);
            createGrid(canvasWidth, canvasHeight)
            this.redBalloon.draw(context);
        }
    }

    const game = new Game(canvasWidth, canvasHeight);
    // let frame = 0;

    // Running game animations
    function animate() {
        let frame = 0;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        game.update();
        game.draw(ctx);

        handleGameGrid();
        handleGameGrid();
        handleMonkeys();
        handleProjectiles();
        handleBalloons();

        drawScore();
        drawTimer();
        drawGold();

        frame++;

        if (health <= 0){
            drawGameOver();
        } else {
        requestAnimationFrame(game);
        }
    }
    animate();
});