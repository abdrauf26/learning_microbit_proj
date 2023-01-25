let math_equation = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    math_equation = 2 + 3
    basic.showNumber(math_equation)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(1000)
    basic.showString("I am happy learning !")
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showString("This is cool !")
})
