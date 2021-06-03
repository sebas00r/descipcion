let Quantity_water = 0
let value_dice = 0
// to create the simulation
input.onButtonPressed(Button.A, function () {
    Quantity_water = 0
    for (let index = 0; index < 30; index++) {
        Quantity_water += 1
    }
    basic.showNumber(Quantity_water)
})
basic.forever(function () {
    // Give the condition to develop the action.
    if (input.isGesture(Gesture.Shake)) {
        value_dice = randint(1, 6)
        basic.showNumber(value_dice)
    }
})
