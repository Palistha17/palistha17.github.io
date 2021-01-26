class Player {

    constructor() {
        this.posX = 400;
        this.posY = 413;
        this.width = 23;
        this.height = 37;
        this.arrow = new Arrow();

        this.player = new Image();
        this.player.src = "images/player.png";

        document.addEventListener("keydown", this.handleEvent);
    }

    handleEvent = (event) => {
        event.preventDefault();
        if (event.code == "ArrowLeft") {
            this.posX -= 10;
            if (this.posX < this.width) {
              this.posX = 0;   
            } 
        } else if (event.code == "ArrowRight") {
            this.posX += 10;
            if (this.posX > 800 - this.width){
              this.posX = 800 - this.width;  
            } 
        } else if (event.code == "ArrowUp") {
            if (!this.arrow.isActive)
                this.arrow.setActive(this.posX);
        }

    }

    update() {
        this.arrow.update();
    }

    draw(context) {
        this.arrow.draw(context);
        context.drawImage(this.player, this.posX, this.posY, this.width, this.height);
    }
}