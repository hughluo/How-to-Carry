class Card {
    constructor(game) {
        this.game = game
        this.name = "class card name"
        this.nickname = "class card nickname"
        this.casted = false
        this.level = 1
        this.image = this.game.imageByName(this.nickname,0 ,0).image
        this.layoutX = - 500
        this.layoutY = - 500
        //
        this.damage = [0,0,0,0,0]
        this.manaCost = [0,0,0,0,0]

    }
    static new(game) {
        var i = new this(game)
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
