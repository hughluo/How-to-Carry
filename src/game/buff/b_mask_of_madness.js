class IMaskOfMadness extends Item {
  constructor(game) {
      super(game)
      this.game = game
      this.name = "Mask Of Madness"
      this.nickname = "maskOfMadness"
      this.price = 1975
      this.available = !progress[this.nickname]
      this.hasCard = true
  }
  enable() {
      if(!progress[this.nickname]) {
          progress[this.nickname] = true
          var b = BMaskOfMadness.new(this.game)
          var len = Object.keys(this.game.hero.buff).length
          this.game.hero.buff[len] = b
      }
  }
}
