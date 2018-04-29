class BDkE extends Buff {
    constructor(game) {
        super(game)
        this.nickname = "buffDkE"
        this.image = this.game.images.buffDkE
        this.granted = false
        this.grantEveryTurn = true
        this.level = 0
        this.hpRegen = [0, 4, 6, 8, 10]
    }
    grant() {
        this.game.hero.hpRegenEx += this.hpRegen[this.level]
    }
}
