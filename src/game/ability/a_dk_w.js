class AdkW extends Ability{
    constructor(game) {
        super(game)
    }
    learn() {
        var len = Object.keys(progress.cardSet).length
        progress.cardSet[len] = "dkW"
        progress.cardSet[len + 1] = "dkW"
        progress.heroW += 1
    }
    upgrade() {
        if(progress.heroW == 0) {
            this.learn()
        } else {
            progress.heroW += 1
        }
    }
}
