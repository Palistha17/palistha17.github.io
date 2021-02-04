class Level2State extends RunningState {
    constructor(game) {
        super(game);
        this.game = game;

        this.addBalls();
        this.spikes = new Spikes(true, 250, 250);

        this.background = new Image();
        this.background.src = "images/level2.jpg";
    }

    addBalls() {
        this.balls = [];
        this.balls.push(new Ball(500, 350, 10, 3, 0, '#00FF00', 10));
        this.balls.push(new Ball(50, 350, 10, 3, 0, '#FF0000', 10));
        this.balls.push(new Ball(250, 350, 10, 3, 0, '#0000FF', 10));
    }

    update() {
        if (this.balls.length == 0) {
            this.showNextLevel();
        }

        super.update();
        this.detectBallCollisions(this);
        for (let ball of this.balls) ball.update();
    }

    draw() {
        this.game.context.drawImage(this.background, 0, 0, 800, 450);
        this.game.context.fillStyle = "#000";
        this.game.context.font = "20px Verdana";
        this.game.context.fillText("level 2", 350, 480);

        super.draw();
        this.spikes.draw(this.game.context);
        for (let ball of this.balls) {
            ball.draw(this.game.context);
        }
    }

    showNextLevel() {
        clearInterval(this.timer.timer);
        this.game.gameState = new Level3State(this.game);
    }
}