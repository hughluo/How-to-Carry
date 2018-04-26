class IBattleFury extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Battle Fury"
        this.nickname = "battleFury"
        this.price = 4100
        this.available = !progress[this.nickname]
        this.hasCard = false
    }
    enable() {
        if(!progress[this.nickname]) {
            progress[this.nickname] = true
            var b = BBattleFury.new(this.game)
            var len = Object.keys(this.game.hero.buff).length
            this.game.hero.buff[len] = b
        }
    }
}
