class EventHandler {
    constructor(canvas) {
        this.canvas = canvas;

        this.mouseX = -1;
        this.mouseY = -1;

        this.canvas.addEventListener('mousedown', this.setMousePos, false);
        this.canvas.addEventListener('mouseup', this.clearMousePos, false);
    }

    setMousePos = (event) => {
        let x = event.x;
        let y = event.y;

        this.mouseX = x - this.canvas.offsetLeft;
        this.mouseY = y - this.canvas.offsetTop;
    }

    clearMousePos = (_) => {
        this.mouseX = -1;
        this.mouseY = -1;
    }
}