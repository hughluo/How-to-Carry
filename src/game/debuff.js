class Debuff {
  constructor(game, level) {
      this.game = game
      this.alive = true
      this.name = ""
      this.nickname = ""
      this.image = this.game.imageByName(this.nickname,0 ,0).image
      this.target = null
      this.level = level
      this.durationByLevel = [0,0,0,0,0]
      this.damageByLevel = [0,0,0,0,0]
      this.duration = this.durationByLevel[this.level]
      this.damage = this.damageByLevel[this.level]

  }
  static new(game, level) {
      var i = new this(game, level)
      return i
  }
  run () {
      t = this.target
      t.hpCurrent -= this.damage
      this.duration --
  }
}
