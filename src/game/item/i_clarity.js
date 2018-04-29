class IClariy extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Clarity"
        this.nickname = "clarity"
        this.mpAdd = 15
        this.price = 50
        this.available = true
    }
    enable() {
        // var n = Object.keys(progress.cardSet).length
        // progress.cardSet[n] = this.cardname
        var h = this.game.hero
        if(h.mpCurrent + this.mpAdd > h.mpMax) {
            h.mpCurrent = h.mpMax
        } else {
            h.mpCurrent += this.mpAdd
        }
    }
}
