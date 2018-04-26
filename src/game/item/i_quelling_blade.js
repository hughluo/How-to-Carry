class IQuellingBlade extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Quelling Blade"
        this.nickname = "quellingBlade"
        this.price = 200
        this.available = !progress[this.nickname]
        this.hasCard = false
    }
    enable() {
        if(!progress[this.nickname]) {
            progress[this.nickname] = true
            var b = BQuellingBlade.new(this.game)
            var len = Object.keys(this.game.hero.buff).length
            this.game.hero.buff[len] = b
        }
    }
}
