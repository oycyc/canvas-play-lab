const canvas = document.getElementById("canvas");
canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext("2d");


var grd = ctx.createLinearGradient(50, 50, 450, 50)
// light blue
grd.addColorStop(0, '#8EC5FC');
// dark blue
grd.addColorStop(1, '#E0C3FC');



// ctx.strokeStyle = grd;
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineWidth = 30;
// ctx.lineCap = 'round';
// ctx.lineTo(450 , 50);
// ctx.stroke();



const progressBars = [];

class progressBar {
    constructor(startX, startY, endValue) {
        this.startX = startX;
        this.startY = startY;

        this.currentValue = 0;
        this.endValue = endValue;
    }

    draw() {
        console.log("drawing");
        ctx.strokeStyle = grd;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.lineTo(this.startX + this.currentValue, this.startY);
        ctx.stroke();

        if (this.currentValue < this.endValue) this.currentValue++;
    }


}

progressBars.push(new progressBar(50, 50, 150))

// progressBars[0].draw();
function animate() {
    console.log("animating");
    // for (let i = 0; i < progressBars; i++) {
    //     progressBars[i].draw();
    // }
    progressBars[0].draw();
    requestAnimationFrame(animate);
}
animate();