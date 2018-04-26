class SceneFight extends Scene {
    constructor(game, hero, enemies) {
        super(game)
        this.name = "fight"
        this.enemiesConfig = {
            numLoaded: 0,
            numCurrent: 0,
            numMax: 5,
        }

        this.enemies = enemies
        this.enemiesConfig.numLoaded = Object.keys(enemies).length
        this.enemiesConfig.numCurrent = this.enemiesConfig.numLoaded
        this.game = game
        this.hero = hero
        //buff and debuff // TODO: realize
        this.playerBuffConfig = {
            buff: {

            },
        }
        //cards
        this.cardConfig = {
            cardSet: {},
            cardSetNum: 0,
            cardDeck: {},
            cardDeckNum: 0,
            cardDeckSlot: {},
            currentCardHand: null,
            cardHand: {},
            cardHandNum: {},
            cardHandSlot: {},             //slotNum -> cardkey
            cardFold: {},
            cardFoldNum: 0,
            cardFoldSlot: {},
            cardDrawDoneBegin: false,
            cardDrawNumBegin: 4,
            cardHandMax: 6,
        }
        //should init like this:
        //this.cardConfig.cardSet = config.cardSet
        // TODO: player turn and enemy turn
        //there is interval between playerTurn and enemiesTurn to display animation etc.
        this.playerTurn = true
        this.enemiesTurn = false
        //
        this.currentAction = {}
        //elements to draw
        this.elements = []
        this.cardHandToDraw = []
        this.setup(game, enemies)
        this.testset(game, enemies)
        this.init()
    }
    static new(game, hero, enemies) {
        var i = new this(game, hero, enemies)
        return i

    }

    setup(game, enemies) {
        this.layout = {
            buff: {
                startX: 20,
                startY: 20,
                endX: 1020,
                endY: 70,
                singleX: 40,
                singleY: 40,
                slotX: [20, 70, 120, 170, 220, 270, 320, 370],
            },
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
            // enemiesSlotX: [800,950,650,1100,500],
            enemiesSlotX: [500,650,800,950,1100],
            enemiesBuff: {
                slotY: 200,
                slotX: [[500, 550, 600],[650, 700, 750],[800, 850, 900],[950, 1000, 1050],[1100, 1140, 1200],],

            },
            enemiesImg: {
                startX: 500,
                startY: 300,
                endX: 1250,
                endY: 450,
                singleX: 150,
                singleY: 150,
                slotY: 300,
            },
            enemiesHp: {
                startX: 500,
                startY: 240,
                endX: 1250,
                endY: 260,
                singleX: 20,
                singleY: 20,
                slotY: 260,
            },
            enemiesMp: {
                startX: 500,
                startY: 270,
                endX: 1250,
                endY: 290,
                singleX: 20,
                singleY: 20,
                slotY: 290,
            },
            cardNum: {
                deck: {
                    startX:1250,
                    startY:20,
                },
                fold: {
                    startX:1250,
                    startY:40,
                },
                hand: {
                    startX:1250,
                    startY:60,
                },
            },
            cardHand: {
                startX: 75,
                startY: 450,
                endX: 1275,
                endY: 750,
                singleX: 160,
                singleY: 300,
                slotX: [75, 275, 475, 675, 875, 1075, 1275],
                slotY: 500,
            },
        }

        this.interface = {
            endTurnButton: {
                image:game.images.endTurnButton,
                x: 300,
                y: 100,
            },
        }

      //enemies
      for (var i = 0; i < this.enemiesConfig.numLoaded; i++) {

              this.enemies[i].image.x = this.layout.enemiesSlotX[i]
              this.enemies[i].image.y = this.layout.enemiesImg.slotY
      }
      //card
      var len = Object.keys(progress.cardSet).length
      for (var i = 0; i < len; i++) {
          var c = this.cardByNickname(progress.cardSet[i])
          this.cardConfig.cardSet[i] = c
      }
      this.cardConfig.cardSetNum = Object.keys(this.cardConfig.cardSet).length
      this.cardConfig.cardDeck = this.cardConfig.cardSet


        //key setting for choose card
        this.game.registerAction('q', function() {
            if(config.cardChosenMode) {
                game.scene.setCurrentCard(0)
            }
        })
        this.game.registerAction('w', function() {
            if(config.cardChosenMode) {
                game.scene.setCurrentCard(1)
            }
        })
        this.game.registerAction('e', function() {
            if(config.cardChosenMode) {
                game.scene.setCurrentCard(2)
            }
        })
        this.game.registerAction('r', function() {
            if(config.cardChosenMode) {
                game.scene.setCurrentCard(3)
            }
        })
        this.game.registerAction('t', function() {
            if(config.cardChosenMode) {
                game.scene.setCurrentCard(4)
            }
        })
        this.game.registerAction('y', function() {
            if(config.cardChosenMode) {
                game.scene.setCurrentCard(5)
            }
        })

        //key setting for choose enemy
        this.game.registerAction('1', function() {
            if(config.enemyChosenMode) {
                game.scene.setCurrentTarget(0)
            }
        })
        this.game.registerAction('2', function() {
            if(config.enemyChosenMode) {
                game.scene.setCurrentTarget(1)
            }
        })
        this.game.registerAction('3', function() {
            if(config.enemyChosenMode) {
                game.scene.setCurrentTarget(2)
            }
        })
        this.game.registerAction('4', function() {
            if(config.enemyChosenMode) {
                game.scene.setCurrentTarget(3)
            }
        })
        this.game.registerAction('5', function() {
            if(config.enemyChosenMode) {
                game.scene.setCurrentTarget(4)
            }
        })
    }
    init() {
        this.drawCard()
    }
    testset(game, enemies) {
      //keyboard for testing purpose
        this.game.registerAction('s', function(){
            saveGame()
        })
        this.game.registerAction('l', function(){
            loadGame()
        })
        this.game.registerAction('o', function(){
            log(game.scene.enemies)
        })
        this.game.registerAction('x', function(){

        })
        // this.cardConfig.cardHand[0] = Attack.new(game)
        // this.cardConfig.cardHand[1] = Attack.new(game)
        // this.cardConfig.cardHand[2] = Attack.new(game)
        // this.cardConfig.cardHand[3] = Attack.new(game)
        // this.cardConfig.cardHand[4] = Attack.new(game)
        // this.cardConfig.cardHand[5] = Attack.new(game)
    }
    update(game) {
      for (var i = 0; i < this.enemiesConfig.numLoaded; i++) {
          if(this.enemies[i]) {
              this.enemies[i]['debuff'] = this.enemies[i]['debuff'].filter(d => d.duration > 0)
          }
      }


        this.grantBuff()
        this.cardNumUpdate()
        this.cardHandLayoutSet()
        this.cardHandCastedCheck()
        this.enemiesMove()
        this.playerMove()
        this.enemiesAliveCheck()
        if (this.enemiesConfig.numCurrent == 0) {
            config.enemyChosenMode = false
            log("victory!")
        }
        if(config.enemyChosenMode || this.cardConfig.cardHandNum == 0) {
          config.cardChosenMode = false
        }
    }
    draw() {
        this.game.context.font="20px Verdana"
        this.game.context.fillStyle="black"
        this.displayTurn()
        this.displayHint()
        this.displayHero()
        this.displayBuff()
        this.displayEnemies()
        this.displayCardNum()
        this.displayCardHand()
        // TODO: buff
        // var b = this.game.imageByName('bTimelock', this.layout.buff.startX, this.layout.buff.startY)
        // this.game.context.drawImage(b.image, b.x, b.y)

    }

    action() {
        if(this.cardConfig.cardHandNum != 0) {
                this.chooseCard()
        }
        if(this.currentAction != null) {
                this.useCard()
        }
    }


    //functions
    drawCard() {
        for (var i = 0; i < this.cardConfig.cardDrawNumBegin; i++) {
            var d = this.cardConfig.cardDeck
            var n = Object.keys(d)
            // log(this.cardConfig.cardDeck)
            // log(n)
            var k = randomAmong(n)
            // log(k)
            this.cardConfig.cardHandSlot[i] = k
            this.cardConfig.cardHand[k] = this.cardConfig.cardDeck[k]
            delete this.cardConfig.cardDeck[k]
        }
    }
    chooseCard() {
        config.cardChosenMode = true
        var c = this.cardConfig.currentCardHand
        if(c != null) {
            c.cast()
            config.cardChosenMode = false
            this.cardConfig.currentCardHand = null
        }
    }
    useCard() {
      // TODO: manacost cardChoiceCheck and rechoice!
        var a = this.currentAction
        runAction:
        switch(a.affect) {
            case "Enemy":
                while (this.enemiesConfig.numCurrent != 0 && a.target > 0){
                    config.enemyChosenMode = true
                    var t = this.currentAction.currentTarget
                    if(t != null) {
                        this.hero.mpCurrent -= a.manaCost
                        if(a.damage != null) {
                            t.hpCurrent -= a.damage
                        }
                        if(a.debuff != null) {
                            var d = a.debuff
                            var i = this.currentAction.currentTargetSlot
                            var j = this.enemies[i]['debuff'].length
                            d.layoutX = this.layout.enemiesBuff.slotX[i][j]
                            d.layoutY = this.layout.enemiesBuff.slotY
                            t.debuff.push(d)
                        }

                        config.enemyChosenMode = false
                        this.currentAction.currentTarget = null
                        a.target -= 1
                    } else {
                          break runAction
                    }


                }
                //casted
                this.currentAction.from.casted = true
                this.currentAction = null
                break
        }
    }
    setCurrentCard(n) {
        var k = this.cardConfig.cardHandSlot[n]
        this.cardConfig.currentCardHand = this.cardConfig.cardHand[k]
    }
    setCurrentTarget(n) {
        this.currentAction.currentTargetSlot = n
        this.currentAction.currentTarget = this.enemies[n]
    }
    cardByNickname(nickname) {
        return cardDic[nickname](this.game)
    }
    displayHero() {
        var h = this.game.imageByName(this.hero.nickname+"Img", this.layout.heroImg.startX, this.layout.heroImg.startY)
        this.game.context.drawImage(h.image, h.x, h.y)
        this.game.context.fillText("Hp: " + this.hero.hpCurrent + "/" + this.hero.hpMax, this.layout.heroHp.startX,
            this.layout.heroHp.startY)
        this.game.context.fillText("Mp: " + this.hero.mpCurrent + "/" + this.hero.mpMax, this.layout.heroMp.startX,
            this.layout.heroMp.startY)
    }
    displayBuff() {
        var l = this.game.scene.layout
        var buffs = this.game.hero.buff
        var len = Object.keys(buffs).length
        for(var i = 0; i < len; i++) {
            var t = buffs[i].image
            var x = l.buff.slotX[i]
            var y = l.buff.startY
            this.game.context.drawImage(t, x, y)
        }

    }
    displayEnemies() {

        for(var i = 0; i < this.enemiesConfig.numLoaded; i++) {
            if(this.enemies[i]) {
                var e = this.enemies
                if(e[i]['debuff'].length > 0) {
                    var db = e[i]['debuff']
                    var self = this
                    db.forEach(function(element) {
                        if(element.duration > 0) {
                          self.game.context.drawImage(element.image, element.layoutX, element.layoutY)
                        }
                    })
                }

                this.game.context.drawImage(e[i].image.image, e[i].image.x, e[i].image.y)
                this.game.context.fillText("Hp: " + this.enemies[i].hpCurrent + "/" + this.enemies[i].hpMax,
                    this.layout.enemiesSlotX[i], this.layout.enemiesHp.slotY)
                this.game.context.fillText("Mp: " + this.enemies[i].mpCurrent + "/" + this.enemies[i].mpMax,
                    this.layout.enemiesSlotX[i], this.layout.enemiesMp.slotY)
            }
        }
    }
    displayCardNum() {
        var d = this.cardConfig.cardDeckNum
        var h = this.cardConfig.cardHandNum
        var f = this.cardConfig.cardFoldNum
        this.game.context.fillText("Deck: " + d, this.layout.cardNum.deck.startX, this.layout.cardNum.deck.startY)
        this.game.context.fillText("Hand: " + h, this.layout.cardNum.hand.startX, this.layout.cardNum.hand.startY)
        this.game.context.fillText("Fold: " + f, this.layout.cardNum.fold.startX, this.layout.cardNum.fold.startY)
    }
    displayCardHand() {
        var s = this.cardConfig.cardHandSlot
        var h = this.cardConfig.cardHand
        for (var i = 0; i < this.cardConfig.cardHandMax; i++) {
            if(s[i]) {
                var k = s[i]
                this.game.context.drawImage(h[k].image, h[k].layoutX, h[k].layoutY)
            }
        }
    }
    displayTurn() {
        if (this.playerTurn) {
           this.game.context.fillText("Your turn!", 100, 50)
        } else {
           this.game.context.fillText("Enemies' turn!", 100, 50)
        }
    }
    displayHint() {
        if (config.cardChosenMode) {

           this.game.context.fillText("Choose Card!", 100, 100)
        }
        if (config.enemyChosenMode) {

           this.game.context.fillText("Choose Enemy!", 100, 100)
        }
    }
    enemiesMove() {
        if(!this.playerTurn && this.enemiesTurn) {
          window.game = this.game
            var counter = 0;
            var m = setInterval(function(){
                var e = this.game.scene.enemies
                if(e[counter-1] && counter != 0 ) {
                    e[counter-1].image.y += 20
                }
                if(e[counter]) {
                    e[counter].turn()
                }
                //run the debuff
                if(e[counter] && e[counter]['debuff'].length) {
                    var d = e[counter]['debuff']
                    e[counter]['debuff'] = e[counter]['debuff'].filter(e => e.duration > 0)

                    for(var i = 0; i< e[counter]['debuff'].length; i++ ) {
                        e[counter]['debuff'][i].target = e[counter]
                        e[counter]['debuff'][i].run()
                    }
                }
                if(e[counter] && !e[counter].moveDone) {
                      e[counter].move()
                }
            counter++;
            if(counter === this.game.scene.enemiesConfig.numLoaded + 1) {
                clearInterval(m);
              }
            }, 500);
            this.enemiesTurn = false

            // TODO: Think a better way to shuffle
            if(this.cardConfig.cardDeckNum <= this.cardConfig.cardDrawNumBegin) {
                this.shuffleCard()
            }
             setTimeout(function(){
               this.game.scene.playerTurn = true
               this.game.scene.drawCard()
             }, 3000)
        }
    }
    enemiesAliveCheck() {
        for (var i = 0; i < this.enemiesConfig.numLoaded; i++) {
            if(this.enemies[i]&&this.enemies[i].hpCurrent <= 0) {
                this.enemies[i].alive = false
            }
        }
        for (var i = 0; i < this.enemiesConfig.numLoaded; i++) {
            if(this.enemies[i]&&!this.enemies[i].alive) {
                delete this.enemies[i]
                this.enemiesConfig.numCurrent --
            }
        }
    }
    grantBuff() {
        var l = this.game.scene.layout
        var buffs = this.game.hero.buff
        var len = Object.keys(buffs).length
        for(var i = 0; i < len; i++) {
            if(!buffs[i].granted) {
                buffs[i].grant()
                buffs[i].granted = true
            }
        }
    }
    playerMove() {
        if(this.playerTurn) {
            this.game.canvas.addEventListener('mouseup',endTurn, false)
            var self = this
            function endTurn(e) {
                var x = e.offsetX
                var y = e.offsetY
                var xt = self.interface.endTurnButton.x
                var yt = self.interface.endTurnButton.y
                var w = self.interface.endTurnButton.image.width
                var h = self.interface.endTurnButton.image.height
                if(chosen(x, y, xt, yt, w, h)){
                    //set all cardHand as casted
                    for (var i = 0; i < self.cardConfig.cardHandMax; i++) {
                        if(self.cardConfig.cardHandSlot[i]){
                            var k = self.cardConfig.cardHandSlot[i]
                            if(self.cardConfig.cardHand[k]) {
                                self.cardConfig.cardHand[k].casted = true
                            }
                        }
                    }

                    self.playerTurn = false
                    for(var i = 0; i < self.enemiesConfig.numLoaded; i++) {
                        if(self.enemies[i]) {
                            self.enemies[i].moveDone = false
                        }
                    }
                    self.enemiesTurn = true
                    self.game.canvas.removeEventListener('mouseup',endTurn, false)
                }
            }
        }
    }
    shuffleCard() {
        this.cardConfig.cardFoldNum = Object.keys(this.cardConfig.cardFold).length
        for (var i = 0; i < this.cardConfig.cardFoldNum; i++) {
            if(this.cardConfig.cardFoldSlot[i]){
                var k = this.cardConfig.cardFoldSlot[i]
                if(this.cardConfig.cardFold[k]) {
                    this.cardConfig.cardFold[k].casted = false
                    this.cardConfig.cardDeck[k] = this.cardConfig.cardFold[k]
                    delete this.cardConfig.cardFoldSlot[i]
                    delete this.cardConfig.cardFold[k]
                        // log("should be undefined", this.cardConfig.cardFold[k])
                }
            }
        }
    }
    cardNumUpdate() {
        this.cardConfig.cardHandNum = Object.keys(this.cardConfig.cardHand).length
        this.cardConfig.cardDeckNum = Object.keys(this.cardConfig.cardDeck).length
        this.cardConfig.cardFoldNum = Object.keys(this.cardConfig.cardFold).length
    }
    cardHandLayoutSet() {

        for (var i = 0; i < this.cardConfig.cardHandMax; i++) {
            var k = this.cardConfig.cardHandSlot[i]
            if(this.cardConfig.cardHand[k]) {
                this.cardConfig.cardHand[k].layoutX = this.layout.cardHand.slotX[i]
                this.cardConfig.cardHand[k].layoutY = this.layout.cardHand.slotY
            }
        }
    }
    cardHandCastedCheck() {
        for (var i = 0; i < this.cardConfig.cardHandMax; i++) {
            if(this.cardConfig.cardHandSlot[i]){
                var k = this.cardConfig.cardHandSlot[i]
                if(this.cardConfig.cardHand[k]&&this.cardConfig.cardHand[k].casted) {
                    //// TODO: move casted card to cardFold
                    this.cardConfig.cardFoldNum = Object.keys(this.cardConfig.cardFold).length
                    var n = this.cardConfig.cardFoldNum
                    this.cardConfig.cardFoldSlot[n] = k
                    this.cardConfig.cardFold[k] = this.cardConfig.cardHand[k]
                    delete this.cardConfig.cardHandSlot[i]
                    delete this.cardConfig.cardHand[k]
                    // log("should be undefined", this.cardConfig.cardHand[k])
                }
            }
        }
    }
}
