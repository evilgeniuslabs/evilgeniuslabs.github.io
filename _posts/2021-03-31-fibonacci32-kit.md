---
layout: post
title: Fibonacci 32 Kit
id: fibonacci32-kit
imgurId: Sa9oicX
# videoUrl: https://www.youtube.com/embed/SNB5xsYFCak
excerpt: Fibonacci32 is a beautiful 86mm circular disc with 32 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it’s mesmerizing to watch.
# categories: 
#   - portfolio
#   - products
published: true
redirect_from:
  - /43
  - /f32kit
---

<!-- <a href="https://i.imgur.com/9wXGJhP.gif" target="_blank"><img src="https://i.imgur.com/9wXGJhP.gif" class="img-responsive"  /></a> -->

<a href="https://i.imgur.com/Sa9oicX.png" target="_blank"><img src="https://i.imgur.com/Sa9oicX.png" class="img-responsive"  /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci32 is a beautiful 86mm circular disc with 32 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It consists of 32 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

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

- Size: 1.98 x 1.98 x .063 inch (50.2 x 50.2 mm x 1.6mm)
- 2 layer printed circuit board
- FR4 substrate
- Green SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) Finish
- Designed in the US by Evil Genius Labs
- Some PCBs are manufactured in the US by [OSH Park](https://oshpark.com) in their [After Dark](https://docs.oshpark.com/services/afterdark) (clear soldermask on a black substrate for stylish boards) finish!
- Some are assembled in the US by Evil Genius Labs

### Code

Open source example firmware and web application: [https://github.com/evilgeniuslabs/fibonacci32-demoreel100](https://github.com/evilgeniuslabs/fibonacci32-demoreel100)

<img src="https://raw.githubusercontent.com/jasoncoon/esp8266-fastled-webserver/main/web-app.png" style="width:300px" class="img-responsive" />

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

#### Nano header pins

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
   <img class="img-responsive" src="https://i.imgur.com/p8EKTeo.png" />
1. Flip the board back over and take the Nano off. Again, DO NOT solder the Nano on just yet.
   <img class="img-responsive" src="https://i.imgur.com/fHxHuoI.png" />
   <img class="img-responsive" src="https://i.imgur.com/r3OPum2.png" />

#### Prepare the LEDs

1. Insert two sets of pins into opposite sides of the gap in a breadboard. If you don't have a breadboard, you can use the Fibonacci PCB for this instead.
   <img class="img-responsive" src="https://i.imgur.com/kfim2Sr.png" />
   <img class="img-responsive" src="https://i.imgur.com/DC15nWf.png" />
1. Place an LED onto the pins, and solder them.
   <img class="img-responsive" src="https://i.imgur.com/3pGp1yy.png" />
   <img class="img-responsive" src="https://i.imgur.com/Fx38KtK.png" />
   <img class="img-responsive" src="https://i.imgur.com/e3vJE0l.png" />
1. Remove the LED, and repeat for the rest.
   <img class="img-responsive" src="https://i.imgur.com/SKsNnij.png" />

