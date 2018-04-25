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
        this.debuff = []
        this.bounty = 0
        this.moveDone = false

    }
    static new(game) {
        var i = new this(game)
        return i
    }
    turn() {
        this.image.y -= 20
    }
    attack(){
        this.game.hero.hpCurrent -= this.atk
        // this.game.context.fillText(this.name + " attacked you! Cause " + this.atk + " damage!", 300, 50)


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
    //TODO Debuff Handler
    debuffHandler() {
        var d = this.debuff
        for(var i = 0; i < d.length; i++) {
            switch(d[i][type]) {
                case "":
                    break
            }
        }
    }
}
