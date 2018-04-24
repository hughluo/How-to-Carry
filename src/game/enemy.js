class Enemy {
    constructor(game) {
        this.game = game
        this.name = ""
        this.nickname = ""
        this.img = null
        this.alive = true
        this.atk = 0
        this.hpCurrent = 0
        this.hpMax = 0
        this.hpRegen = 0
        this.mpCurrent = 0
        this.mpMax = 0
        this.mpRegen = 0
        this.debuffCurrent = []
        this.bounty = 0
        this.moveDone = false

    }
    static new(game) {
        var i = new this(game)
        return i
    }
    attack(){
        this.game.hero.hpCurrent -= this.atk
        this.game.context.fillText(this.name + " attacked you! Cause " + this.atk + " damage!", 300, 50)
        this.image.y -= 20

    }
    move() {
        this.attack()
        this.moveDone = true
    }
    hpRegen() {
        this.hp += hpR
    }
    mpRegen() {
        this.mp += mpR
    }
}
