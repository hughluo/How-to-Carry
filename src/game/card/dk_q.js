class DkQ extends Card {
    constructor(game) {
        super(game)
        this.game = game
        this.name = "Breathe Fire"
        this.nickname = "dkQ"
        this.setup()
        this.level = 1
        this.damage = [0,9,17,24,30]
        this.manaCost = [0,10,11,12,13]


    }

    setup() {
        this.image = this.game.imageByName(this.nickname,0 ,0).image
    }

    cast() {
        //choose Enemy
        //TODO:structre debuff
        this.game.scene.currentAction = {
            from: this,
            done: false,
            manacost: this.manaCost[this.level],
            affect: "AllEnemy",
            target: 0,
            damage: this.damage[this.level],
            debuff: {
                // affect: "AllEnemy",
                // type: "AtkDown",
                // value: 0.35,
                // duration: 1,
            },
        }
    }
}
