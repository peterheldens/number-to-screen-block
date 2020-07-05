// tests go here; this will not be compiled when this package is used as an extension.
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 24; index++) {
        screenMagic.plotAt(index)
        basic.pause(500)
    }
})
