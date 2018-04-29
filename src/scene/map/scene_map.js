class SceneMap extends Scene {
  //// TODO: restruct scenemap like scene upgrade
    constructor(game, hero) {
        super(game)
        this.name = "map"
        //for demo purpose, disable stage choose. It will auto choose next stage.
        this.chooseDone = true
        this.chosenStage = "stage" + progress.stage
        //elements to draw
        this.elements = []
        this.game = game
        this.hero = hero
        this.setup(game)
        this.enemiesObj = {}
        this.game.map = this.game.imageByName('s' + progress.stage, 0, this.game.canvas.height - this.game.images.s0.height)

    }
    static new(game, hero) {
        var i = new this(game, hero)
        return i
    }

    setup(game) {
        this.layout = {
            dialog:{
                startX: 60,
                startY: 40,
            },
            hint0: {
                startX: 100,
                startY: 100,
            },
            hint1: {
                startX: 100,
                startY: 150,
            },
            fightButton: {
                startX: 1200,
                startY: 700,
                width: 90,
                height: 27,
            },
            shopButton: {
                startX: 1100,
                startY: 700,
                width: 90,
                height: 27,
            },
            mark: {
                width: 50,
                height: 50,
            },
            s0: {
                startX: 1,
                startY: 1,

            },
        }

        this.game.registerContAction('w', function(){
            game.map.y += 20
            if(game.map.y > 0) {
                game.map.y = 0
            }
        })
        this.game.registerContAction('s', function(){
            game.map.y -= 20
            if(game.map.y < game.canvas.height - game.images.s0.height) {
                game.map.y = game.canvas.height - game.images.s0.height
            }
        })
        this.game.registerContAction('a', function(){
            game.map.x += 20
            if(game.map.x > 0) {
                game.map.x = 0
            }
        })
        this.game.registerContAction('d', function(){
            game.map.x -= 20
            if(game.map.x < game.canvas.width - game.images.s0.width) {
                game.map.x = game.canvas.width - game.images.s0.width
            }
        })

        // this.elements.push(this.game.imageByName("mapTower", 500, 300))

        this.game.canvas.addEventListener('mouseup', this.goToShop, false)

        //TODO: find some image and draw as stage icon


    }
    draw() {
        var l = this.layout
        drawByName("fightButton")
        drawByName("shopButton")
        drawByName("dialog")
        switch(this.chosenStage) {
            // case "foo":
            //     this.game.context.fillText("Choose stage!", 50, 50)
            //     break
            case "stage0":
                this.game.context.fillText("As a carry, last hit is very important.", l.hint0.startX, l.hint0.startY)
                this.game.context.fillText("So let's start with farming some lane creeps.", l.hint1.startX, l.hint1.startY)
                break
            case "stage1":
                this.game.context.fillText("Furthermore, farm some neutral creeps", l.hint0.startX, l.hint0.startY)
                break
            case "stage2":
                this.game.context.fillText("Farm is fun, right? Try Medium camp now.",l.hint0.startX, l.hint0.startY)
                break
            case "stage3":
                this.game.context.fillText("If your teammate ask you, why farm jungle", l.hint0.startX, l.hint0.startY)
                break
            case "stage4":
                this.game.context.fillText("Start of all, farm some lane creeps.", l.hint0.startX, l.hint0.startY)
                break
            case "stage5":
                this.game.context.fillText("Ready to fight some powerful creeps!", l.hint0.startX, l.hint0.startY)
                break
        }
    }

    update() {
        var self = this
          if(!self.chooseDone) {
              // self.game.canvas.addEventListener('mouseup', this.selectStage, false)
          } else {
              self.game.canvas.addEventListener('mouseup', this.goToFight, false)
              //Choose

          }

          // if(chooseDone) {
          //     //clear all key setting before change to the next scene
          //     game.clearRegisterAction()
          //     game.clearRegisterContAction()
          //     game.canvas.removeEventListener('mouseup', selectStage, false)
          //     var s = SceneFight.new(game, game.hero, game.scene.enemiesObj)
          //     game.replaceScene(s)
          // }
    }
    addEnemyToObj() {
        for (var i = 0; i < arguments.length; i++) {
          this.enemiesObj[i] = arguments[i]
        }
    }
    initStage(game) {
        switch(this.chosenStage) {
            case "stage0":
                var enemiesCamp = randomChooseAmong("koboldCamp")
                switch(enemiesCamp) {
                    case"koboldCamp":
                        var k1 = Kobold.new(game)
                        var k2 = Kobold.new(game)
                        var k3 = Kobold.new(game)
                        var kS = KoboldSoldier.new(game)
                        var kF = KoboldForeman.new(game)
                        this.addEnemyToObj(k1, k2, k3, kS, kF)
                        break

              }
        }
    }
    // selectStage(e) {
    //     var x = e.offsetX
    //     var y = e.offsetY
    //     var
    //     log(x, y)
    //     if(chosen(x, y, 1169, 445, 128, 128)){
    //         progress.game.scene.chosenStage = "stage1"
    //         progress.game.scene.chooseDone = true
    //     }
    // }
    goToShop(e) {
        var x = e.offsetX
        var y = e.offsetY
        var l = progress.game.scene.layout
        var xt = l.shopButton.startX
        var yt = l.shopButton.startY
        var w = l.shopButton.width
        var h = l.shopButton.height
        if(chosen(x, y, xt, yt, w, h)){
            var g = progress.game
            // g.canvas.removeEventListener('mouseup', g.scene.selectStage, false)
            g.canvas.removeEventListener('mouseup', g.scene.goToShop, false)
            g.canvas.removeEventListener('mouseup', g.scene.goToFight, false)
            var s = SceneShop.new(g)
            g.replaceScene(s)
        }
    }
    goToFight(e) {
        var self = progress.game.scene
        var x = e.offsetX
        var y = e.offsetY
        var xt = self.layout.fightButton.startX
        var yt = self.layout.fightButton.startY
        var w = self.layout.fightButton.width
        var h = self.layout.fightButton.height
        log(x, y)
        if(chosen(x, y, xt, yt, w, h)){
            if(self.chooseDone) {
                self.initStage(self.game)
                // self.game.canvas.removeEventListener('mouseup', self.selectStage, false)
                self.game.canvas.removeEventListener('mouseup', self.goToShop, false)
                self.game.canvas.removeEventListener('mouseup', self.goToFight, false)
                var s = SceneFight.new(progress.game, self.hero, self.enemiesObj)
                self.game.replaceScene(s)
            } else {
                log("Not done choose stage yet!")
            }
        }
    }
}
