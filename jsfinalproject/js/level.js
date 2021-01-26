class Level {
    constructor(imageUrl) {
        this.background = new Image();
        this.background.src = imageUrl;
    }

    draw(context) {
        context.drawImage(this.background, 0, 0, 800, 500);
    }
}