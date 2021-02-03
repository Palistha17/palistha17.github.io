class PowerUp {
    constructor(imageUrl, shouldDisappear) {
        this.posX = 0;
        this.posY = 0;
        this.speed = 3;

        this.image = new Image();
        this.image.src = imageUrl;

        this.isDropped = false;
        this.isActive = false;
        this.isExecuted = false;
        this.shouldDisappear = shouldDisappear;
    }

    drop(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.isDropped = true;
    }

    setActive(posX) {
        this.posX = posX;

        this.posY = 450 - this.image.height;
        if (this.isActive || this.isExecuted) return;

        this.isActive = true;
        this.isDropped = false;
    }

    setExecuted() {
        this.isExecuted = true;
    }

    hasCollided(player) {
        return this.posX < player.posX + player.width && this.posX + 20 > player.posX && this.posY + 20 > player.posY;
    }

    update() {
        if (!this.isDropped) {
            return;
        }

        if (this.posY < 450 - 20) {
            this.posY += this.speed;
        }
    }

    draw(context) {
        if (this.isActive && !this.shouldDisappear) {
            context.drawImage(this.image, this.posX, this.posY - 25, 50, 70);
        }
        else if (this.isDropped) {
            context.drawImage(this.image, this.posX, this.posY, 20, 20);
        }
    }
}