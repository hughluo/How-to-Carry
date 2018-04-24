class Debuff {
  constructor(game, target, level) {
      this.game = game
      this.alive = true
      this.name = ""
      this.nickname = ""
      this.image = null
      this.target = target
      this.level = level
      this.durationByLevel = [0,0,0,0,0]
      this.damageByLevel = [0,0,0,0,0]
      this.duration = this.durationByLevel[this.level]
      this.damage = this.damageByLevel[this.level]

  }
  static new(game, target, level) {
      var i = new this(game, target, level)
      return i
  }
  run () {
      t = this.target
      t.hpCurrent -= this.damage
      this.duration --
  }
}
