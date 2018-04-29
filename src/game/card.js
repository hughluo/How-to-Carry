class Card {
    constructor(game, level) {
        this.game = game
        this.level = level
        this.name = "class card name"
        this.nickname = "class card nickname"
        this.casted = false
        this.image = this.game.imageByName(this.nickname,0 ,0).image
        this.layoutX = - 500
        this.layoutY = - 500
        //
        this.damage = [0,0,0,0,0]
        this.manaCost = [0,0,0,0,0]

    }
    static new(game, level) {
        var i = new this(game, level)
        return i
    }
    cast() {
        //choose Enemy
        this.game.scene.currentAction = {
            from: this,
            done: false,
            affect: "",
            target: 0,
            damage: this.damage[this.level],
            debuff: null
        }
    }
}
