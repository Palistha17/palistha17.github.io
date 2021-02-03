class RunningState {
    constructor(game) {
        this.game = game;

        this.timer = new Timer(() => this.showGameOverState());
        this.score = new Score(this.game.highscore);
        this.player = new Player();

        this.activateShield = false;
    }

    update() {
        this.detectCollisions();
        this.player.update();
    }

    draw() {
        this.player.draw(this.game.context);
        this.score.draw(this.game.context);
        this.timer.draw(this.game.context);
    }

    detectCollisions() {
        for (let powerUp of this.player.powerUps) {
            if (powerUp.hasCollided(this.player)) {
                powerUp.setActive(this.player.posX);
                powerUp.execute(this);
            }
        }
    }

    detectBallCollisions(state) {
        for (let ball of state.balls) {
            if (this.player.arrow.hasCollided(ball)) {
                if (ball.powerUp) {
                    this.player.addPowerUp(ball.powerUp, ball.posX, ball.posY);
                }

                this.splitBall(ball, state.balls);
                this.score.update();
            }

            if (!this.activateShield) {
                if (this.player.hasCollided(ball)) {
                    this.resetLevel(state);
                }
            }
        }
    }

    resetLevel(state) {
        this.player.lives--;
        if (this.player.lives > 0) {
            state.addBalls();
            this.player.reset();
            this.timer.reset();
        } else {
            this.showGameOverState();
        }
    }


    splitBall(ball, balls) {
        if (ball.splitCount > 0) {
            var b1 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, ball.speedX, ball.splitCount - 1, ball.color, ball.bounceHeight);
            var b2 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, -ball.speedX, ball.splitCount - 1, ball.color, ball.bounceHeight);
            balls.push(b1);
            balls.push(b2);
        }

        let ballIndex = balls.indexOf(ball);
        balls.splice(ballIndex, 1);
    }

    showGameOverState() {
        clearInterval(this.timer.timer);
        this.game.gameState = new GameOverState(this.game, this.score)
    }
}