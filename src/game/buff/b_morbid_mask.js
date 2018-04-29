class BMorbidMask extends Buff {
    constructor(game) {
        super(game)
        this.nickname = "buffMorbidMask"
        this.image = this.game.images.buffMorbidMask
        this.granted = false
    }
    grant() {
        // var m = this.game.hero.atkModify
        // var len = Object.keys(m).length
        // m[len] = {
        //     nickname: "morbidMask",
        //     type: "lifesteal",
        //     lifesteal: 0.15,
        // }
        this.game.hero.lifesteal += 0.15
    }
}
