---
layout: post
title: FastLED RGB & HSV Tutorial
id: fastled-rgb-hsv-tutorial
imgurId: 4Hf72Le
excerpt: Tutorial project to build an interactive and educational circuit board that teaches soldering, basic Arduino programming, and basic FastLED concepts.
categories: products
redirect_from:
  - /16
---

### Background

I'm preparing to exhibit at Maker Faire Kansas City 2017, and trying to come up with an interactive and educational project for people to play with.

With what I have on hand, I quickly threw together a couple of breadboards, each with a Teensy, some RGB LEDs, and three potentiometers (using Paul Stoffregen's excellent [Sturdy Potentiometer Adapter for Breadboards](https://oshpark.com/shared_projects/P38N77nS)).

<img src="/images/fastled-rgb-hsv-tutorial/breadboard.jpg" style="width:400px" class="img-responsive" />

While this would work, it's not very durable.  I need something that lots of people can tinker and play with all weekend, without worrying about replacing disconnected wires.

So, I set out to design a PCB that I can assemble ahead of time, and will hopefully be durable enough to last all weekend.  It will also have the bonus of being a tutorial project I can use in classes, workshops, and share online.

<h3>Table of Contents</h3>

* TOC
{:toc}

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

<a href="https://oshpark.com/shared_projects/O7lkxF3n" target="_blank"><img src="https://oshpark.com/assets/badge-5b7ec47045b78aef6eb9d83b3bac6b1920de805e9a0c227658eac6e19a045b9c.png" alt="Order from OSH Park" /></a>

<a href="https://oshpark.com/shared_projects/O7lkxF3n" target="_blank"><img src="/images/fastled-rgb-hsv-tutorial/pcb-top.png" style="width:400px" class="img-responsive" /></a>

<a href="https://oshpark.com/shared_projects/O7lkxF3n" target="_blank"><img src="/images/fastled-rgb-hsv-tutorial/pcb-bottom.png" style="width:400px" class="img-responsive" /></a>

Here are the Eagle files ([schematic](/images/fastled-rgb-hsv-tutorial/FastLED RGB & HSV Tutorial.sch) & [board](/images/fastled-rgb-hsv-tutorial/FastLED RGB & HSV Tutorial.brd))

### Features

The switch will change the potentiometers from controlling RGB to HSV.  The PCB includes the [NeoPixel "best practices"](https://learn.adafruit.com/adafruit-neopixel-uberguide/best-practices) capacitor and resistor, and pins to connect more LEDs (a strip, ring, etc).  The tactile momentary push button could be used to change modes, from the tutorial to patterns, animations, etc.

The mounting holes below the Teensy LC will allow the PCBs to be mounted on a board, so they don't fall off the table or "walk away".

### Parts List

| Name | Qty | Price | Total | Supplier |
| --- | --- |  --- |  --- |  --- |
| [PCB](https://oshpark.com/shared_projects/O7lkxF3n) | 1 | $4.52 | $4.52 | OSH Park
| [Teensy LC](https://www.pjrc.com/store/teensylc_pins.html) | 1 | $11.65 | $11.65 | PJRC
| [14 Pin Header](https://www.pjrc.com/store/header_14x1.html) | 2 | $0.28 | $0.56 | PJRC
| [14 Pin Socket](https://www.pjrc.com/store/socket_14x1.html) | 2 | $0.70 | $1.40 | PJRC
| [NeoPixel Stick 8x](https://www.adafruit.com/products/1426) | 1 | $5.95 | $5.95 | Adafruit
| [SPDT Slide Switch](https://www.adafruit.com/products/805) | 1 | $0.95 | $0.95 | Adafruit
| [Tactile Button (6mm)](https://www.digikey.com/product-detail/en/omron-electronics-inc-emc-div/B3F-1075/B3F-1075-ND/1811730) | 1 | $0.25 | $0.25	| Adafruit
| [10k Linear Pot](https://www.digikey.com/product-detail/en/bourns-inc/PTV09A-4020U-B103/PTV09A-4020U-B103-ND/3781130) | 3 | $0.83 | $2.49 | Digi-Key
| [10µF Capacitor](https://www.digikey.com/product-detail/en/panasonic-electronic-components/ECA-1HM100/P5178-ND/245037) | 1 | $0.17 | $0.17 | Digi-Key
| [330 Ohm Resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF18JT330R/CF18JT330RCT-ND/2022730) | 1 | $0.10 | $0.10 | Digi-Key
| [10K Ohm Resistor](https://www.digikey.com/product-detail/en/stackpole-electronics-inc/CF14JT10K0/CF14JT10K0CT-ND) | 1 | $0.10 | $0.10 | Digi-Key
| [5 Pin Header](https://www.digikey.com/product-detail/en/wurth-electronics-inc/61300511121/732-5318-ND/4846831) | 1 | $0.30 | $0.30 | Digi-Key
| [5 Pin Socket](https://www.digikey.com/product-detail/en/sullins-connector-solutions/PPTC051LFBN-RC/S6103-ND/807239) | 1 | $0.62 | $0.62 | Digi-Key
| [4 Pin Right Angle Header](https://www.digikey.com/product-detail/en/wurth-electronics-inc/61300411021/732-5337-ND/4846826) | 1 | $0.45 | $0.45 | Digi-Key
| [4 Pin Socket](https://www.digikey.com/product-detail/en/sullins-connector-solutions/PPTC041LFBN-RC/S7002-ND/810144) | 1 | $0.60 | $0.60 | Digi-Key
| **Total** | **19** |  | **$29.06**

### Components

**LEDS**

I decided to go with [NeoPixel Stick 8x](https://www.adafruit.com/products/1426).  They are a bit cheaper and include more LEDs than the [Breadboard-friendly NeoPixels](https://www.adafruit.com/product/1312).

**Microprocessor**

In an effort to minimize the parts cost, while maintaining the ease of assembly and use, I initially thought about using a [5V Trinket](https://www.adafruit.com/products/1501).  They're inexpensive, but still high quality, and won't require a level shifter.  They just don't have enough inputs, so I switched to the [5V Pro Trinket](https://www.adafruit.com/products/2000).  Then I remembered the [Teensy LC](http://www.pjrc.com/teensy/teensyLC.html), which is less than $2 more, has a 5V digital output pin, faster processor, more RAM, FLASH, etc.  It can also be ordered from OSH Park with the PCB.  I was also warned by several people that the upload process for the Trinket can be a bit tedious.

### Soldering

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend buying the [Teensy LC with header pins](https://www.pjrc.com/store/teensylc_pins.html) already soldered.  It'll save you some time and effort.

I also recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

**Teensy LC**

Carefully solder 0.1 inch (2.54 mm) header pins to the Teensy LC.  It's easiest to insert the header pins into a breadboard and soldering the Teensy on from there, as shown in this [tutorial by SparkFun](https://learn.sparkfun.com/tutorials/getting-started-with-the-teensy/soldering-options).

You can also use the PCB to line up and solder the pins, after you've added the female headers, if you don't have a breadboard available.

You will need to solder the 5 header pins on the end of the Teensy as well.  At the very least, you must solder one header pin to the hole for pin 17 on the end.  This is the 5V logic output pin used to drive the NeoPixels.

**PCB**

<img src="http://i.imgur.com/nExINgG.jpg" style="width:400px" class="img-responsive" />

I prefer to add components to the PCB from the shortest to the tallest.  I find this way is easiest to hold the PCB steady when soldering.  If you have a [third hand](https://www.adafruit.com/categories?q=third%20hand), it can help as well.

**Tactile Push Button**

If you're using a tactile push button that is shorter than the resistors, insert and solder it first.

**Resistors**

Bend one leg of each resistor 180 degrees and insert them in their respective places on the PCB.  Make sure you put them in the correct places, as labeled on the PCB.  Solder them in place.

**Switch**

If your switch has little metal tabs on the end (like the ones from [Adafruit](https://www.adafruit.com/product/805)), you may need to clip them off or bend them to get the switch to sit flush on the PCB.  Solder the switch to the PCB, as labeled.  The orientation of the switch will not matter.

**Female Headers**

If you have a breadboard and some [Extra-long male header pins](https://www.adafruit.com/product/400), you can use these to align and hold the female headers while you solder.

You can also insert the Teensy LC into the female headers, then insert the female headers into the PCB to ensure they're correctly aligned.

Insert, align, and solder the female header sockets.  **Make sure these are aligned correctly before soldering!**

**Tactile Push Button**

If you're using a tactile push button that is taller than the resistors, insert and solder it now.

**Capacitor**

Insert and solder the capacitor.  **Note:** Make sure the negative lead, marked with a minus (-) sign, is inserted into the labeled negative hole in the PCB!

**Potentiometers**

Insert and solder the potentiometers.

**NeoPixels**

<img src="http://i.imgur.com/8nYOC2B.jpg" style="width:400px" class="img-responsive" />

Use a third hand, clothes pin, paper clip, etc to hold the short side of the right-angle header pins on the "DIN" side of the NeoPixel strip while you solder.  The longer legs of the pins, with the black plastic insulator, should be sticking up at a right angle from the NeoPixel stick.

### Assembly

Insert the Teensy LC into the sockets on the PCB.  Make sure it's oriented correctly, with the USB port on the edge of the PCB.

Insert the NeoPixel strip into the sockets.  Double-check the alignment, comparing the labels on the strip to those on the PCB.

Knobs for the potentiometers are nice, but not required.  I bought some [cheap knobs on Amazon](https://www.amazon.com/gp/product/B00X7BTTEM), but had to trim them down with some wire cutters, and drill out the center hole a bit to make them fit.

You could, alternatively, put a little red, green, and blue paint or nail polish on the top of the potentiometer posts.

If you have a multimeter that can measure resistance, it's a good idea to make sure there are no shorts between power and ground on the board after assembly.  You should measure infinite (or at least very high) resistance between the 5V and GND pins on the Teensy LC, NeoPixel strip, connector, etc.

After double-checking that all components are correctly aligned, you can connect the Teensy LC to a computer via a Micro USB cable.

### Software Setup

**Arduino IDE**

Download and install or extract the (Arduino IDE](https://www.arduino.cc/en/Main/Software).

**Teensyduino**

To compile a sketch for the Teensy, you'll need an add-on for the Arduino IDE called [Teensyduino](https://www.pjrc.com/teensy/td_download.html).  Download and install it.

You will be asked to install additional libraries during the Teensyduino installation. **Do not install all the libraries!**  Click 'None'.

**FastLED Library**

If you're unfamiliar with them, Adafruit's [Arduino Libraries](https://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use/arduino-libraries) tutorial will tell you everything you ever wanted to know about libraries, including more detailed installation instructions.

Download the latest version of the [FastLED library](https://github.com/FastLED/FastLED/releases), then unzip the file and rename the folder to "FastLED" (no quotes).  Copy the file into your Arduino/Libraries folder.

Or use git to clone the FastLED repository:

~~~
cd ~/Documents/Arduino/libraries
git clone https://github.com/FastLED/FastLED.git
~~~

Either way, you'll likely need to restart Arduino for the library to get loaded and show up.

## Code

I created a [simple Arduino sketch](https://gist.github.com/jasoncoon/fa1e7efd8726223c2b5c5eb5f7256d65) to show how RGB & HSV work to combine to create different colors.  I also included a rainbow pattern that is displayed when the momentary tactile button is held pressed.

Copy and paste the code into a new Arduino sketch: <script src="https://gist.github.com/jasoncoon/fa1e7efd8726223c2b5c5eb5f7256d65.js"></script>

### Compiling

**Configure Arduino**

1. In the Arduino IDE, click the *Tools* menu, then *Board*, then click *Teensy LC*.
2. Click the *Tools* menu again, then *Port*, and then the port your Teensy LC is plugged in to.
3. Click the *Verify* button (check mark) in the toolbar.
4. It should finish, and say *Done compiling* in the status bar at the bottom of the window.
5. Now click the *Upload* button (right arrow) in the toolbar.

***More details coming soon...***
