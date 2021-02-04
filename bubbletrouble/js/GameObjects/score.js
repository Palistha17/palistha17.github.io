class Score {
    constructor(highscore) {
        this.score = 0;
        this.highscore = highscore;
    }

    update() {
        this.score += 5;
        if (this.score > this.highscore) {
            this.highscore = this.score;
        }
    }

    draw(context) {
        context.fillStyle = "#000";
        context.font = "20px Verdana";
        context.fillText("Score : " + this.score, 10, 60);
        context.fillText("Highscore : " + this.highscore, 10, 80);
    }
}