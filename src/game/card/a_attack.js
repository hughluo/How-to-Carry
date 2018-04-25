class Attack extends Card {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Attack"
        this.nickname = "aAtk"
        this.setup()
        this.level = 1
        this.damage = [0,0,0,0,0]
        this.manaCost = [0,0,0,0,0]
        this.atkPara  = [0,1,1.5,2,2.5]


    }

    setup() {
        this.image = this.game.imageByName(this.nickname,0 ,0).image
    }

    cast() {
        //choose Enemy

        this.game.scene.currentAction = {
            from: this,
            done: false,
            manaCost: this.manaCost[this.level],
            affect: "Enemy",
            target: 1,
            damage: Math.ceil(this.game.hero.atk * this.atkPara[this.level]) ,
            debuff: null
        }
    }
}
