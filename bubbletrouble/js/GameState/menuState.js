class MenuState {
    constructor(game) {
        this.game = game;

    }

    update() { }

    draw() { }

    showRunningState() {
        this.game.gameState = new RunningState(this.game)
    }
}