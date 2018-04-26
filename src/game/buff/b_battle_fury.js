class BBattleFury extends Buff {
    constructor(game) {
        super(game)
        this.image = this.game.images.buffBattleFury
        this.granted = false
    }
    grant() {
        this.game.hero.atkPara *= 1.50
    }
}
