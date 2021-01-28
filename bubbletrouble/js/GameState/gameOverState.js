class GameOverState {
    constructor(game, score) {
        this.game = game;

        this.score = score;
        this.gameOverText = new GameOverText();

        this.game.highscore = this.score.highscore;
    }

    update() { }

    draw() {
        this.score.draw(this.game.context);
        this.gameOverText.draw(this.game.context);
    }
}