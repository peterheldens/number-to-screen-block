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
    /**
     * Plot meters on row 0, dm on row 2,3, cn on row 4,5
     */
    //% bl
    //% blockId=screenMagicPlotMeter
    //% block="plot at $number $row"
    //% index.min=0 index.max=10
    export function plotMeter (num: number, row: number) {
        for (let col = 0; col <= 10; col++) {
            if (col <= num) {
                led.plot(col % 5, row + Math.idiv(col, 5))
            } else {
                led.unplot(col % 5, row + Math.idiv(col, 5))
            }
        }
    }
}

