class Card {
    constructor(game) {
        this.game = game
        this.name = "class card name"
        this.nickname = "class card nickname"
        this.casted = false
        this.layoutX = - 500
        this.layoutY = - 500

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
            damage: 0,
            debuff: null
        }
    }
}
