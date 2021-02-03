class Level3State extends RunningState {
    constructor(game) {
        super(game);
        this.game = game;

        this.addBalls();
        this.spikes = new Spikes(true);

        this.background = new Image();
        this.background.src = "images/level3.jpg";
    }

    addBalls() {
        this.balls = [];
        this.balls.push(new Ball(100, 350, 10, 3, 0, '#00FF00', 9));
        this.balls.push(new Ball(200, 350, 10, 3, 0, '#FF0000', 9));
    }

    update() {
        super.update();
        this.spikes.update();
        this.detectBallCollisions(this);
        for (let ball of this.balls) {
            ball.update();
        }

        if (this.spikes.hasCollided(this.player)) {
            this.spikes.reset();
            this.resetLevel(this);
        }

        if (this.balls.length == 0) {
            this.showNextLevel();
        }
    }

    draw() {
        this.game.context.drawImage(this.background, 0, 0, 800, 450);
        this.game.context.fillStyle = "#000";
        this.game.context.font = "20px Verdana";
        this.game.context.fillText("Level 3", 700, 480);

        super.draw();
        this.spikes.draw(this.game.context);
        for (let ball of this.balls) {
            ball.draw(this.game.context);
        }
    }

    showNextLevel() {
        clearInterval(this.timer.timer);
        this.game.gameState = new GameOverState(this.game, this.score);
    }
}