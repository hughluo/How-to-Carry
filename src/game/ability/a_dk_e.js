class AdkE extends Ability{
    constructor(game) {
        super(game)
    }
    learn() {
        var b = BDkE.new(this.game)
        b.level = 1
        var len = Object.keys(this.game.hero.buff).length
        this.game.hero.buff[len] = b
        progress.heroE += 1
    }
    upgrade() {
        if(progress.heroE == 0) {
            this.learn()
        } else {
            var len = Object.keys(this.game.hero.buff).length
            for(var i = 0; i < len; i++) {
                if(this.game.hero.buff[i].nickname == "buffDkE") {
                    this.game.hero.buff[i].level += 1
                }
            }
            progress.heroE += 1
        }

    }
}
