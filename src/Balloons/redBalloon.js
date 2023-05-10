export class RedBalloon {
    constructor(game) {
        this.game = game;

        this.width = 100;
        this.height = 100;

        this.x = 0;
        this.y = this.game.height / 2;
        this.image = redBalloonImg // Same as: document.getElementById('redBalloonImg');
        
        this.speed = 0.6;
        this.movement = this.speed;
    }
    update() {
        this.x += this.movement;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

// https://www.youtube.com/watch?v=GFO_txvwK_c&t=26407s
// 9:37:19
// Issue with frame not applying to the ballons.js
// Either export function animate() or watch youtube and figure out how he
// makes frames work in multiple files