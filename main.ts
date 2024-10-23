input.onButtonPressed(Button.A, function () {
    entmode = 1
    basic.showString("A")
})
function mot () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, speedacc)
    SuperBit.MotorRun(SuperBit.enMotors.M3, speedacc)
    speedacc += 5
    if (speedacc >= 150) {
        speedacc = 85
    }
    lspeed = speedacc
    rspeed = speedacc
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x = huskylens.readeBox(1, Content1.xCenter)
        y = huskylens.readeBox(1, Content1.yCenter)
        if (x > 90 && x < 180) {
            rspeed += 5
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . .
                . . . . .
                . . . . .
                `)
        } else if (x > 0 && x < 90) {
            rspeed += 10
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
        } else if (x > 180 && x < 360) {
            lspeed += 10
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
                `)
        } else {
            lspeed += 5
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . . . . .
                . . . . .
                `)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    entmode = 3
    basic.showString("C")
})
function sif () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x = huskylens.readeBox(1, Content1.xCenter)
        y = huskylens.readeBox(1, Content1.yCenter)
        if (x > 90 && x < 180) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . .
                . . . . .
                . . . . .
                `)
        } else if (x > 0 && x < 90) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
        } else if (x > 180 && x < 360) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.B, function () {
    entmode = 2
    basic.showString("B")
})
function siz () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x = huskylens.readeBox(1, Content1.xCenter)
        y = huskylens.readeBox(1, Content1.yCenter)
        obj_height = huskylens.readeBox(1, Content1.width)
        obj_width = huskylens.readeBox(1, Content1.height)
        huskylens.writeOSD(convertToText(x), 35, 30)
        huskylens.writeOSD(convertToText(y), 150, 30)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
        SuperBit.RGB_Program().show()
        if (obj_width <= 45 && obj_width > 22) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . .
                . # # . .
                . . . . .
                `)
        } else if (obj_width < 90 && obj_width > 45) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (obj_width < 180 && obj_width > 90) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showIcon(IconNames.Confused)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    }
}
let obj_width = 0
let obj_height = 0
let y = 0
let x = 0
let entmode = 0
let rspeed = 0
let lspeed = 0
let speedacc = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
SuperBit.RGB_Program().setBrightness(120)
basic.showIcon(IconNames.Yes)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
SuperBit.RGB_Program().show()
let rootval = 50
speedacc = rootval
lspeed = rootval
rspeed = rootval
basic.forever(function () {
    while (entmode == 1) {
        siz()
    }
    while (entmode == 2) {
        sif()
    }
    while (entmode == 3) {
        mot()
    }
})
