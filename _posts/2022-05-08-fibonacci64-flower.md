---
layout: post
title: Fibonacci64 Flower
id: fibonacci64-flower
imgurId: 50JYqsw.mp4
excerpt: Fibonacci64 Flower is a beautiful 86mm circular disc with 64 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /56
  - /f64f
  - /f64flower
sortKey: Fibonacci0064 Flower
---

<div class="embed-responsive embed-responsive-16by9">
   <a href="{{ post.url }}">
      <video class="post" poster="/assets//50JYqsw.jpg" preload="auto" autoplay="autoplay" muted="muted" loop="loop">
         <source src="/assets//50JYqsw.mp4" type="video/mp4">
      </video>
   </a>
</div>

<a href="/assets/Vmn2bnJ.jpg" target="_blank"><img src="/assets/Vmn2bnJ.jpg" style="width:340px" /></a><a href="/assets/e2azNfa.jpg" target="_blank"><img src="/assets/e2azNfa.jpg" style="width:340px" /></a><a href="/assets/rmweViq.jpg" target="_blank"><img src="/assets/rmweViq.jpg" style="width:340px" /></a><a href="/assets/cOuoA0N.jpg" target="_blank"><img src="/assets/cOuoA0N.jpg" style="width:340px" /></a><a href="/assets/2z8lGsd.jpg" target="_blank"><img src="/assets/2z8lGsd.jpg" style="width:340px" /></a>

<a href="https://lectronz.com/products/fibonacci64-flower-148mm" alt="Buy it on Lectronz"><img src="https://lectronz-images.b-cdn.net/static/badges/buy-it-on-lectronz-small.png" /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci64 Flower is a beautiful 148mm PCB with 64 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It has solder pads on the back that match the pinout of the [QT Py by Adafruit](https://www.adafruit.com/?q=qt+py), or [XIAO by Seeed](https://www.seeedstudio.com/catalogsearch/result/?q=xiao). It can be used by any microcontroller via the 5V, GND, and Data In pins. It also has a Data Out pad, for connecting more LEDs on the same data pin.

The six mounting holes are surrounded by capacitive touch compatible pads. They're connected to the A0-A3, A6 & A7 pads/pins on the QT Py footprint. The SAMD21 QT Py supports capacitive touch on these pins. Most other QT Py / XIAO boards, such as the RP2040, do not support capacitive touch.

It was inspired by and created with a fork of [bleeptrack's overflower project](https://bleeptrack.de/projects/overflower)

You can buy stickers of the designs in [bleeptrack's store](https://shop.bleeptrack.de/products/sticker-pack-overflower-3pcs)

<a href="https://shop.bleeptrack.de/products/sticker-pack-overflower-3pcs"><img src="https://shop.bleeptrack.de/cdn/shop/products/II9A0128-2.jpg?v=1677954704&width=500" /></a>

It consists of 64 RGB LEDs, arranged into a flower-shaped <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

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

- Size: 5.83 x 5.83 x .063 inch (148mm x 148mm x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) Finish
- Designed and assembled in the US by Evil Genius Labs

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/fibonacci64-touch-demo/tree/f64-flower](https://github.com/jasoncoon/fibonacci64-touch-demo/tree/f64-flower)

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

1. Find a clean spot on your soldering workspace. I used a piece of heavy card stock. Carefully place the board with the LEDs facing down and the bottom of the board facing up.
1. **VERY** carefully check polarity before connecting 5V and GND.
1. Either:

- Solder wires to the pads on the back of the Fibonacci PCB and connect them to your microcontroller.
- Or:
- Carefully align an Adafruit QT Py, Seeeduino XIAO, or another controller with an identical footprint with the pads on the back of the Fibonacci PCB. Solder the pads.

1. Keep an eye on the temperature of the PCB and especially the connectors. High temperatures can reduce the life of the LEDs. When possible, ensure air can flow, either passively (ventilation) or actively (exhaust fan).
1. Each WS2812C-2020 can theoretically draw 15mA at full brightness, solid white color. 64 of them can theoretically draw 960mA. I suggest using [FastLED's power management](https://github.com/FastLED/FastLED/wiki/Power-notes#managing-power-in-fastled) to limit the maximum brightness to a reasonable amount, well under the maximum your power supply is rated for. I've found that 960mA is blindingly bright.
   WS

### Acrylic Open Case Assembly Instructions

1. Peel and remove any protective plastic and/or paper film from the acrylic.
1. Insert M2x8mm Button Head Hex Screws the holes in the matte side of the acrylic face plate.
1. Hand-tighten M2 Hex Metal Nuts onto the screws, on the glossy side of the acrylic face plate.
1. Carefully center and place the Fibonacci PCB onto the standoffs, with the LED side facing the glossy side of the acrylic face plate.
1. Hand-tighten M2 Hex Metal Nuts onto the back side of the Fibonacci PCB.
1. Center and place the acrylic back plate over the standoffs.
1. Hand-tighten M2x6mm Button Head Hex Screws onto the standoffs.

<!-- <img src="/assets/vTWd4vI.jpg" class="img-responsive" />

<img src="/assets/xUO6aZY.jpg" class="img-responsive" />

<img src="/assets/RoLJJ19.jpg" class="img-responsive" />

<img src="/assets/oNLZf7Y.jpg" class="img-responsive" /> -->
