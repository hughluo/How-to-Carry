var loadLevel = function(n) {
    var level = levels[n]
    var enemies = []
    for (var i = 0; i < level.length; i++) {
        var l = level[i]
        var e = new Enemy(l)
        enemies.push(e)
    }
    return enemies
}

// var enableDebugMode = function(game, enable) {
//     if(!enable) {
//         return
//     }
//     window.paused = false
//     window.addEventListener('keydown', function(event){
//         var k = event.key
//         if (k == 'p') {
//             // 暂停功能
//             window.paused = !window.paused
//     })
    // 控制速度
    // document.querySelector('#id-input-speed').addEventListener('input', function(event) {
    //     var input = event.target
    //     // log(event, input.value)
    //     window.fps = Number(input.value)
    // })
// }

var __main = function() {

    var images = {
        //images should not be null, otherwise it wont start running
        title: 'img/title.png',
        //scene fight
        endTurnButton: 'img/button/end_turn.png',
        //map
        map:'img/map/map.png',
        mapTower:'img/map/tower.png',
        //dk images
        dk:'img/dk/dk.png',
        dkBg:'img/dk/dk_bg.jpg',
        dkImg:'img/dk/dk_img.png',
        dkQ:'img/dk/dk_q.png',
        dkW:'img/dk/dk_w.png',
        dkE:'img/dk/dk_e.png',
        dkR:'img/dk/dk_r.png',
        //fv images
        fv:'img/fv/fv.png',
        //fvBg:'img/dk/dk_bg.jpg',
        fvImg:'img/fv/fv_img.png',
        fvQ:'img/fv/fv_q.png',
        fvW:'img/fv/fv_w.png',
        fvE:'img/fv/fv_e.png',
        fvR:'img/fv/fv_r.png',
        //buff
        bTimelock:'img/buff/b_timelock.png',
        bEnvenomedWeapon:'img/buff/b_envenomed_weapon.png',
        //enemies
        kobold:'img/enemies/kobold.png',
        koboldSoldier:'img/enemies/kobold_soldier.png',
        koboldForeman:'img/enemies/kobold_foreman.png',
        //card
        aAtk:'img/cards/a_atk.png'
    }

    var game = Game.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
        // var hero = Hero.new(g, "dragonKnight")
        // log(hero)
        // log(game)
    })



    // enableDebugMode(game, true)
}

__main()
