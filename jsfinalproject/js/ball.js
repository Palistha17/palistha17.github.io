class Ball {
    constructor(posX, posY, radius, speedX, splitCount, color) {
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.radius = radius;
        this.splitCount = splitCount;

        this.speedX = speedX;
        this.speedY = 0;
    }

    update() {
        this.posX += this.speedX;
        this.posY += this.speedY += 0.3;

        if (this.posX > 800 - this.radius || this.posX < this.radius)
            this.speedX *= -1;

        if (this.posY > 450 - this.radius || this.posY < 0)
            this.speedY = -12;
    }


    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
}