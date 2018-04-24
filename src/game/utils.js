var log = console.log.bind(console)

var randomBetween = function(startNum, endNum) {
    var randomNum = Math.floor(Math.random() *
      (endNum - startNum + 1) + startNum)
    return randomNum
}
var randomAmong = function(array) {
    var r = randomBetween(0, array.length - 1)
    return array[r]
}
var randomChooseAmong =  function() {
    return arguments[randomBetween(0, arguments.length-1)]
}

var chosen = function(x, y, imgX, imgY, imgWidth, imgHeigt) {
    if(y > imgY  && y < imgY + imgHeigt && x > imgX && x < imgX + imgWidth) {
        return true
    }
    else{
        return false
    }
}
var getKeyByValue = function(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
var utilsCheck = function() {
    log ("Nice! Utils checked!")
}
