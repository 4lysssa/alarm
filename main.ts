input.onButtonPressed(Button.A, function () {
    basic.showNumber(count)
})
input.onGesture(Gesture.FreeFall, function () {
    count += 1
    for (let index = 0; index < 10; index++) {
        music.playMelody("C C C D G B B B ", 500)
    }
})
input.onButtonPressed(Button.B, function () {
    count += count - count
})
let count = 0
basic.showIcon(IconNames.SmallDiamond)
count = 0
basic.forever(function () {
	
})
