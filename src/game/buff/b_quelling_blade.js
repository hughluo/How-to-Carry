class BQuellingBlade extends Buff {
    constructor(game) {
        super(game)
        this.image = this.game.images.buffQuellingBlade
        this.granted = false
    }
    grant() {
        this.game.hero.atkPara *= 1.24
    }
}
