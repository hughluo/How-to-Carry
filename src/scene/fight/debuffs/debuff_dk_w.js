class DebuffDkW extends Debuff {
  constructor(game, target, level) {
      super(game)
      this.game = game
      this.alive = true
      this.name = "Dragon Tail"
      this.nickname = "debuffDkW"
      this.image = null
      this.target = target
      this.level = level
      this.durationByLevel = [0,2,2,3,3]
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
      t.moveDone = true
      this.duration --
  }
}
