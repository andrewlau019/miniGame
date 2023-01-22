class Player {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./jjk run.png"), 0, 0, 452/8, 51, 8, 0.2);
    };

    update() {

    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./jjk.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    };
}