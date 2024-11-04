radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        35,
        SuperBit.enMotors.M3,
        35
        )
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        30,
        SuperBit.enMotors.M3,
        35
        )
    } else if (receivedNumber == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        35,
        SuperBit.enMotors.M3,
        30
        )
    } else if (receivedNumber == 7) {
        cal()
    } else if (receivedNumber == 3) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -35,
        SuperBit.enMotors.M3,
        -35
        )
    } else {
        basic.showLeds(`
            # # # . .
            # . # . .
            # # . . .
            # . # . .
            # . . # .
            `)
    }
})
function line () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
    if (entmode == 4) {
        huskylens.request()
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
            arrow = huskylens.readArrow_s(Content4.ID)
            if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
                x1 = huskylens.readeArrow(1, Content2.xOrigin)
                y1 = huskylens.readeArrow(1, Content2.yOrigin)
                x2 = huskylens.readeArrow(1, Content2.xTarget)
                y2 = huskylens.readeArrow(1, Content2.yTarget)
                if (x1 > x2 && y1 > y2) {
                    SuperBit.MotorRunDual(
                    SuperBit.enMotors.M1,
                    90,
                    SuperBit.enMotors.M3,
                    78
                    )
                    basic.showLeds(`
                        # # # . .
                        # # . . .
                        # . # . .
                        . . . # .
                        . . . . #
                        `)
                } else if (x1 <= x2 && y1 <= y2) {
                    SuperBit.MotorRunDual(
                    SuperBit.enMotors.M1,
                    78,
                    SuperBit.enMotors.M3,
                    90
                    )
                    basic.showLeds(`
                        . . # # #
                        . . . # #
                        . . # . #
                        . # . . .
                        # . . . .
                        `)
                } else {
                    SuperBit.MotorRunDual(
                    SuperBit.enMotors.M1,
                    80,
                    SuperBit.enMotors.M3,
                    80
                    )
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
                        `)
                }
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    SuperBit.MotorStopAll()
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # . # #
        # # # # #
        # . . . #
        `)
})
function qcode () {
    huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
}
function mot () {
    huskylens.request()
    SuperBit.MotorRun(SuperBit.enMotors.M3, speedacc)
    SuperBit.MotorRun(SuperBit.enMotors.M1, speedacc)
    basic.pause(1000)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 55)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 55)
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x = huskylens.readeBox(1, Content1.xCenter)
        y = huskylens.readeBox(1, Content1.yCenter)
        obj_width = huskylens.readeBox(1, Content1.width)
        obj_height = huskylens.readeBox(1, Content1.xCenter)
        if (x > 0 && x < 180) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, 55)
            SuperBit.MotorRun(SuperBit.enMotors.M3, 45)
        } else if (x > 181 && x < 360) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, 45)
            SuperBit.MotorRun(SuperBit.enMotors.M3, 55)
        } else if (x > 170 && x < 190) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, 45)
            SuperBit.MotorRun(SuperBit.enMotors.M3, 45)
        } else if (128 < huskylens.readeBox(1, Content1.width)) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
            SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
        } else {
            basic.showIcon(IconNames.Cow)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("C ... C")
    entmode = 3
    mot()
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
input.onButtonPressed(Button.B, function () {
    entmode = 4
    basic.showLeds(`
        # # . . .
        # . # . .
        # # # # .
        # . . # .
        # # # . .
        `)
})
function cal () {
    if (receivedNumber == 7) {
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
        } else if (entmode == 3) {
            basic.showString("C ... C")
            entmode = 3
            basic.clearScreen()
            while (entmode == 3) {
                mot()
            }
        } else if (entmode == 4) {
            entmode = 4
            while (entmode == 4) {
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # # # # .
                    # . . # .
                    # # # . .
                    `)
            }
        } else {
            basic.showIcon(IconNames.Asleep)
            SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
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
let obj_height = 0
let obj_width = 0
let y = 0
let x = 0
let y2 = 0
let x2 = 0
let y1 = 0
let x1 = 0
let arrow = 0
let speedacc = 0
let entmode = 0
radio.setGroup(13)
basic.showIcon(IconNames.Giraffe)
let range = SuperBit.RGB_Program().range(0, 3)
SuperBit.RGB_Program().showRainbow(1, 360)
SuperBit.RGB_Program().show()
entmode = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
SuperBit.RGB_Program().setBrightness(120)
SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
SuperBit.RGB_Program().show()
speedacc = 137
basic.forever(function () {
	
})
