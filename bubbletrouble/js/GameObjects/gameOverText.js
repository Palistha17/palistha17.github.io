class GameOverText {
    constructor() {
        this.text = new Image();
        this.text.src = "images/gameover.png";
    }

    draw(context) {
        let posX = 400 - this.text.width / 2;
        let posY = 150 - this.text.height / 2;

        context.drawImage(this.text, posX, posY);
    }
}