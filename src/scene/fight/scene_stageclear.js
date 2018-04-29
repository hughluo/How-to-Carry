class SceneStageClear extends Scene {
  //// TODO: restruct scenemap like scene upgrade
    constructor(game, turn) {
        super(game)
        this.name = "stageClear"
        //elements to draw
        this.elements = []
        this.game = game
        this.hero = game.hero
        this.turn = turn
        this.setup(game)
        this.bonus = 0
        this.calcBonus()

    }
    static new(game, turn) {
        var i = new this(game, turn)
        return i
    }

    setup(game) {
        this.layout = {
            upgradeButton: {
                startX: 1200,
                startY: 700,
                width: 90,
                height: 27,
              },
            // shopButton: {
            //     startX: 1100,
            //     startY: 700,
            //     width: 90,
            //     height: 27,
            // }
        }



        this.game.canvas.addEventListener('mouseup', this.goToUpgrade, false)

        //TODO: find some image and draw as stage icon


    }
    draw() {
        var l = this.layout
        drawByName("upgradeButton")
        this.game.context.fillText("Congrats, you have done this one!", 100, 50)
        this.game.context.fillText("To a carry player, time is money!", 100, 100)
        this.game.context.fillText("You have done this farm in " + this.turn + " turn.", 100, 150)
        this.game.context.fillText("Therefore, you will earn " + this.bonus + " Gold as bonus.", 100, 200)
        this.game.context.fillText("By the way, you also gain enough experience to level up through last farm.", 100, 250)
        this.game.context.fillText("Higher level means higher farm efficiency.", 100, 300)
        this.game.context.fillText("Click upgrade to level up your ability and farm more.", 100, 350)
        this.game.context.fillText("FYI: Don't forget to buy some new stuff in the shop.", 100, 400)
    }

    update() {
    }
    calcBonus() {
        if(this.turn < 30) {
            this.bonus = (30 - this.turn) * 100
        } else {
            this.bonus = 100
        }
        this.game.money += this.bonus
    }

    goToUpgrade(e) {
        var x = e.offsetX
        var y = e.offsetY
        var l = progress.game.scene.layout
        var xt = l.upgradeButton.startX
        var yt = l.upgradeButton.startY
        var w = l.upgradeButton.width
        var h = l.upgradeButton.height
        if(chosen(x, y, xt, yt, w, h)){
            var g = progress.game
            g.canvas.removeEventListener('mouseup', g.scene.goToUpgrade, false)
            var s = SceneUpgrade.new(g)
            g.replaceScene(s)
        }
    }
}
