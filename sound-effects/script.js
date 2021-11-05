const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 700;

let canvasPosition = canvas.getBoundingClientRect();

const explosions = [];

class Explosion {
    constructor(x, y) {
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth * 0.5;
        this.height = this.spriteHeight * 0.5;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "boom.png";
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 6.28; // random radian number
        this.sound = new Audio();
        this.sound.src = "sound.wav";
    }

    update() {
        if (this.frame === 0) this.sound.play();
        this.timer++;
        if (this.timer % 5 === 0) {
            this.frame++;
        }
    }

    draw() {

        ctx.save();
        ctx.translate(this.x, this.y); // translate on this x,y coords
        ctx.rotate(this.angle); // expects radians, random radian chosen

        // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
        ctx.drawImage(this.image,
            this.spriteWidth * this.frame, 0,
            this.spriteWidth, this.spriteHeight,
            0 - this.width/2, 0 - this.height/2, this.width, this.height); // draw from 0 coords and offset by this.width/2

        ctx.restore();
    }
}

window.addEventListener("click", function(event) {
    createAnimation(event);
})

function createAnimation(event) {
    let positionX = event.x - canvasPosition.left;
    let positionY = event.y - canvasPosition.top;

    // ctx.fillRect(x, y, width, height);
    explosions.push(new Explosion(positionX, positionY)) 
}




window.addEventListener("resize", () => {
    canvasPosition = canvas.getBoundingClientRect();
    console.log("resize")
})

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < explosions.length; i++) {
        explosions[i].update();
        explosions[i].draw();

        if (explosions[i].frame > 5) {
            explosions.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate);
}
animate();