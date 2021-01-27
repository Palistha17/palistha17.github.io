class Level {
    constructor() {
        this.background = new Image();
        this.background.src = "images/level1.jpg";
    }

    draw(context) {
        context.drawImage(this.background, 0, 0, 800, 500);
    }
}