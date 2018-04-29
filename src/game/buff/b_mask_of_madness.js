class BMaskOfMadness extends Buff {
    constructor(game) {
        super(game)
        this.nickname = "buffMaskOfMadness"
        this.image = this.game.images.buffMaskOfMadness
        this.granted = false
    }
    grant() {
        // var m = this.game.hero.atkModify
        // var len = Object.keys(m).length
        // m[len] = {
        //     nickname: "maskOfMadness",
        //     type: "lifesteal",
        //     lifesteal: 0.15,
        // }
        this.game.hero.lifesteal += 0.15
    }
}
