class IncreaseTime extends PowerUp {
    constructor() {
        super('images/timer.jpg', true);
    }

    execute(state) {
        if (super.isExecuted) return;

        state.timer.add(10);
        super.setExecuted();
    }
}