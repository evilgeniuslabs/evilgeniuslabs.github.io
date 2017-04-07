---
layout: post
title: FastLED RGB & HSV Tutorial
id: fastled-rgb-hsv-tutorial
excerpt: Tutorial project to build an interactive and educational circuit board that teaches soldering, basic Arduino programming, and basic FastLED concepts.
---

### Background

I'm preparing to exhibit at Maker Faire Kansas City 2017, and trying to come up with an interactive and educational project for people to play with.

With what I have on hand, I quickly threw together a couple of breadboards, each with a Teensy, some RGB LEDs, and three potentiometers (using Paul Stoffregen's excellent [Sturdy Potentiometer Adapter for Breadboards](https://oshpark.com/shared_projects/P38N77nS)).

<img src="/images/fastled-rgb-hsv-tutorial/breadboard.jpg" style="width:400px" class="img-responsive" />

I created two simple Arduino sketches, one to show how Red, Green, and Blue combine to create different colors:

* [FastLED RGB Dials](https://gist.github.com/jasoncoon/a8aa39cb9af44d64b84b801c26073d34)
* [FastLED HSV Dials](https://gist.github.com/jasoncoon/1485c25fdd0b36ca7fcb3586af305f87)

While this would work, it's not very durable.  I need something that lots of people can tinker and play with all weekend, without worrying about replacing disconnected wires.

So, I set out to design a PCB that I can assemble ahead of time, and will hopefully be durable enough to last all weekend.  It will also have the bonus of being a tutorial project I can use in classes, workshops, and share online.

### Project Requirements

* **Educational:**  I'd like people to learn something while tinkering with it.
* **Durable:**  It will need to take a lot of abuse.
* **Exposed:**  This might conflict with durability, but I don't really want it hidden away in a box.  I'd like the guts to be visible.
* **Open source and hardware:**  I'd like to share this as freely and widely as possible.
* **Inexpensive:**  Ideally $30 or less, so that people can afford to actually build them.
* **Quality:**  May conflict with inexpensive, but there's no point building these cheaply if they don't last.
* **Accessible:**  Easy to assemble, but so easy that nothing is learned by bulding one.  All components need to be through-hole.  No surface mount soldering, reflow oven, etc should be required.

With these goals in mind, I created this PCB.

### Printed Circuit Board

<img src="/images/fastled-rgb-hsv-tutorial/pcb-top.png" style="width:400px" class="img-responsive" />

<img src="/images/fastled-rgb-hsv-tutorial/pcb-bottom.png" style="width:400px" class="img-responsive" />

It's shared, but currently **completely untested**, on [OSH Park](https://oshpark.com/shared_projects/0S10dNB4).

I'll update once it is tested working.

Here are the Eagle files ([schematic](/images/fastled-rgb-hsv-tutorial/FastLED RGB & HSV Tutorial.sch) & [board](/images/fastled-rgb-hsv-tutorial/FastLED RGB & HSV Tutorial.brd))

The switch will change the potentiometers from controlling RGB to HSV.  The PCB includes the NeoPixel "best practices" capacitor and resistor, and pins to connect more LEDs (a strip, ring, etc).  The tactile momentary push button could be used to change modes, from the tutorial to patterns, animations, etc.

I used 5mm NeoPixels.  They are a bit cheaper and should be easier to solder than the breadboard-friendly NeoPixels, which would require headers to be soldered.

The mounting holes from the Pro Trinket outline will allow the PCBs to be mounted on a board, so they don't fall off the table or "walk away".

### Revisions

**v1.1**
* Added tactile momentary push button with pull down resistor.
* Added some part and pin details to the bottom of the board.
* Fixed inconsistent LED spacing.
* Various other slight layout changes.
* Thanks to Marc Miller for the suggestions!

### Parts List

| Name | Qty | Price | Total | Supplier |
| --- | --- |  --- |  --- |  --- |
| [PCB (3 included)](https://oshpark.com/shared_projects/0S10dNB4) | 1 | $19.50 | $19.50 | OSH Park
| [Pro Trinket 5V](https://www.adafruit.com/product/2000) | 1 | $9.95 | $9.95 | Adafruit
| [5mm NeoPixel 5 Pack](https://www.adafruit.com/products/1938) | 1 | $4.95 | $4.95 | Adafruit
| [SPDT Slide Switch](https://www.adafruit.com/products/805) | 1 | $0.95 | $0.95 | Adafruit
| [Tactile Button switch (6mm)](https://www.adafruit.com/products/367) | 1 | $0.25 | $0.25	| Adafruit
| [10k Linear Pot](https://www.digikey.com/product-detail/en/bourns-inc/PTV09A-4020U-B103/PTV09A-4020U-B103-ND/3781130) | 3 | $0.83 | $2.49 | Digi-Key
| [1F Capacitor](https://www.digikey.com/product-detail/en/panasonic-electronic-components/ECA-1EM102/P5156-ND/245015) | 1 | $0.59 | $0.59 | Digi-Key
| [330 Ohm Resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730) | 1 | $0.10 | $0.10 | Digi-Key
| [10K Ohm Resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT10K0/CF14JT10K0CT-ND) | 1 | $0.10 | $0.10 | Digi-Key
| **Total** | **9** |  | **$38.53** |  |  |

More details and progress coming soon...

<!--
With these goals in mind, I came up with these components:

### Component Options

The components will need to be high quality, reliable, inexpensive, through-hole soldered, and easily available online.  [PJRC](https://www.pjrc.com), [Adafruit](https://www.adafruit.com), [Make](https://www.makershed.com), and [SparkFun](https://www.sparkfun.com) all have high quality standards, good support, fast shipping, and great tutorials.

#### Microprocessor

Obviously the microprocessor needs to be supported by [FastLED](https://github.com/FastLED/FastLED).  :)

**[Trinket - 5V](https://www.adafruit.com/product/1501)**

Pros:
* No level shifter required.
* Micro USB port for programming.
* High quality, fairly inexpensive.

Cons:
* Not enough analog inputs for three potentiometers, without using additional components like a multiplexer.

**[Pro Trinket - 5V](https://www.adafruit.com/product/2000)**

Pros:
* Same as Trinket.

Cons:
* $3 more than the Trinket.
* A little larger than the Trinket.

**[Teensy LC](https://www.pjrc.com/teensy/teensyLC.html)**

Pros:
* Excellent quality, support, tutorials, drivers, libraries, etc.
* One 5V pin, avoids level-shifter.
* Faster, 32 bit ARM Cortex M0+ processor, more RAM & FLASH.

Cons:
* A little more expensive than the Pro Trinket.

I'm torn between the Pro Trinket and the Teensy LC.  I'll come back to the microprocessor.

#### LEDs

The LEDs need to be addressable and supported by FastLED.  They need to be through-hole components, since the board should be easy to assemble by novices.  That leaves me with only a couple of options:

**[Breadboard-friendly NeoPixels](https://www.adafruit.com/products/1312)**:

Pros:
* Through hole

Cons:
* A bit expensive.
* Would require headers to be soldered on before soldering onto the PCB.

**[5mm Through-Hole NeoPixels](https://www.adafruit.com/products/1938)**:

Pros:
* Through hole
* A bit less expensive than the breadboard-friendly ones.

Cons:
* A bit expensive.
* Would require headers to be soldered on before soldering onto the PCB.
-->
