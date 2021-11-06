const canvas = document.getElementById("canvas");
canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext("2d");






// ctx.strokeStyle = grd;
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineWidth = 30;
// ctx.lineCap = 'round';
// ctx.lineTo(450 , 50);
// ctx.stroke();

let frame = 0;

const progressBars = [];

class progressBar {
    constructor(startX, startY, endValue) {
        this.startX = startX;
        this.startY = startY;

        this.currentValue = 0;
        this.endValue = endValue;
    }

    draw() {
        if (frame % 1 === 0) {
            var grd = ctx.createLinearGradient(this.startX, this.startY, this.startX + this.currentValue, this.startY);
            // light blue
            grd.addColorStop(0, '#8EC5FC');
            // dark blue
            grd.addColorStop(1, '#E0C3FC');
    
            console.log("drawing");
            ctx.strokeStyle = grd;
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineWidth = 15;
            ctx.lineCap = "round";
            ctx.lineTo(this.startX + this.currentValue, this.startY);
            ctx.stroke();
    
            if (this.currentValue < this.endValue) this.currentValue++;
            console.log(this.currentValue)
            console.log("---")
            console.log(this.endValue)
        }
    }


}

progressBars.push(new progressBar(25, 50, 450))
progressBars.push(new progressBar(25, 150, 450))

// progressBars[0].draw();
function animate() {
    frame++;
    for (let i = 0; i < progressBars.length; i++) {
        progressBars[i].draw();
    }

    requestAnimationFrame(animate);
}
animate();