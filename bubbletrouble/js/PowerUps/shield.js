class Shield extends PowerUp {
    constructor() {
        super('images/shield.png', false);
    }

    execute(state) {
        if (super.isActive) return;

        state.activateShield = true;
        setTimeout(() => {
            state.activateShield = false;
            super.setExecuted();
        }, 5000);
    }
}