class KoboldSoldier extends Enemy {
    constructor(game) {
        super(game)
        this.setup()
        this.game = game


    }
    static new(game) {
        var i = new this(game)
        return i
    }
    setup() {
        this.name = "Kobold Soldier"
        this.nickname = "koboldSoldier"
        this.image = this.game.imageByName(this.nickname,0 ,0)
        this.atk = 2
        this.hpCurrent = 32
        this.hpMax = 32
        this.hpRegen = 1
        this.mpCurrent = 5
        this.mpMax = 5
        this.mpRegen = 1
        this.bounty = 14
    }

}
