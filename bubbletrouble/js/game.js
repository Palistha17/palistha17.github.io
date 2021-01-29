class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");

        this.highscore = 0;

        this.floor = new Floor();
        this.spikes = new Spikes();
        this.background = new Background();

        this.eventHandler = new EventHandler(this.canvas);
        this.gameState = new MenuState(this);
    }

    run() {
        setInterval(() => {
            this.context.clearRect(0, 0, 800, 500);
            this.update();
            this.draw();
        }, 16);
    }

    update() {
        this.gameState.update();
    }

    draw() {
        this.background.draw(this.context);
        this.floor.draw(this.context);
        this.spikes.draw(this.context);
        this.gameState.draw();
    }
}