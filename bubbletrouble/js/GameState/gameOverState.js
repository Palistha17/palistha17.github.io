class GameOverState {
    constructor(game, score) {
        this.game = game;

        this.score = score;
        this.game.highscore = this.score.highscore;

        this.gameOverText = new GameOverText();
        this.menuButton = new Button('MENU', 340, 280);
        this.playAgainButton = new Button('PLAY AGAIN', 310, 350, 160);
    }

    update() {
        let mouseX = this.game.eventHandler.mouseX;
        let mouseY = this.game.eventHandler.mouseY;

        if (this.menuButton.isClicked(mouseX, mouseY)) {
            this.showMenuState();
        }

        if (this.playAgainButton.isClicked(mouseX, mouseY)) {
            this.showRunningState();
        }
    }

    draw() {
        this.score.draw(this.game.context);
        this.gameOverText.draw(this.game.context);

        this.menuButton.draw(this.game.context);
        this.playAgainButton.draw(this.game.context);
    }


    showMenuState() {
        this.game.gameState = new MenuState(this.game)
    }

    showRunningState() {
        this.game.gameState = new Level1State(this.game)
    }
}