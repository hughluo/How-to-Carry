class AdkQ extends Ability{
    constructor(game) {
        super(game)
    }
    learn() {
        var len = Object.keys(progress.cardSet).length
        progress.cardSet[len] = "dkQ"
        progress.cardSet[len + 1] = "dkQ"
        progress.heroQ += 1
    }
    upgrade() {
        if(progress.heroQ == 0) {
            this.learn()
        } else {
            progress.heroQ += 1
        }
    }
}
