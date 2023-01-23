class Player {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./jjk run.png"), 0, 0, 452/8, 51, 8, 0.2);

        this.x = 0;
        this.y = 0 ;
        this.speed = 210;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./jjk.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}