class Player {
    constructor() {
        this.posX = 400;
        this.posY = 394;
        this.width = 46;
        this.height = 56;
        this.arrow = new Arrow();

        this.player = new Image();
        this.player.src = "images/player.png";
        this.context = document.getElementById("canvas").getContext("2d");

        document.addEventListener("keydown", this.handleEvent);
    }

     handleEvent = (event) => {
        event.preventDefault();
        if (event.code == "ArrowLeft") {
            this.posX -= 10;
            if (this.posX < this.width) {
              this.posX = 0;   
            } 
            this.context.drawImage(this.player, 0, 56, this.width, this.height, this.posX, this.posY, this.width, this.height);
        } else if (event.code == "ArrowRight") {
            this.posX += 10;
            if (this.posX > 800 - this.width){
              this.posX = 800 - this.width;  
            } 
            this.context.drawImage(this.player, 0, 0, this.width, this.height, this.posX, this.posY, this.width, this.height);
        } else if (event.code == "ArrowUp") {
            if (!this.arrow.isActive)
                this.arrow.setActive(this.posX);
        }

    }

    hasCollided(ball) {
        let ballDistanceX = Math.abs(ball.posX - this.posX);
        let ballDistanceY = Math.abs(ball.posY - this.posY);

        if (ballDistanceX > (this.width / 2 + ball.radius)) return false;
        if (ballDistanceY > (this.height / 2 + ball.radius)) return false;

        if (ballDistanceX <= (this.width / 2)) return true;
        if (ballDistanceY <= (this.height / 2)) return true;

        let cornerDistanceSq = Math.pow((ballDistanceX - this.width / 2), 2) +
        Math.pow((ballDistanceY - this.height / 2), 2);

        return (cornerDistanceSq <= Math.pow(ball.radius, 2));

    }

    update() {
        this.arrow.update();
    }

    draw(context) {
        this.arrow.draw(context);
        context.drawImage(this.player, 0, 112, this.width, this.height, this.posX, this.posY, this.width, this.height);
    }
}