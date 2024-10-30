function mot () {
    huskylens.request()
    SuperBit.MotorRun(SuperBit.enMotors.M3, speedacc)
    SuperBit.MotorRun(SuperBit.enMotors.M1, speedacc)
    basic.pause(500)
    speedacc = speedacc - 30
    speedacc = speedacc - 30
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x = huskylens.readeBox(1, Content1.xCenter)
        y = huskylens.readeBox(1, Content1.yCenter)
        if (x > 0 && x < 180) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, speedacc + 42)
            SuperBit.MotorRun(SuperBit.enMotors.M3, speedacc)
        } else if (x > 181 && x < 360) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, speedacc)
            SuperBit.MotorRun(SuperBit.enMotors.M3, speedacc + 42)
        } else if (x > 170 && x < 190) {
            rspeed += 3
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, speedacc - 42)
            SuperBit.MotorRun(SuperBit.enMotors.M3, speedacc - 42)
        } else if (x > 270 && x < 360) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, 24)
            SuperBit.MotorRun(SuperBit.enMotors.M3, 24)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                SuperBit.MotorRunDual(
                SuperBit.enMotors.M1,
                0,
                SuperBit.enMotors.M3,
                0
                )
            }
        }
    }
}
function inc_speed () {
    speedacc += 1
    if (speedacc >= 99) {
        speedacc = 35
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("C ... C")
    entmode = 3
    while (entmode == 3) {
        mot()
    }
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
        } else if (x > 45 && x < 90) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
        } else if (x > 5 && x < 45) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
        } else if (x > 285 && x < 360) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
        } else if (x > 285 && x < 300) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
                `)
        } else if (x > 220 && x < 285) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # .
                . . . . .
                . . . . .
                `)
        } else if (x > 180 && x < 220) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . . . . .
                . . . . .
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
    }
}
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
                . . # . .
                . # # # .
                . . # . .
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
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
        if (input.buttonIsPressed(Button.B)) {
            entmode = 2
            while (entmode == 2) {
                sif()
            }
        }
    } else {
        basic.showIcon(IconNames.Angry)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    }
}
let obj_width = 0
let obj_height = 0
let y = 0
let x = 0
let speedacc = 0
let entmode = 0
entmode = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
SuperBit.RGB_Program().setBrightness(120)
basic.showIcon(IconNames.Yes)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
SuperBit.RGB_Program().show()
let rootval = 80
speedacc = rootval
let lspeed = rootval
let rspeed = rootval
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A+A")
            entmode = 1
            while (entmode == 1) {
                siz()
            }
        }
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("B+B")
            entmode = 2
            while (entmode == 2) {
                sif()
            }
        }
    } else {
        basic.showString(":)")
    }
})
