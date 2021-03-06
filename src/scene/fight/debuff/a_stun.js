class AStun extends Debuff{
    constructor(game, level, nickname, duration) {
        super(game, level)
        this.game = game
        this.level = level
        this.nickname = nickname
        this.duration = duration
        this.alive = true
        this.name = "Stun"
        this.image = this.game.imageByName(this.nickname, 0, 0).image
        this.layoutX = 0
        this.layoutY = 0
        this.target = null

    }
    static new(game, level, nickname, duration) {
        var i = new this(game, level, nickname, duration)
        return i
    }
    run () {
        var t = this.target
        t.moveDone = true
        this.duration --
    }
}
