// Imports
import { RedBalloon } from "./Balloons/redBalloon.js";
import { drawPath } from './Game Board/path.js';
import { Cell, createGrid, handleGameGrid } from './Game Board/grid.js';
import { collision } from "./collision.js";

window.addEventListener('load', function() {
    // Canvas
    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width = 1000;
    const canvasHeight = canvas.height = 1000;

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

    // Running game animations
    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        game.update();
        game.draw(ctx);
        handleGameGrid();
        requestAnimationFrame(animate);
    }
    animate();
});