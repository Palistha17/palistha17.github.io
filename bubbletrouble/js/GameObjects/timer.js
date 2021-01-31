class Timer {
    constructor(onFinish) {
        this.seconds = 60;

        this.onFinish = onFinish;
        this.timer = setInterval(this.update, 1000);
    }

    update = () => {
        this.seconds--;

        if (this.seconds == 0) {
            this.onFinish();
        }
        
    }

    add(sec) {
        this.seconds += sec;
    }

    reset() {
        this.seconds = 60;
    }

    draw(context) {
        context.fillStyle = "#000";
        context.font = "20px Verdana";
        context.fillText("Time: " + this.seconds, 680, 60);
    }
}