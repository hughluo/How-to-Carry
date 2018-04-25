class DebuffDkQ extends Debuff {
  constructor(game, target, level) {
      super(game)
      this.game = game
      this.alive = true
      this.name = "Dragon Breathe"
      this.nickname = "debuffDkQ"
      this.target = target
      this.level = level
      this.durationByLevel = [0,1,1,1,1]
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
      t.atk = Math.floor(t.atk * 0.65)
      this.duration --
  }
}
