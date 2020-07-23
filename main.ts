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
    //% blockId=screenMagicPlotMeter
    //% block="plotMeter $num $row"
    export function plotMeter (num: number, row: number) {
        for (let col = 0; col <= 10; col++) {
            if (col <= num) {
                led.plot(col % 5, row + Math.idiv(col, 5))
            } else {
                led.unplot(col % 5, row + Math.idiv(col, 5))
            }
        }
    }

    /**
     * Convert mm to metric
     */
    //% block
    export function metric (x: number) : string {
        return (screenMagic.meter(x).toString() + "m" 
        + screenMagic.decimeter(x).toString() + "dm" 
        + screenMagic.centimeter(x).toString() + "cm"
        + screenMagic.milimeter(x).toString() + "mm")
    }
       /**
     * Convert mm to mm
     */
    //% block
    export function milimeter (x: number) : number {
        return Math.idiv(x, 1) % 10
    }
    /**
     * Convert mm to cm
     */
    //% block
    export function centimeter (x: number) : number {
        return Math.idiv(x, 10) % 10
    }
    /**
     * convert mm to m
     */
    //% block
    export function meter (x: number) : number {
        return Math.idiv(x, 1000) % 10
    }
    /**
     * convert mm to dm
     */
    //% block
    export function decimeter (x: number) : number {
        return Math.idiv(x, 100) % 10
    }
}

