input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "right") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "left") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
basic.forever(function () {
	
})
