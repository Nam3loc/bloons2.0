// Imports
import { collision } from "../collision.js";

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

// Mouse
const mouse = {
    x: undefined,
    y: undefined,
    width: 0.1,
    height: 0.1
}

let canvasPosition = canvas.getBoundingClientRect();
console.log(canvasPosition);
canvas.addEventListener('mousemove', function(evt){
    mouse.x = (evt.x + 60) - (canvasPosition.left - canvasPosition.width);
    // mouse.x = evt.x - canvasPosition.left; // Original code
    mouse.y = evt.y - canvasPosition.top;
});
canvas.addEventListener('mouseleave', function() {
    mouse.y = undefined;
    mouse.y = undefined;
})

// Creating Cells
export class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }

    draw(ctx) {
        if (mouse.x && mouse.y && collision(this, mouse)) {
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}

// Creating Grid of Cells
export function createGrid(canvasWidth, canvasHeight) {
    for(let y = cellSize; y < canvasHeight; y += cellSize){
        for(let x = 0; x < canvasWidth; x += cellSize){
            gameGrid.push(new Cell(x, y));
        }
    }
}

// Drawing Grid of Cells
export function handleGameGrid() {
    for(let i = 0; i < gameGrid.length; i++) {
        gameGrid[i].draw(ctx);
    }
}