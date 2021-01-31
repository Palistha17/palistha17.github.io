class Shield extends PowerUp {
    constructor() {
        super('images/shield.png', false);
    }

    execute(state) {
        if (this.isActive) return;

        state.activateShield = true;
        setTimeout(() => {
            state.activateShield = false;
            super.setInactive();
            super.setExecuted();
        }, 5000);
    }
}