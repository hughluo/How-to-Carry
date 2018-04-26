class BMorbidMask extends Buff {
    constructor(game) {
        super(game)
        this.image = this.game.images.buffMorbidMask
        this.granted = false
    }
    grant() {
        var m = this.game.hero.atkModify
        var len = Object.keys(m).length
        m[len] = {
            ncikname: "morbidMask"
            damage: 0
            chance: 1
            lifesteal: 0.15
        }
    }
}
