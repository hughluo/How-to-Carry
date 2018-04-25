class FacelessVoid extends Hero {
    constructor(game) {
        super(game)
        this.name = "Facesless Void"
        this.nickname = "fv"
        this.level = 1
        this.img = null
        this.alive = true
        this.atk = 6
        this.hpCurrent = 0
        this.hpMax = 61
        this.hpRegen = 2
        this.mpCurrent = 0
        this.mpMax = 26
        this.mpRegen = 1
        //abilities
        this.abilityQ = {
            name: "Time Walk",
            nickname: "fvQ",
            image: this.game.imageByName("fvQ",0 ,0),
            level: 0,
            active: true,
            affect: "Self",
            target: 1,
            duration: 0,
            manaCost: [4, 4, 4, 4],
            dmg: 0,
        }
        this.abilityW = {
            name: "Time Dilation",
            nickname: "fvW",
            image: this.game.imageByName("fvW",0 ,0),
            level: 0,
            active: true,
            affect: "Enemy",
            target: 5,
            duration: 0,
            manaCost: [8, 8, 8, 8],
            dmg: 0,
        }
        this.abilityE = {
            name: "Time Lock",
            nickname: "fvE",
            image: this.game.imageByName("fvE",0 ,0),
            level: 0,
            active: false,
            affect: "Enemy",
            target: 1,
            duration: 0,
            manaCost: [0, 0, 0, 0],
            dmg: [5, 8, 10, 13],
        }
        this.abilityR = {
            name: "Chronosphere",
            nickname: "fvR",
            image: this.game.imageByName("fvR",0 ,0),
            level: 0,
            active: true,
            affect: "Enemy",
            target: 5,
            duration: [1, 2, 3],
            manaCost: [15, 23, 30],
            dmg: [0, 0, 0],
        }
        this.setup(game)
    }

    setup(game) {

    }

}
