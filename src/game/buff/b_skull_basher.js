class BSkullBasher extends Buff {
    constructor(game) {
        super(game)
        this.image = this.game.images.buffSkullBasher
        this.granted = false
    }
    grant() {
        var m = this.game.hero.atkModify
        var len = Object.keys(m).length
        m[len] = {
            nickname: "buffSkullBasher",
            type: "stun",
            duration: 1,
            damage: 10,
            chance: 0.8,
        }

    }
}
