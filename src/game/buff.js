class Buff {
  constructor(game) {
      this.game = game

  }
  static new(game) {
      var i = new this(game)
      return i
  }
}
