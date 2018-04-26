class Item {
  constructor(game) {
      this.setup(game)
      this.name = "Item"
      this.nickname = "item"
      this.price = 0
      this.active = false
  }
  static new(game) {
      var i = new this(game)
      return i
  }
  setup(game) {

  }


}
