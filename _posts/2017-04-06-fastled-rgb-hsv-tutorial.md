---
layout: post
title: FastLED RGB & HSV Tutorial
id: fastled-rgb-hsv-tutorial
excerpt: Tutorial project to build an interactive and educational circuit board that teaches soldering, basic Arduino programming, and basic FastLED concepts.
---

### Background

I'm preparing to exhibit at Maker Faire Kansas City 2017, and trying to come up with an interactive and educational project for people to play with.

I created a [simple Arduino sketch](https://gist.github.com/jasoncoon/fa1e7efd8726223c2b5c5eb5f7256d65) to show how RGB & HSV work to combine to create different colors.

With what I have on hand, I quickly threw together a couple of breadboards, each with a Teensy, some RGB LEDs, and three potentiometers (using Paul Stoffregen's excellent [Sturdy Potentiometer Adapter for Breadboards](https://oshpark.com/shared_projects/P38N77nS)).

<img src="/images/fastled-rgb-hsv-tutorial/breadboard.jpg" style="width:400px" class="img-responsive" />

While this would work, it's not very durable.  I need something that lots of people can tinker and play with all weekend, without worrying about replacing disconnected wires.

So, I set out to design a PCB that I can assemble ahead of time, and will hopefully be durable enough to last all weekend.  It will also have the bonus of being a tutorial project I can use in classes, workshops, and share online.

### Project Requirements

* **Educational:**  I'd like people to learn something while tinkering with it.
* **Durable:**  It will need to take a lot of abuse.
* **Exposed:**  This might conflict with durability, but I don't really want it hidden away in an enclosure.  I'd like the guts to be visible.
* **Open source and hardware:**  I'd like to share this as freely and widely as possible.
* **Inexpensive:**  Ideally $30 or less, so that people can afford to actually build them.
* **Quality:**  May conflict with inexpensive, but there's no point building these cheaply if they don't last.
* **Accessible:**  Easy to assemble, but so easy that nothing is learned by bulding one.  All components need to be through-hole.  No surface mount soldering, reflow oven, etc should be required.

With these goals in mind, I created this PCB.

### Printed Circuit Board

<!-- <a href="https://oshpark.com/shared_projects/XugOZWQh"><img src="https://oshpark.com/assets/badge-5b7ec47045b78aef6eb9d83b3bac6b1920de805e9a0c227658eac6e19a045b9c.png" alt="Order from OSH Park"></img></a> -->

<img src="/images/fastled-rgb-hsv-tutorial/pcb-top.png" style="width:400px" class="img-responsive" />

<img src="/images/fastled-rgb-hsv-tutorial/pcb-bottom.png" style="width:400px" class="img-responsive" />

It's shared, but currently **completely untested**, on [OSH Park](https://oshpark.com/shared_projects/XugOZWQh).

I'll update once it is tested working.

Here are the Eagle files ([schematic](/images/fastled-rgb-hsv-tutorial/FastLED RGB & HSV Tutorial.sch) & [board](/images/fastled-rgb-hsv-tutorial/FastLED RGB & HSV Tutorial.brd))

### Features

The switch will change the potentiometers from controlling RGB to HSV.  The PCB includes the NeoPixel "best practices" capacitor and resistor, and pins to connect more LEDs (a strip, ring, etc).  The tactile momentary push button could be used to change modes, from the tutorial to patterns, animations, etc.

The mounting holes below the Teensy LC will allow the PCBs to be mounted on a board, so they don't fall off the table or "walk away".

### Parts List

| Name | Qty | Price | Total | Supplier |
| --- | --- |  --- |  --- |  --- |
| [PCB](https://oshpark.com/shared_projects/XugOZWQh) | 1 | $4.52 | $4.52 | OSH Park
| [Teensy LC](https://www.pjrc.com/store/teensylc_pins.html) | 1 | $11.65 | $11.65 | PJRC
| [NeoPixel Stick 8x](https://www.adafruit.com/products/1426) | 1 | $5.95 | $5.95 | Adafruit
| [SPDT Slide Switch](https://www.adafruit.com/products/805) | 1 | $0.95 | $0.95 | Adafruit
| [Tactile Button switch (6mm)](https://www.adafruit.com/products/367) | 1 | $0.25 | $0.25	| Adafruit
| [10k Linear Pot](https://www.digikey.com/product-detail/en/bourns-inc/PTV09A-4020U-B103/PTV09A-4020U-B103-ND/3781130) | 3 | $0.83 | $2.49 | Digi-Key
| [10µF Capacitor](https://www.digikey.com/product-detail/en/panasonic-electronic-components/ECA-1HM100/P5178-ND/245037) | 1 | $0.17 | $0.17 | Digi-Key
| [330 Ohm Resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730) | 1 | $0.10 | $0.10 | Digi-Key
| [10K Ohm Resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT10K0/CF14JT10K0CT-ND) | 1 | $0.10 | $0.10 | Digi-Key
| **Total** | **11** |  | **$26.18**

### Components

** LEDS **

I decided to try [5mm Diffused NeoPixels](https://www.adafruit.com/products/1938).  They are a bit cheaper and should be easier to solder than the [Breadboard-friendly NeoPixels](https://www.adafruit.com/product/1312), which would require headers to be soldered.

** Microprocessor **

In an effort to minimize the parts cost, while maintaining the ease of assembly and use, I initially thought about using a [5V Trinket](https://www.adafruit.com/products/1501).  They're inexpensive, but still high quality, and won't require a level shifter.  They just don't have enough inputs, so I switched to the [5V Pro Trinket](https://www.adafruit.com/products/2000).  Then I remembered the [Teensy LC](http://www.pjrc.com/teensy/teensyLC.html), which is less than $2 more, has a 5V digital output pin, faster processor, more RAM, FLASH, etc.  It can also be ordered from OSH Park with the PCB.  I was also warned by several people that the upload process for the Trinket can be frustrating.

### Revisions

**v2**
* Switched to the Teensy LC.
* Major layout changes.

**v1.1**
* Added tactile momentary push button with pull down resistor.
* Added some part and pin details to the bottom of the board.
* Fixed inconsistent LED spacing.
* Various other slight layout changes.
* Thanks to Marc Miller for the suggestions!

** More details and progress coming soon... **

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
