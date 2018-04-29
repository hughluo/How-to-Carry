class BJavelin extends Buff {
    constructor(game) {
        super(game)
        this.nickname = "buffJavelin"
        this.image = this.game.images.buffJavelin
        this.granted = false
    }
    grant() {
        var m = this.game.hero.atkModify
        var len = Object.keys(m).length
        m[len] = {
            nickname: "javelin",
            type: "damage",
            damage: 10,
            chance: 0.25,
        }

    }
}
