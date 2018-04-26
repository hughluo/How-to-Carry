class ISkullBasher extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Skull Basher"
        this.nickname = "skullBasher"
        this.price = 2700
        this.available = !progress[this.nickname]
        this.hasCard = false
    }
    enable() {
        if(!progress[this.nickname]) {
            progress[this.nickname] = true
            var b = BSkullBasher.new(this.game)
            var len = Object.keys(this.game.hero.buff).length
            this.game.hero.buff[len] = b
        }
    }
}
