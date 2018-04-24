class Attack extends Card {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Attack"
        this.nickname = "aAtk"
        this.setup()


    }

    setup() {
        this.image = this.game.imageByName(this.nickname,0 ,0).image
    }

    cast() {
        //choose Enemy

        this.game.scene.currentAction = {
            from: this,
            done: false,
            affect: "Enemy",
            target: 1,
            damage: this.game.hero.atk,
            debuff: null
        }
    }
}
