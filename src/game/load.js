//change the path of the game will clear the localstorage
var loadGame = function() {
    var l = localStorage
    var len = Object.keys(localStorage).length - 3
    progress.stage = l.stage
    progress.heroLevel = l.heroLevel
    progress.heroAbility = l.heroAbility

    for(var i = 0; i < len; i++) {
        progress.cardSet[i] = localStorage[i]
    }
    log("Load Done", progressL)
}
