input.onButtonPressed(Button.A, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (5 + 2))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(2000)
    basic.showString("My Name is Abdul Rauf")
    basic.showIcon(IconNames.StickFigure)
})
