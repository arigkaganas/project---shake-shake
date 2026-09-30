input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    pins.analogWritePin(AnalogPin.P14, 0)
})
input.onGesture(Gesture.Shake, function () {
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
})
