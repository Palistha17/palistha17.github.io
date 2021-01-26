class Floor {
    constructor() {
        this.floor = new Image();
        this.floor.src = "images/floor.jpg";
    }

    draw(context) {
        context.drawImage(this.floor, 0, 450, 800, 50);
    }
}