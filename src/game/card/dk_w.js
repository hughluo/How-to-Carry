class DkW extends Card {
    constructor(game, level) {
        super(game, level)
        this.game = game
        this.level = level
        this.name = "Dragon Tail"
        this.nickname = "dkW"
        this.setup()
        this.damage = [0,0,0,0,0]
        this.manaCost = [0,10,10,10,10]


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
            affect: "Enemy",
            target: 1,
            damage: this.damage[this.level],
            debuff: this.createDebuff(),
        }
    }
    createDebuff() {
        var d = DebuffDkW.new(this.game, this.level)
        return d
    }

}
