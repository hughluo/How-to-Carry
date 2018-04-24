class SceneMap extends Scene {
    constructor(game, hero) {
        super(game)
        this.name = "map"
        //elements to draw
        this.elements = []
        this.game = game
        this.hero = hero
        this.setup(game)
        this.enemiesObj = {}
        this.game.map = this.game.imageByName('map', 0, this.game.canvas.height - this.game.images.map.height)


    }
    static new(game, hero) {
        var i = new this(game, hero)
        return i
    }

    addEnemyToObj() {
        for (var i = 0; i < arguments.length; i++) {
          this.enemiesObj[i] = arguments[i]
        }
    }
    setup(game) {
        this.game.registerContAction('w', function(){
            game.map.y += 20
            if(game.map.y > 0) {
                game.map.y = 0
            }
        })
        this.game.registerContAction('s', function(){
            game.map.y -= 20
            if(game.map.y < game.canvas.height - game.images.map.height) {
                game.map.y = game.canvas.height - game.images.map.height
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
            if(game.map.x < game.canvas.width - game.images.map.width) {
                game.map.x = game.canvas.width - game.images.map.width
            }
        })

        this.game.canvas.addEventListener('mouseup',selectStage, false)

        function selectStage(e) {
            var x = e.offsetX
            var y = e.offsetY
            if(chosen(x, y, 500, 300, 128, 128)){

                //small camp random
                var enemiesCamp = randomChooseAmong("koboldCamp")
                switch(enemiesCamp) {
                    case"koboldCamp":
                    var k1 = Kobold.new(game)
                    var k2 = Kobold.new(game)
                    var k3 = Kobold.new(game)
                    var kS = KoboldSoldier.new(game)
                    var kF = KoboldForeman.new(game)
                    game.scene.addEnemyToObj(k1, k2, k3, kS, kF)
                    break
                }
                //clear all key setting before change to the next scene
                game.clearRegisterAction()
                game.clearRegisterContAction()
                var s = SceneFight.new(game, game.hero, game.scene.enemiesObj)
                game.replaceScene(s)
                this.removeEventListener('mouseup',selectStage, false)

            }
        }
        //TODO: find some image and draw as stage icon
        this.elements.push(this.game.imageByName("mapTower", 500, 300))

    }
    draw() {
    }

    update() {
    }
}
