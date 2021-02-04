class Button {
    constructor(label, posX = 0, posY = 0, width = 100, height = 50) {
        this.label = label;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    isClicked(mouseX, mouseY) {
        return mouseX > this.posX && mouseX < this.posX + this.width &&
            mouseY > this.posY && mouseY < this.posY + this.height;
    }

    draw(context) {
        context.fillStyle = "#1CCF84";
        context.fillRect(this.posX, this.posY, this.width, this.height);

        context.fillStyle = "#000";
        context.font = "20px Verdana";
        context.fillText(this.label, this.posX + 23, this.posY + 32);

    }
}