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
        this.atkPara = 1
        this.lifesteal = 0
        this.atkModify = {}
        this.hpCurrent = 0
        this.hpMax = 0
        this.hpRegen = 0
        this.hpRegenEx = 0
        this.mpCurrent = 0
        this.mpMax = 0
        this.mpRegen = 0
        this.mpRegenEx = 0
        this.buff = {}
        this.setup(game)
    }
    static new(game, heroName) {
        var i = new this(game, heroName)
        return i
    }
    setup(game) {

    }
}
