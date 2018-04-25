class DebuffDkW extends Debuff {
  constructor(game, level) {
      super(game, level)
      this.game = game
      this.alive = true
      this.name = "Dragon Tail"
      this.nickname = "debuffDkW"
      this.image = this.game.imageByName(this.nickname,0 ,0).image
      this.layoutX = 0
      this.layoutY = 0
      this.target = null
      this.level = level
      this.durationByLevel = [0,2,2,3,3]
      this.damageByLevel = [0,0,0,0,0]
      this.duration = this.durationByLevel[this.level]
      this.damage = this.damageByLevel[this.level]

  }
  static new(game, level) {
      var i = new this(game, level)
      return i
  }
  run () {
      var t = this.target
      t.moveDone = true
      this.duration --
  }
}
