class SceneUpgrade extends Scene {
    constructor(game) {
        super(game)
        this.name = "upgrade"
        this.upgradeDone = false
        //elements to draw
        this.elements = []
        this.game = game
        this.setup(game)

    }
    setup(game) {
        switch(this.game.hero.level) {
            case 1:// first level, // TODO:lead to scene shop
                this.elements.push(this.game.imageByName(this.hero.nickname+"Q", 500, 100))
                this.elements.push(this.game.imageByName(this.hero.nickname+"W", 500, 300))
                this.elements.push(this.game.imageByName(this.hero.nickname+"E", 500, 500))
                // TODO:

                break
        }
        this.game.canvas.addEventListener('mouseup',selectUpgrade, false)
        //Choose
        function selectUpgrade(e) {
            var x = e.offsetX
            var y = e.offsetY
            if(chosen(x, y, 500, 100, 128, 128)){
                this.removeEventListener('mouseup', selectUpgrade, false)
            //ability level up
            //deck upgrade
            //jumpt to scene shop
            }
            else if (chosen(x, y, 500, 300, 128, 128)){
                this.removeEventListener('mouseup', selectUpgrade, false)
            }
            else if (chosen(x, y, 500, 500, 128, 128)){
                this.removeEventListener('mouseup', selectUpgrade, false)
            }
        }

        this.elements.push(this.game.imageByName("title", 0, 0))
        this.elements.push(this.game.imageByName("fv", this.fvX, this.fvY))
        this.elements.push(this.game.imageByName("dk", this.dkX, this.dkY))
    }
    draw() {
        if(!this.upgradeDone){
            this.game.context.fillText("Choose One Thing to Upgrade", 0, 0)
        // this.game.context.fillRect(0,0,800,450)
        // this.game.context.drawImage(this.game.images.title, 0, 0)
        // this.game.context.drawImage(this.game.images.dk, this.dkX, this.dkY)
        }

    }

    update() {



        }
}
