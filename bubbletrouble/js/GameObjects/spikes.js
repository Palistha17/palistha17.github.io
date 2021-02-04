class Spikes {
    constructor(shouldMove, posY = 10, ceilingHeight = 10) {
        this.spikes = new Image();
        this.spikes.src = "images/spikes.png";

        this.ceiling = new Image();
        this.ceiling.src = "images/floor.jpg";

        this.posY = posY;
        this.shouldMove = shouldMove;
        this.ceilingHeight = ceilingHeight;
    }

    reset() {
        this.posY = 10;
    }

    update() {
        if (!this.shouldMove) return;
        this.posY += 0.5;
    }

    hasCollided(player) {
        return this.posY + 10 > player.posY;
    }

    draw(context) {
        for (let i = 0; i <= 20; i++) {
            context.drawImage(this.spikes, i * 40, this.posY, this.spikes.width, 10);
        }
        context.drawImage(this.ceiling, 0, 0, 800, this.ceilingHeight);
    }
}