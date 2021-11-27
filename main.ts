pins.digitalWritePin(DigitalPin.P7, 1)
pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P9, 1)
pins.digitalWritePin(DigitalPin.P10, 1)
pins.digitalWritePin(DigitalPin.P11, 1)
pins.digitalWritePin(DigitalPin.P12, 1)
pins.digitalWritePin(DigitalPin.P13, 1)
pins.digitalWritePin(DigitalPin.P14, 1)







let col = 0
let row = 0
let num_times = 0
let playnote = 0
let note_step = 0
let high_c = 0
let c = 0
let num_cols = 5
let num_rows = 5
basic.forever(function () {
    c = 264
    high_c = c * 2
    note_step = 264 / 7
    playnote = c
    num_times = num_cols * num_rows
    row = 0
    for (let index = 0; index < num_times; index++) {
        led.toggle(col, row)
        col = col + 1
        if (col >= num_cols) {
            row = row + 1
            col = 0
        }
        music.playTone(playnote, 1000)
        playnote = playnote + note_step
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
