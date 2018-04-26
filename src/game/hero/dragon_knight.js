class DragonKnight extends Hero {
    constructor(game) {
        super(game)
        this.name = "Dragon Knight"
        this.nickname = "dk"
        this.level = 1
        this.img = null
        this.alive = true
        this.atk = 5
        this.atkPara = 1
        this.atkModify = {}
        this.hpCurrent = 63
        this.hpMax = 63
        this.hpRegen = 1
        this.mpCurrent = 26
        this.mpMax = 26
        this.mpRegen = 1
        this.buff = {}
        this.setup(game)
    }

    setup(game) {

    }

}
