class Spikes {
    constructor() {
        this.spikes = new Image();
        this.spikes.src = "images/spikes.png";

        this.ceiling = new Image();
        this.ceiling.src = "images/floor.jpg";
    }

    draw(context) {
        for (let i = 0; i <= 20; i++) {
            context.drawImage(this.spikes, i * 40, 10, this.spikes.width, 10);
        }
        context.drawImage(this.ceiling, 0, 0, 800, 10);
    }
}