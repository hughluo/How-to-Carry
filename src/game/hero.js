class Hero {
    constructor(game) {
        this.game = game
        //
        this.name = ""
        this.nickname = ""
        this.level = 1
        this.img = null
        this.alive = true
        this.atk = 0
        this.hpCurrent = 0
        this.hpMax = 0
        this.hpRegen = 0
        this.mpCurrent = 0
        this.mpMax = 0
        this.mpRegen = 0
        this.setup(game)
    }
    static new(game, heroName) {
        var i = new this(game, heroName)
        return i
    }
    setup(game) {

    }
}
