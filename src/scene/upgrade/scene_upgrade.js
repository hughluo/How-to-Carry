class SceneUpgrade extends Scene {
  // TODO: realise upgrade.
    constructor(game) {
        super(game)
        this.name = "upgrade"
        this.chooseDone = false
        this.chosenAbility = "foo"
        this.upgradeDone = false
        //elements to draw
        this.elements = []
        this.game = game
        this.hero = game.hero
        this.setup(game)

    }
    setup(game) {
        this.layout = {
            heroHp: {
                startX: 200,
                startY: 170,
            },
            heroMp: {
                startX: 200,
                startY: 200,
            },
            heroImg: {
                startX: 100,
                startY: 200,
                endX: 350,
                endY: 450,
                singleX: 250,
                singleY: 250,
            },
            heroAbi: {
                startX: 500,
                startYQ: 70,
                startYW: 250,
                startYE: 430,
                startYR: 610,
                width: 128,
                height: 128,
            },
            heroAbiText: {
                level: {
                    startX: 700,
                    startYQ: 70,
                    startYW: 250,
                    startYE: 430,
                    startYR: 610,

                },
            },
            upgradeButton: {
                startX: 1100,
                startY: 700,
                width: 90,
                height: 27,

            },
            doneButton: {
                startX: 1200,
                startY: 700,
                width: 90,
                height: 27,
            },
        }
        switch(this.game.hero.level) {
            case 1:// first level, // TODO:lead to scene shop
                var l = this.layout
                this.elements.push(this.game.imageByName(this.hero.nickname+"Img",
                    l.heroImg.startX,l.heroImg.startY))
                this.elements.push(this.game.imageByName(this.hero.nickname+"Q",
                    l.heroAbi.startX, l.heroAbi.startYQ))
                this.elements.push(this.game.imageByName(this.hero.nickname+"W",
                    l.heroAbi.startX, l.heroAbi.startYW))
                this.elements.push(this.game.imageByName(this.hero.nickname+"E",
                    l.heroAbi.startX, l.heroAbi.startYE))
                // this.elements.push(this.game.imageByName(this.hero.nickname+"R",
                    // this.layout.heroAbi.startX, this.layout.heroAbi.startYR))
                break
        }
        this.game.canvas.addEventListener('mouseup',this.confirmUpgrade, false)
    }
    draw() {
      // TODO: hero_dic.js
        if(!this.upgradeDone) {
            drawByName("upgradeButton")
        }
        drawByName("doneButton")
        var l = this.layout
        if(true) {
            this.game.context.fillText("Hp: " + this.hero.hpCurrent + "/" + this.hero.hpMax, l.heroHp.startX,
                l.heroHp.startY)
            this.game.context.fillText("Mp: " + this.hero.mpCurrent + "/" + this.hero.mpMax, l.heroMp.startX,
                l.heroMp.startY)
            this.game.context.fillText("Level: " + progress.heroQ + "/4",
                l.heroAbiText.level.startX, l.heroAbiText.level.startYQ)
            this.game.context.fillText("Level: " + progress.heroW + "/4",
                l.heroAbiText.level.startX, l.heroAbiText.level.startYW)
            this.game.context.fillText("Level: " + progress.heroE + "/4",
                l.heroAbiText.level.startX, l.heroAbiText.level.startYE)
        }
        switch(this.chosenAbility) {
            case "foo":
                this.game.context.fillText("Choose an ability to upgrade!", 50, 50)
                break
            case "heroQ":
                this.game.context.fillText("You have chosen Q to upgrade", 50, 50)
                break
            case "heroW":
                this.game.context.fillText("You have chosen W to upgrade", 50, 50)
                break
            case "heroE":
                this.game.context.fillText("You have chosen E to upgrade", 50, 50)
                break
            case "done":
                this.game.context.fillText("Click Done back to map!", 50, 50)
                break
        }

    }

    update() {
        var self = this
        if(!this.chooseDone) {
            self.game.canvas.addEventListener('mouseup', self.chooseAbi, false)
        } else {
            self.game.canvas.addEventListener('mouseup',doneUpgrade, false)
            //Choose
            function doneUpgrade(e) {
                var x = e.offsetX
                var y = e.offsetY
                var xt = self.layout.doneButton.startX
                var yt = self.layout.doneButton.startY
                var w = self.layout.doneButton.width
                var h = self.layout.doneButton.height
                if(chosen(x, y, xt, yt, w, h)){
                    if(self.chooseDone) {
                        // self.game.canvas.removeEventListener('mouseup', self.confirmUpgrade, false)
                        // self.game.canvas.removeEventListener('mouseup', self.chooseAbi, false)
                        self.game.canvas.removeEventListener('mouseup', doneUpgrade, false)

                        // log(self.game.cardSet)
                        var s = SceneMap.new(progress.game, self.hero)
                        self.game.replaceScene(s)
                    } else {
                        log("Not done upgrade yet!")
                    }
                }
            }
        }
    }
    someFunct(para) {

    }
    chooseAbi(e) {
        var self = progress.game.scene
        log(self)
        var x = e.offsetX
        var y = e.offsetY
        var xT = self.layout.heroAbi.startX
        var yQ = self.layout.heroAbi.startYQ
        var yW = self.layout.heroAbi.startYW
        var yE = self.layout.heroAbi.startYE
        var w = self.layout.heroAbi.width
        var h = self.layout.heroAbi.height
        if(chosen(x, y, xT, yQ, w, h)) {
            self.chosenAbility = "heroQ"
            self.chooseDone = true
        } else if (chosen(x, y, xT, yW, w, h)) {
            self.chosenAbility = "heroW"
            self.chooseDone = true
        } else if (chosen(x, y, xT, yE, w, h)) {
            self.chosenAbility = "heroE"
            self.chooseDone = true
        }
    }
    confirmUpgrade(e) {
        var self = progress.game.scene
        var x = e.offsetX
        var y = e.offsetY
        var xt = self.layout.upgradeButton.startX
        var yt = self.layout.upgradeButton.startY
        var w = self.layout.upgradeButton.width
        var h = self.layout.upgradeButton.height
        if(chosen(x, y, xt, yt, w, h)) {
            // progress[self.chosenAbility] += 1
            // TODO: realize through ability. learn (if level = 0) and upgrade
            self.excuteUpgrade()
            self.upgradeDone = true
            self.chosenAbility = "done"
            self.game.canvas.removeEventListener('mouseup', self.chooseAbi, false)
            self.game.canvas.removeEventListener('mouseup', self.confirmUpgrade, false)
        }
    }
    excuteUpgrade() {
        var self = progress.game.scene
        var c = "A" + self.hero.nickname + self.chosenAbility.charAt(4)
        var a = eval(c+".new(progress.game)")
        a.upgrade()
    }
    cardByNickname(nickname) {
        return cardDic[nickname](this.game)
    }
    // loadCardSet() {
    //     var g = progress.game
    //     var self = progress.game.scene
    //     log(self.name)
    //     var len = Object.keys(progress.cardSet).length
    //     for (var i = 0; i < len; i++) {
    //         var c = self.cardByNickname(progress.cardSet[i])
    //         self.game.cardSet[i] = c
    //    }
    // }
}
