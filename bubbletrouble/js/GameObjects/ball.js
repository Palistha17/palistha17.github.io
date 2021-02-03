class Ball {
    constructor(posX, posY, radius, speedX, splitCount, color, bounceHeight = 12) {
        this.posX = posX;
        this.posY = posY;

        this.color = color;
        this.radius = radius;
        this.splitCount = splitCount;

        this.speedX = speedX;
        this.speedY = 0;
        this.bounceHeight = bounceHeight;

        this.powerUp = this.selectPowerUp();
    }

    selectPowerUp() {
        if (this.getRandomInt(10) > 5) {
            return undefined;
        }

        let powerUpIndex = this.getRandomInt(3);
        switch (powerUpIndex) {
            case 0: return undefined;
            case 1: return new Shield();
            case 2: return new IncreaseTime();
            default: return undefined;
        }
    }

    update() {
        this.posX += this.speedX;
        this.posY += this.speedY += 0.3;

        if (this.posX > 800 - this.radius || this.posX < this.radius) {
            this.speedX *= -1;
        }

        if (this.posY > 450 - this.radius || this.posY < 0) {
            this.speedY = -this.bounceHeight;
        }
    }


    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}