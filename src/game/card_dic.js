//cardNickname to new this card
var cardDic = {
    aAtk: function(game) {
            var obj = Attack.new(game, progress.attack)
            return obj
          },
    dkQ: function(game) {
            var obj = DkQ.new(game, progress.heroQ)
            return obj
          },
    dkW: function(game) {
            var obj = DkW.new(game, progress.heroW)
            return obj
          },
}
