class MenuState {
    constructor(game) {
        this.game = game;
        this.playButton = new Button('PLAY', 460, 410);
        this.background = new Image();
        this.background.src = 'images/menu_bg.png';
    }

    update() {
        if (this.playButton.isClicked(this.game.eventHandler.mouseX, this.game.eventHandler.mouseY)) {
            this.showRunningState();
        }
    }

    draw() {
        this.game.context.drawImage(this.background, 0, 0);;
        this.playButton.draw(this.game.context);

        this.game.context.fillStyle = "#000";
        this.game.context.font = "20px Verdana";
        this.game.context.fillText("Use left and right arrow keys to move.", 350, 50);
        this.game.context.fillText("Use up arrow key to shoot.", 400, 80);
    }

    showRunningState() {
        this.game.gameState = new RunningState(this.game);
    }
}