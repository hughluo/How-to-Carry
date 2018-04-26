class SceneShop extends Scene {
    constructor(game) {
        super(game)
        this.name = "shop"
        this.game = game
        this.setup(game)
        this.elements = []
        // TODO: chosenItem should be an instance of class item
        this.chosenItem = "foo"

    }

    setup(game) {
        this.layout = {
            bgY: {
              startX: 0,
              startY: 0,
            },
            hint: {
                return: {
                    startX: 50,
                    startY: 50,
                },
                chosen: {
                    startX: 50,
                    startY: 90,
                },
                notice: {
                    startX: 50,
                    startY: 130,
                },
            },
            buyButton: {
                startX: 1100,
                startY: 700,
                width: 90,
                height: 27,
            },
            mapButton: {
                startX: 1200,
                startY: 700,
                width: 90,
                height: 27,
            },
            //items
            healingSalve:{
                startX: 50,
                startY: 150,
            },
            tango:{
                startX: 150,
                startY: 150,
            },
            clarity:{
                startX: 250,
                startY: 150,
            },
            quellingBlade: {
                startX: 50,
                startY: 230,
            },
            battleFury: {
                startX: 150,
                startY: 230,
            },
            morbidMask: {
                startX: 50,
                startY: 310,
            },
            maskOfMadness: {
                startX: 150,
                startY: 310,
            },
            javelin: {
                startX: 50,
                startY: 390,
            },
            skullBasher: {
                startX: 150,
                startY: 390,
            },
        }
        this.game.canvas.addEventListener('mouseup',this.backToMap, false)
        this.game.canvas.addEventListener('mouseup',this.confirmBuy, false)
        this.game.canvas.addEventListener('mouseup',this.chooseItem, false)
        //Choose

    }
    update() {
        // switch(chosenItem) {
        //     case "foo":
        //         break
        //     case
        // }

    }
    draw() {

        var l = this.layout
        var i = this.game.image
        // this.game.context.drawImage(i.buyButton, l.buyButton.startX, l.buyButton.startY)
        // this.game.context.drawImage(i.mapButton, l.mapButton.startX, l.mapButton.startY)
        //
        drawByName("bgY")
        drawByName("buyButton")
        drawByName("mapButton")
        drawByName("healingSalve")
        drawByName("tango")
        drawByName("clarity")
        drawByName("quellingBlade")
        drawByName("battleFury")
        drawByName("morbidMask")
        drawByName("maskOfMadness")
        drawByName("javelin")
        drawByName("skullBasher")

        //
        this.game.context.fillText("Click Map to return!", l.hint.return.startX, l.hint.return.startY)
        this.game.context.fillText("Notice: Some items grant you buff(s), some items add card(s), some items do both!", l.hint.notice.startX, l.hint.notice.startY)

            if(this.chosenItem == "foo") {
                this.game.context.fillText("Choose an item to buy!", l.hint.chosen.startX, l.hint.chosen.startY)
            } else {
                  if(this.chosenItem.price > this.game.money){
                      this.game.context.fillText("insufficent Gold, please farm harder!", l.hint.chosen.startX, l.hint.chosen.startY)
                  } else {
                      if(this.chosenItem.available) {
                          this.game.context.fillText("You have " + this.game.money + " gold, pay " + this.chosenItem.price + " to buy " + this.chosenItem.name,
                              l.hint.chosen.startX, l.hint.chosen.startY)
                      } else {
                          this.game.context.fillText(this.chosenItem.name + " is not available! Hint: Some items can only bought once.",
                              l.hint.chosen.startX, l.hint.chosen.startY)
                      }
                  }
          }
    }
    chooseItem(e) {
        var x = e.offsetX
        var y = e.offsetY
        var self = progress.game.scene
        var l = progress.game.scene.layout
        var w = 88
        var h = 64
        if(chosen(x, y, l.healingSalve.startX, l.healingSalve.startY, w, h)) {
            self.chosenItem = "healingSalve"
        } else if (chosen(x, y, l.tango.startX, l.tango.startY, w, h)) {
            self.chosenItem = "tango"
        } else if (chosen(x, y, l.clarity.startX, l.clarity.startY, w, h)) {
            self.chosenItem = "clarity"
        } else if (chosen(x, y, l.quellingBlade.startX, l.quellingBlade.startY, w, h)) {
            self.chosenItem = IQuellingBlade.new(self.game)
        } else if (chosen(x, y, l.battleFury.startX, l.battleFury.startY, w, h)) {
            self.chosenItem = IBattleFury.new(self.game)
        } else if (chosen(x, y, l.morbidMask.startX, l.morbidMask.startY, w, h)) {
            self.chosenItem = IMorbidMask.new(self.game)
        } else if (chosen(x, y, l.maskOfMadness.startX, l.maskOfMadness.startY, w, h)) {
            self.chosenItem = IMaskOfMadness.new(self.game)
        } else if (chosen(x, y, l.javelin.startX, l.javelin.startY, w, h)) {
            self.chosenItem = IJavelin.new(self.game)
        } else if (chosen(x, y, l.skullBasher.startX, l.skullBasher.startY, w, h)) {
            self.chosenItem = ISkullBasher.new(self.game)
        }
      }
      confirmBuy(e) {
          var g = progress.game
          var self = progress.game.scene
          var x = e.offsetX
          var y = e.offsetY
          var xT = self.layout.buyButton.startX
          var yT = self.layout.buyButton.startY
          var w = self.layout.buyButton.width
          var h = self.layout.buyButton.height
          log(x, y, xT, yT, w, h)
          if(chosen(x, y, xT, yT, w, h)) {
              switch(self.chosenItem) {
                  case "foo":
                      log("print choose item first")
                      break
                  case "already":
                      log("print alr buy")
                      break
                  default:
                      log("should done buy")
                      if(self.chosenItem.available) {
                          if(self.chosenItem.price <= g.money) {
                              g.money -= self.chosenItem.price
                              self.chosenItem.enable()
                              self.chosenItem = "foo"
                          }
                      }
              }
          }
          self.chooseDone = true
        }
        backToMap(e) {
            var l = progress.game.scene.layout
            var x = e.offsetX
            var y = e.offsetY
            var xt = l.mapButton.startX
            var yt = l.mapButton.startY
            var w = l.mapButton.width
            var h = l.mapButton.height
            if(chosen(x, y, xt, yt, w, h)){
                var g = progress.game
                g.canvas.removeEventListener('mouseup', g.scene.confirmBuy, false)
                g.canvas.removeEventListener('mouseup', g.scene.chooseItem, false)
                g.canvas.removeEventListener('mouseup', g.scene.backToMap, false)
                var s = SceneMap.new(g, g.hero)
                g.replaceScene(s)
            }
        }
        addItemObj(nickname) {

        }
}
