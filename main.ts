let storedDice3 = 0
let Dice3 = 0
let storedDice1 = 0
let Dice1 = 0
let storedDice5 = 0
let Dice5 = 0
let storedDice2 = 0
let Dice2 = 0
let storedDice4 = 0
let Dice4 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    storedDice3 = Dice3
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    storedDice1 = Dice1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Yes)
    storedDice5 = Dice5
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    storedDice2 = Dice2
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    storedDice4 = Dice4
})
input.onGesture(Gesture.Shake, function () {
    Dice1 = randint(1, 6)
    Dice2 = randint(1, 6)
    Dice3 = randint(1, 6)
    Dice4 = randint(1, 6)
    Dice5 = randint(1, 6)
})
basic.forever(function () {
    basic.showString("Dice1")
    basic.showNumber(storedDice1)
    basic.showString("Dice2")
    basic.showNumber(storedDice2)
    basic.showString("Dice3")
    basic.showNumber(storedDice3)
    basic.showString("Dice4")
    basic.showNumber(storedDice4)
    basic.showString("Dice5")
    basic.showNumber(storedDice5)
})
