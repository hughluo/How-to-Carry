class SceneTitle extends Scene {
    constructor(game) {
        super(game)
        this.name = "title"
        //elements to draw
        this.elements = []
        this.game = game
        this.fvX = 550
        this.fvY = 400
        this.dkX = 550
        this.dkY = 565
        this.setup(game)

    }

    setup(game) {
        progress.game = this.game
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
        }
        this.game.canvas.addEventListener('mouseup',selectHero, false)
        //Choose
        function selectHero(e) {
            var x = e.offsetX
            var y = e.offsetY
            if(chosen(x, y, 550, 565, 256, 144)){
                var hero = DragonKnight.new(game)
                game.hero = hero
                // var s = SceneMap.new(game, hero)
                var s = SceneUpgrade.new(game)
                game.replaceScene(s)
                this.removeEventListener('mouseup', selectHero, false)
            }
            else if (chosen(x, y, 550, 400, 256, 144)){
                var hero = FacelessVoid.new(game)
                game.hero = hero
                var s = SceneMap.new(game, hero)
                game.replaceScene(s)
                this.removeEventListener('mouseup', selectHero, false)
            }
        }
        // this.game.canvas.removeEventListener('mouseup',selectHero, false)

        // this.game.canvas.addEventListener('mouseup', this.game.selectHero(this.event), false)

        this.elements.push(this.game.imageByName("title", 0, 0))
        this.elements.push(this.game.imageByName("fv", this.fvX, this.fvY))
        this.elements.push(this.game.imageByName("dk", this.dkX, this.dkY))
    }
    draw() {
        // this.game.context.fillRect(0,0,800,450)
        // this.game.context.drawImage(this.game.images.title, 0, 0)
        // this.game.context.drawImage(this.game.images.dk, this.dkX, this.dkY)
    }
}
