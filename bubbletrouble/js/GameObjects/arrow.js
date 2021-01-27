class Arrow {
    constructor() {
        this.isActive = false;
        this.arrow = new Image();
        this.arrow.src = "images/arrow.png";

        this.posX = 0;      
        this.posY = 450;
        this.speed = 5;
    }

    reset() {
        this.posY = 450;
        this.isActive = false;
    }

    setActive(posX) {
        this.posX = posX;
        this.isActive = true;
    }

    hasCollided(ball) {
        if (!this.isActive) {
           return false; 
        } 

        if (this.posX < ball.posX + ball.radius && this.posX > ball.posX - ball.radius &&
            this.posY - ball.posY < ball.radius) {
            this.reset();
            return true;
        }

        return false;
    }


    update() {
        if (!this.isActive) {
          return;  
        } 

        this.posY -= this.speed;
        if (this.posY == 0) {
          this.reset();  
        } 
    }

    draw(context) {
        if (!this.isActive) {
          return;  
        } 
        context.drawImage(this.arrow, this.posX, this.posY, this.arrow.width, 450);
    }
}