class RunningState {
    constructor(game) {
        this.game = game;

        this.timer = new Timer(() => this.showGameOverState());
        this.score = new Score(this.game.highscore);

        this.player = new Player();
        this.addBalls();
    }

    addBalls() {
        this.balls = [];
        this.balls.push(new Ball(200, 200, 25, 3, 3, '#944633'));
        this.balls.push(new Ball(400, 200, 30, 3, 2, '#022717'));
    }

    update() {
        this.detectCollisions();
        this.player.update();
        for (let ball of this.balls) {
            ball.update();
        }
    }

    draw() {
        this.player.draw(this.game.context);
        this.score.draw(this.game.context);
        this.timer.draw(this.game.context);
        for (let ball of this.balls) {
          ball.draw(this.game.context);  
        } 
    }

    detectCollisions() {
        for (let ball of this.balls) {
            if (this.player.arrow.hasCollided(ball)) {
                this.splitBall(ball);
                this.score.update();
            }

            //player and ball collide
            if (this.player.hasCollided(ball)) {
                this.player.lives--;
                if (this.player.lives > 0) {
                    this.addBalls();
                    this.timer.reset();
                    this.player.reset();
                } else {
                    this.showGameOverState();
                }
            }
        }
    }


    splitBall(ball) {
        if (ball.splitCount > 0) {
            var b1 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, ball.speedX, ball.splitCount - 1, ball.color);
            var b2 = new Ball(ball.posX, ball.posY, ball.radius / 1.7, -ball.speedX, ball.splitCount - 1, ball.color);
            this.balls.push(b1);
            this.balls.push(b2);
        }

        let ballIndex = this.balls.indexOf(ball);
        this.balls.splice(ballIndex, 1);
    }

    showGameOverState() {
        this.game.gameState = new GameOverState(this.game, this.score);
    }
}