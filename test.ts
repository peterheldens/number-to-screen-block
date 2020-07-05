// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 24; index++) {
        screenMagic.plotAt(index)
        basic.pause(500)
    }
})

input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 500; index++) {
        screenMagic.plotMeter(index, 1)
        basic.pause(500)
    }
})

let m = 0
let dm = 0
let cm = 0
basic.clearScreen()
for (let mm = 0; mm <= 5000; mm++) {
    cm = convert(mm)
    dm = convert_mm2dm(mm)
    m = convert_mm2m(mm)
    plot(cm - 1, 3)
    plot(dm - 1, 1)
    plot(m - 1, 0)
}