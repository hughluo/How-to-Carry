class IMorbidMask extends Item {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Morbid Mask"
        this.nickname = "morbidMask"
        this.price = 1200
        this.available = !progress[this.nickname]
        this.hasCard = false
    }
    enable() {
        if(!progress[this.nickname]) {
            progress[this.nickname] = true
            var b = BMorbidMask.new(this.game)
            var len = Object.keys(this.game.hero.buff).length
            this.game.hero.buff[len] = b
        }
    }
}
