const DIR_RIGHT = 0;
const DIR_LEFT = 1;
const DIR_STRAIGHT = 2;

class Player {
    constructor() {
        this.posX = 400;
        this.posY = 394;

        this.width = 46;
        this.height = 56;

        this.lives = 3;

        this.arrow = new Arrow();
        this.player = new Image();
        this.player.src = "images/player.png";
        this.powerUps = [];
        this.dir = DIR_STRAIGHT;

        document.addEventListener("keydown", this.handlePosition);
        document.addEventListener("keyup", this.resetPosition);
    }

    handlePosition = (event) => {
        event.preventDefault();
        if (event.code == "ArrowLeft") {
            this.posX -= 10;
            if (this.posX < this.width) {
                this.posX = 0;
            }
            this.dir = DIR_LEFT;
        } else if (event.code == "ArrowRight") {
            this.posX += 10;
            if (this.posX > 800 - this.width) {
                this.posX = 800 - this.width;
            }
            this.dir = DIR_RIGHT;
        } else if (event.code == "ArrowUp") {
            if (!this.arrow.isActive) {
                this.arrow.setActive(this.posX);
            }
            this.dir = DIR_STRAIGHT;
        }
    }

    resetPosition = () => {
        this.dir = DIR_STRAIGHT;
    }

    addPowerUp(powerUp, posX, posY) {
        powerUp.drop(posX, posY);
        this.powerUps.push(powerUp);
    }


    reset() {
        this.powerUps = [];
        this.posX = 400;
    }

    hasCollided(ball) {
        let ballDistanceX = Math.abs(ball.posX - this.posX);
        let ballDistanceY = Math.abs(ball.posY - this.posY);

        if (ballDistanceX > (this.width / 2 + ball.radius)) {
            return false;
        }
        if (ballDistanceY > (this.height / 2 + ball.radius)) {
            return false;
        }

        if (ballDistanceX <= (this.width / 2)) {
            return true;
        }
        if (ballDistanceY <= (this.height / 2)) {
            return true;
        }

        let cornerDistanceSq = Math.pow((ballDistanceX - this.width / 2), 2) +
            Math.pow((ballDistanceY - this.height / 2), 2);

        return (cornerDistanceSq <= Math.pow(ball.radius, 2));

    }

    update() {
        this.arrow.update();

        if (this.powerUps.length == 0) return;

        for (let powerUp of this.powerUps) {
            powerUp.update();
            if (powerUp.isExecuted) {
                let powerUpIndex = this.powerUps.indexOf(powerUp);
                this.powerUps.splice(powerUpIndex, 1);
                continue;
            }
        }
    }

    draw(context) {
        this.arrow.draw(context);
        context.drawImage(this.player, 0, 56 * this.dir, this.width, this.height, this.posX, this.posY, this.width, this.height);

        context.fillStyle = "#000";
        context.font = "20px Verdana";
        context.fillText("Lives : " + this.lives, 10, 480);

        if (this.powerUps.length == 0) return;
        for (let powerUp of this.powerUps) powerUp.draw(context);
    }
}