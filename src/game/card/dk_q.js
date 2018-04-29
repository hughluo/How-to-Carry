class DkQ extends Card {
    constructor(game, level) {
        super(game, level)
        this.game = game
        this.level = level
        this.name = "Breathe Fire"
        this.nickname = "dkQ"
        this.setup()
        this.damage = [0,9,17,24,30]
        this.manaCost = [0,10,11,12,13]


    }

    setup() {
        this.image = this.game.images[this.nickname]
    }

    cast() {
        //choose Enemy
        //TODO:structre debuff
        this.game.scene.currentAction = {
            type: "Magic",
            from: this,
            done: false,
            manaCost: this.manaCost[this.level],
            affect: "AllEnemy",
            target: 0,
            damage: this.damage[this.level],
            // debuff: {
            //     // affect: "AllEnemy",
            //     // type: "AtkDown",
            //     // value: 0.35,
            //     // duration: 1,
            // },
        }
        log("casted")
    }
}
