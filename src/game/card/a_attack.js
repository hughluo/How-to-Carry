class Attack extends Card {
    constructor(game, level) {
        super(game, level)
        this.game = game
        this.level = level
        this.name = "Attack"
        this.nickname = "aAtk"
        this.setup()
        this.damage = [0,0,0,0,0]
        this.manaCost = [0,0,0,0,0]
        this.atkPara  = [0, 1, 1.5, 2, 10]


    }

    setup() {
        this.image = this.game.imageByName(this.nickname,0 ,0).image
    }

    cast() {
        //choose Enemy

        this.game.scene.currentAction = {
            type: "Attack",
            from: this,
            done: false,
            manaCost: this.manaCost[this.level],
            affect: "Enemy",
            target: 1,
            damage: Math.ceil(this.game.hero.atk * this.game.hero.atkPara * this.atkPara[this.level]),
            debuff: null,
        }
    }
}
