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
        bgY: 'img/bg_yellow.png',
        doneButton: 'img/button/done.png',
        fightButton: 'img/button/fight.png',
        buyButton: 'img/button/buy.png',
        mapButton: 'img/button/map.png',
        shopButton: 'img/button/shop.png',
        upgradeButton: 'img/button/upgrade.png',
        //sceneShop
        healingSalve: 'img/item/healing_salve.png',
        clarity: 'img/item/clarity.png',
        tango: 'img/item/tango.png',
        quellingBlade: 'img/item/quelling_blade.png',
        battleFury: 'img/item/battle_fury.png',
        morbidMask: 'img/item/morbid_mask.png',
        maskOfMadness: 'img/item/mask_of_madness.png',
        javelin: 'img/item/javelin.png',
        skullBasher: 'img/item/skull_basher.png',
        //scene fight
        endTurnButton: 'img/button/end_turn.png',
        //map
        // map:'img/map/map.png',
        // mapTower:'img/map/tower.png',
        dialog: 'img/map/dialog.png',
        s0: 'img/map/s0.png',
        s1: 'img/map/s1.png',
        s2: 'img/map/s2.png',
        s3: 'img/map/s3.png',
        s4: 'img/map/s4.png',
        s5: 'img/map/s5.png',
        s6: 'img/map/s6.png',
        s7: 'img/map/s7.png',
        //dk images
        dk:'img/dk/dk.png',
        dkBg:'img/dk/dk_bg.jpg',
        dkImg:'img/dk/dk_img.png',
        dkQ:'img/dk/dk_q.png',
        dkW:'img/dk/dk_w.png',
        dkE:'img/dk/dk_e.png',
        dkR:'img/dk/dk_r.png',
        debuffDkQ:'img/debuff/debuff_dk_q.png',
        debuffDkW:'img/debuff/debuff_dk_w.png',
        //fv images
        fv:'img/fv/fv.png',
        //fvBg:'img/dk/dk_bg.jpg',
        fvImg:'img/fv/fv_img.png',
        fvQ:'img/fv/fv_q.png',
        fvW:'img/fv/fv_w.png',
        fvE:'img/fv/fv_e.png',
        fvR:'img/fv/fv_r.png',
        //buff
        buffBattleFury: 'img/buff/buff_battle_fury.png',
        buffJavelin: 'img/buff/buff_javelin.png',
        buffMaskOfMadness: 'img/buff/buff_mask_of_madness.png',
        buffMorbidMask: 'img/buff/buff_morbid_mask.png',
        buffQuellingBlade: 'img/buff/buff_quelling_blade.png',
        buffSkullBasher: 'img/buff/buff_skull_basher.png',
        buffDkE: 'img/buff/buff_dk_e.png',
        //enemies
        kobold:'img/enemy/kobold.png',
        koboldSoldier:'img/enemy/kobold_soldier.png',
        koboldForeman:'img/enemy/kobold_foreman.png',
        //card
        aAtk:'img/card/a_atk.png',
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
