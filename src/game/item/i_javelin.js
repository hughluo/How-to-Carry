class IJavelin extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Javelin"
        this.nickname = "javelin"
        this.price = 1100
        this.available = !progress[this.nickname]
        this.hasCard = false
    }
    enable() {
        if(!progress[this.nickname]) {
            progress[this.nickname] = true
            var b = BJavelin.new(this.game)
            var len = Object.keys(this.game.hero.buff).length
            this.game.hero.buff[len] = b
        }
    }
}
