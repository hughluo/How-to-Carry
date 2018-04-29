class Game {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.name = "game"
        this.images = images
        this.money = 6000
        this.cardSet = {}
        this.runCallback = runCallback
        //
        this.scene = null
        this.actions = {}
        this.oneKeyPressUp = {}
        this.oneKeyPressDown = {}
        this.contActions = {}
        this.oneKeyContDowns = {}
        //canvas setting
        this.canvas = document.querySelector('#myCanvas')
        this.context = this.canvas.getContext('2d')
        this.context.font="30px Verdana"
        this.context.fillStyle="black"
        // events
        var self = this
        window.addEventListener('keydown', event => {
            this.oneKeyPressDown[event.key] = true
            this.oneKeyContDowns[event.key] = true
        })
        window.addEventListener('keyup', function(event){
            self.oneKeyPressUp[event.key] = true
            self.oneKeyContDowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    runloop() {
        // events
        var self = this
        var actions = Object.keys(this.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(this.oneKeyPressUp[key] && this.oneKeyPressDown[key]) {
                // 如果按键被按下, 调用注册的 action

                this.oneKeyPressUp[key] = false
                this.oneKeyPressDown[key] = false
                this.actions[key]()
            }
        }
        var self = this
        var contActions = Object.keys(this.contActions)
        for (var i = 0; i < contActions.length; i++) {
            var key = contActions[i]
            if(this.oneKeyContDowns[key]) {
                // 如果按键被按下, 调用注册的 action
                this.contActions[key]()
                this.oneKeyContDowns[key] = false
            }
        }
        // update
        this.update()
        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // draw
        this.draw()
        //  action
        this.action()
        // next run loop
        setTimeout(function(){
            self.runloop()
        }, 1000/window.fps)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }
    registerContAction(key, callback) {
        this.contActions[key] = callback
    }
    clearRegisterAction() {
      this.actions = {}
      this.oneKeyPressUp = {}
      this.oneKeyPressDown = {}
    }
    clearRegisterContAction() {
      this.contActions = {}
      this.oneKeyContDowns = {}
    }
    // update
    update() {
        this.scene.update()
        // if(config.confirmMode = true) {
        //     this.game.registerAction('y', function(){
        //         config.confirmed = true
        //         //do sth.
        //     })
        //     this.game.registerAction('n', function(){
        //         config.confirmed = false
        //         //reselect
        //     })
        // }
    }
    // draw
    draw() {
      if(this.scene.name == "map") {
          this.context.drawImage(this.map.image, this.map.x, this.map.y)

      }
        var e = this.scene.elements
        for(var i = 0; i < e.length; i++) {
            this.context.drawImage(e[i].image, e[i].x, e[i].y)
        }

        if(this.scene.interface) {
            var f = Object.values(this.scene.interface)
            for (var i = 0; i< f.length; i++ ) {
                    this.context.drawImage(f[i].image, f[i].x, f[i].y)
            }
        }


        this.scene.draw()
    }
    // action
    action() {
        if(this.scene.playerTurn) {
            this.scene.action()
        }

    }


    imageByName(name, initX, initY) {
        // log('image by name', this.images)
        var img = this.images[name]
        var i = {
            image: img,
            x: initX,
            y: initY,
        }
        return i
    }

    //Scene
    __start(scene) {
        this.runCallback(this)
    }
    runWithScene(scene) {
        var self = this
        this.scene = scene
        // 开始运行程序
        setTimeout(function(){
            self.runloop()
        }, 1000/window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
        // log("it's", this.scene)
    }
    init() {
        var self = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(this.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = this.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                self.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                // log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    // log('load images done', self.images.dk)
                    self.__start()

                }
            }
        }
    }
}
