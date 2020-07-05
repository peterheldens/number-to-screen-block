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

input.onButtonPressed(Button.AB, function () {
    let m = 0
    let dm = 0
    let cm = 0
    basic.clearScreen()
    for (let mm = 0; mm <= 5000; mm++) {
        cm = screenMagic.convertMMtoCM(mm)
        dm = screenMagic.convertMMtoDM(mm)
        m = screenMagic.convertMMtoCM(mm)
        screenMagic.plotMeter(cm - 1, 3)
        screenMagic.plotMeter(dm - 1, 1)
        screenMagic.plotMeter(m - 1, 0)
    }
})