class IHealingSalve extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Healing Salve"
        this.nickname = "healingSalve"
        this.hpAdd = 40
        this.price = 110
        this.available = true
    }
    enable() {
        // var n = Object.keys(progress.cardSet).length
        // progress.cardSet[n] = this.cardname
        var h = this.game.hero
        if(h.hpCurrent + this.hpAdd > h.hpMax) {
            h.hpCurrent = h.hpMax
        } else {
            h.hpCurrent += this.hpAdd
        }
    }
}
