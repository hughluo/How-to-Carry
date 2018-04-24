//change the path of the game will clear the localstorage
var saveGame = function () {
    localStorage.clear()
    localStorage.setItem("stage", progress.stage)
    localStorage.setItem("heroLevel", progress.heroLevel)
    localStorage.setItem("heroAbility", progress.heroAbility)
    var l = Object.keys(progress.cardSet).length
    for (var i = 0; i < l; i++) {
    localStorage.setItem(`${i}`, progress.cardSet[i])
    log("Save Done", localStorage)
    }
}
