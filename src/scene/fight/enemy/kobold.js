class Kobold extends Enemy {
    constructor(game) {
        super(game)
        this.setup()
        this.game = game
        this.hero = game.hero

    }
    static new(game) {
        var i = new this(game)
        return i
    }
    setup() {
        this.name = "Kobold"
        this.nickname = "kobold"
        this.image = this.game.imageByName(this.nickname,0 ,0)
        this.atk = 1
        this.hpCurrent = 24
        this.hpMax = 24
        this.hpRegen = 1
        this.mpCurrent = 5
        this.mpMax = 5
        this.mpRegen = 1
        this.bounty = 6
    }


}
