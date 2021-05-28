---
layout: post
title: Fibonacci 32 Kit
id: fibonacci32-kit
imgurId: DWHFck2
# videoUrl: https://www.youtube.com/embed/SNB5xsYFCak
excerpt: Fibonacci32 is a beautiful 86mm circular disc with 32 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it’s mesmerizing to watch.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /43
  - /f32kit
---

<a href="https://i.imgur.com/DWHFck2.gif" target="_blank"><img src="https://i.imgur.com/DWHFck2.gif" class="img-responsive"  /></a>

<a href="https://i.imgur.com/Sa9oicX.png" target="_blank"><img src="https://i.imgur.com/Sa9oicX.png" class="img-responsive"  /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci32 is a beautiful 86mm circular disc with 32 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It consists of 32 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

<a class="btn btn-default" href="https://shop.cybercitycircuits.com/products/fibonacci-32-soldering-kit">Buy from Cyber City Circuits</a>

An [optional enclosure](https://shop.cybercitycircuits.com/collections/electronics-hobby-kits/products/fibonacci-32-soldering-kit-acrylic-add-on) is also available from Cyber City Circuits.

### Background

<p>In disc <a href="https://en.wikipedia.org/wiki/Phyllotaxis" title="Phyllotaxis">phyllotaxis</a>, as in the <a href="https://en.wikipedia.org/wiki/Sunflower" title="Sunflower" class="mw-redirect">sunflower</a> and daisy, the mesh of spirals occurs in <a href="https://en.wikipedia.org/wiki/Fibonacci_number" title="Fibonacci number">Fibonacci numbers</a> because divergence (angle of succession in a single spiral arrangement) approaches the <a href="https://en.wikipedia.org/wiki/Golden_ratio" title="Golden ratio">golden ratio</a>. The shape of the spirals depends on the growth of the elements generated sequentially. In mature-disc <a href="https://en.wikipedia.org/wiki/Phyllotaxis" title="Phyllotaxis">phyllotaxis</a>, when all the elements are the same size, the shape of the spirals is that of Fermat spirals—ideally. That is because Fermat's spiral traverses equal <a href="https://en.wikipedia.org/wiki/Annulus_(mathematics)" title="Annulus (mathematics)">annuli</a> in equal turns. The full model proposed by H Vogel in 1979<sup id="cite_ref-2" class="reference"><a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral#cite_note-2"><span>[</span>2<span>]</span></a></sup> is</p>
<dl>
<dd><img class="mwe-math-fallback-image-inline tex" alt="r = c \sqrt{n}," src="https://upload.wikimedia.org/math/7/8/1/7819d3be1d513629c44d336b5974553d.png" /></dd>
</dl>
<dl>
<dd><img class="mwe-math-fallback-image-inline tex" alt="\theta = n \times 137.508^\circ," src="https://upload.wikimedia.org/math/e/6/8/e6814eb420c2d2ea10a2fcba5e0cdc9d.png" /></dd>
</dl>
<p>where <i>θ</i> is the angle, <i>r</i> is the radius or distance from the center, and <i>n</i> is the index number of the floret and <i>c</i> is a constant scaling factor. The angle 137.508° is the <a href="https://en.wikipedia.org/wiki/Golden_angle" title="Golden angle">golden angle</a> which is approximated by ratios of <a href="https://en.wikipedia.org/wiki/Fibonacci_number" title="Fibonacci number">Fibonacci numbers</a>.<sup id="cite_ref-3" class="reference"><a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral#cite_note-3"><span>[</span>3<span>]</span></a></sup></p>

<p>Fermat's spiral. (2015, October 24).  In <i>Wikipedia, The Free Encyclopedia</i>. Retrieved 02:45, February 24, 2016, from <a class="external free" href="https://en.wikipedia.org/w/index.php?title=Fermat%27s_spiral">https://en.wikipedia.org/w/index.php?title=Fermat%27s_spiral</a>
</p>

---

### Specifications

- Size: 86 x 86 mm x 1.6mm (3.39 x 3.39 x .063 inch)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- Lead Free HASL (Hot Air Solder Leveling)
- Designed in the US by Evil Genius Labs
- Assembled in the US by [Cyber City Circuits](https://cybercitycircuits.com)

### Code

Open source example firmware: [https://github.com/evilgeniuslabs/fibonacci32-demoreel100](https://github.com/evilgeniuslabs/fibonacci32-demoreel100)

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

#### Nano header pins

The kit may come with header pin sockets. You _can_ use these to make the Nano removable, but if you do, the back of the [optional enclosure](https://shop.cybercitycircuits.com/collections/electronics-hobby-kits/products/fibonacci-32-soldering-kit-acrylic-add-on) won't fit without using taller standoffs.

These instructions do not use the header pin sockets.

1. Snap the header pins into sets of two, using side/flush cutters:
   <img class="img-responsive" src="https://i.imgur.com/dSlOLo5.png" />
   <img class="img-responsive" src="https://i.imgur.com/MaE1ICP.png" />

1. We need five sets right now. Insert the long side of the header pins into the corners and side of the Nano outline, on the back of the PCB.
   <img class="img-responsive" src="https://i.imgur.com/jaxstnK.png" />

1. Place the Nano onto the pins, but DO NOT solder the pins on the Nano yet.
   <img class="img-responsive" src="https://i.imgur.com/1xmRy03.png" />

1. Hold the Nano in place as you flip the whole thing over.
   <img class="img-responsive" src="https://i.imgur.com/p8EKTeo.png" />

1. Solder the pins on the front side of the board.
   <img class="img-responsive" src="https://i.imgur.com/p8EKTeo.png" />
   <img class="img-responsive" src="https://i.imgur.com/0Ku2KhY.png" />
   <img class="img-responsive" src="https://i.imgur.com/Rr3OTDE.png" />

1. Using side/flush cutters, trim the pins close to the PCB.
   <img class="img-responsive" src="https://i.imgur.com/olWF73B.png" />

1. Flip the board back over and take the Nano off. Again, DO NOT solder the Nano on just yet.
   <img class="img-responsive" src="https://i.imgur.com/fHxHuoI.png" />
   <img class="img-responsive" src="https://i.imgur.com/r3OPum2.png" />

#### Prepare the LEDs

1. **Carefully** snap all of the LEDs apart from the panel. You can use needle-nosed pliers to help, but only grip the PCB with them, not the LEDs, which can be damaged easily.

1. Insert two sets of pins into opposite sides of the gap in a breadboard. If you don't have a breadboard, you can use the Fibonacci PCB for this instead.
   <img class="img-responsive" src="https://i.imgur.com/kfim2Sr.png" />
   <img class="img-responsive" src="https://i.imgur.com/DC15nWf.png" />

1. Place an LED PCB onto the pins, and solder them.
   <img class="img-responsive" src="https://i.imgur.com/3pGp1yy.png" />
   <img class="img-responsive" src="https://i.imgur.com/Fx38KtK.png" />
   <img class="img-responsive" src="https://i.imgur.com/e3vJE0l.png" />

1. Remove the LED PCB, and repeat for the rest.
   <img class="img-responsive" src="https://i.imgur.com/SKsNnij.png" />

#### Assemble the Fibonacci32

**Note**: Double-check the orientation of each LED very carefully before soldering! It is much more difficult to desolder and fix incorrectly placed LEDs.

The small black dot in the middle of each and every LED should point toward the outside of the main round PCB.

You can insert and solder the LEDs in any order. If you follow the order listed below, you can stop and test the LEDs at any point. It's not a bad idea to test after each LED. If a mistake is made, or an LED has failed, it will be easier to fix the fewer LEDs have been assembled.

You can test the LEDs by placing the Nano onto the pins, carefully checking you have it aligned correctly, with the USB port toward the edge where noted. Hold it in place while plugging in the USB cable, and the LEDs should light up. If not, make sure the Arduino code has been uploaded (see above).

1. We'll start with L0, the first LED, in the enter of the main PCB.
1. Align the V, G, I, & O markings on an LED PCB with the markings on the main PCB. Insert the LED PCB pins into the holes on the main PCB.
1. Check the markings again, making sure they match.
1. Double-check and make sure that the small black dot in the middle of the LED points toward the outside of the main round PCB.
   <img class="img-responsive" src="https://i.imgur.com/hHsbc7S.png" />

1. Hold the LED in place while carefully flipping the board over.
1. Hold the PCB down while soldering the pins on the LED.
1. Flip the board back over and repeat the steps above to check, recheck, insert, and solder each LED.
1. Below is the order in which the LEDs should ideally be assembled:

- &nbsp; &nbsp; 0
- &nbsp; 13
- &nbsp; 26
- &nbsp; 31
- &nbsp; 18
- &nbsp; &nbsp; 5
- &nbsp; 10
- &nbsp; 23
- &nbsp; 28
- &nbsp; 15
- &nbsp; &nbsp; 2
- &nbsp; &nbsp; 7
- &nbsp; 20
- &nbsp; 25
- &nbsp; 12
- &nbsp; &nbsp; 4
- &nbsp; 17
- &nbsp; 30
- &nbsp; 22
- &nbsp; &nbsp; 9
- &nbsp; &nbsp; 1
- &nbsp; 14
- &nbsp; 27
- &nbsp; 19
- &nbsp; &nbsp; 6
- &nbsp; 11
- &nbsp; 24
- &nbsp; 29
- &nbsp; 16
- &nbsp; &nbsp; 3
- &nbsp; &nbsp; 8
- &nbsp; 21

   <img class="img-responsive" src="https://i.imgur.com/ivyomjK.png" />

   <img class="img-responsive" src="https://i.imgur.com/8yhr9xT.png" />

   <img class="img-responsive" src="https://i.imgur.com/zLaluPn.png" />

   <img class="img-responsive" src="https://i.imgur.com/rA2hlhR.png" />

   <img class="img-responsive" src="https://i.imgur.com/1MYRsSv.png" />

   <img class="img-responsive" src="https://i.imgur.com/UJ8Mjhl.png" />

   <img class="img-responsive" src="https://i.imgur.com/LSarK9j.png" />

Trim all the LED pins on the back side of the PCB with flush cutters.

Test the LEDs, make sure they all light up.

#### Solder the Nano

1. Now we can solder the Nano pins.
1. Again, make sure it's aligned correctly, with the USB connector towards the edge.

   <img class="img-responsive" src="https://i.imgur.com/EfXSNLG.png" />

1. Hold the Nano in place while soldering one of the pins.
1. Now it should stay in place while soldering the rest of the pins.
1. Test the LEDs again, make sure they all still light up.

#### Solder the buttons

1. Insert the buttons on the back of the PCB, in the outline, on the same side as the Nano.
1. Hold the buttons in place while flipping the PCB over.
1. Solder the button pins, while holding the PCB down.

#### Assemble the case (optional)

1. Insert M3x6mm Button Head Hex Screws into the holes in the matte side of the acrylic face plate.
1. Hand-tighten M3x5mm+6mm Male-Female Hex Nylon Standoffs onto the M3x6mm screws, on the glossy side of the acrylic face plate.
1. Carefully center and place the Fibonacci PCB onto the standoffs, with the LED side facing the glossy side of the acrylic face plate.
1. Hand-tighten M3 Nylon Hex Standoffs onto the back side of the Fibonacci PCB.
1. Center and place the back plate onto the standoffs.
1. Insert M3x6mm Button Head Hex Screws into the holes in the back plate and hand-tighten.

   <img class="img-responsive" src="https://i.imgur.com/v9hDvcg.png" />

   <img class="img-responsive" src="https://i.imgur.com/HUn9bPx.png" />

   <img class="img-responsive" src="https://i.imgur.com/pa3AFfa.png" />

   <img class="img-responsive" src="https://i.imgur.com/NTPLsYf.png" />

   <img class="img-responsive" src="https://i.imgur.com/dAoTn5q.png" />

   <img class="img-responsive" src="https://i.imgur.com/AVfRUfh.png" />

   <img class="img-responsive" src="https://i.imgur.com/ksais63.png" />

   <img class="img-responsive" src="https://i.imgur.com/UWUwe7m.png" />

   <img class="img-responsive" src="https://i.imgur.com/DyEz1ZZ.png" />
