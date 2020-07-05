namespace screenMagic {
    /**
     * Plot number on LEDs
     */
    //% blockId=screenMagicPlotAt
    //% block="plot at $index"
    //% index.min=0 index.max=10
    export function plotAt (index: number) {
        index |= 0
        const y = Math.floor(index / 5)
        const x = Math.floor(index % 5)
        led.plot(x, y)
    }
}

