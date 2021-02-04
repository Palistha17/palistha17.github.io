class Level1State extends RunningState {
    constructor(game) {
        super(game);
        this.game = game;

        this.addBalls();
        this.spikes = new Spikes(false);

        this.background = new Image();
        this.background.src = "images/level1.jpg";
    }

    addBalls() {
        this.balls = [];
        this.balls.push(new Ball(400, 200, 30, 3, 2, '#00FF00', 12));
        this.balls.push(new Ball(100, 200, 20, 3, 0, '#FF0000', 12));
    }

    update() {
        if (this.balls.length == 0) {
            this.showNextLevel();
        }

        this.detectBallCollisions(this);
        for (let ball of this.balls) ball.update();
        super.update();
    }

    draw() {
        this.game.context.drawImage(this.background, 0, 0, 800, 450);
        this.game.context.fillStyle = "#000";
        this.game.context.font = "20px Verdana";
        this.game.context.fillText("Level 1", 350, 480);

        super.draw();
        this.spikes.draw(this.game.context);
        for (let ball of this.balls) {
            ball.draw(this.game.context);
        }
    }

    showNextLevel() {
        clearInterval(this.timer.timer);
        this.game.gameState = new Level2State(this.game);
    }
}