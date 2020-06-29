let Blauanteil = 0
let Grünanteil = 0
let Rotanteil = 0
let strip = neopixel.create(DigitalPin.P2, 256, NeoPixelMode.RGB)
strip.setBrightness(64)
for (let Index = 0; Index <= 255; Index++) {
    Rotanteil = randint(0, 255)
    Grünanteil = randint(0, 255)
    Blauanteil = randint(0, 255)
    strip.setPixelColor(Index, neopixel.rgb(Rotanteil, Grünanteil, Blauanteil))
    strip.show()
    basic.pause(20)
}
basic.pause(5000)
strip.clearMatrix()
