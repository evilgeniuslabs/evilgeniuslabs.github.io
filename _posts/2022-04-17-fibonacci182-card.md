---
layout: post
title: Fibonacci182 Card
id: fibonacci128-card
imgurId: ErMFOKL
excerpt: Fibonacci 182 Card is a beautiful credit card sized rectangle with 182 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a miniature galaxy, it's mesmerizing to watch.
categories: 
  - portfolio
published: true
redirect_from:
  - /53
  - /f182card
  - /f182c
  - /fibonacci128-card
  - /fibonacci182-card
sortKey: Fibonacci0182 Card
---

<video class="post" poster="//i.imgur.com/ErMFOKL.png" preload="auto" autoplay="autoplay" muted="muted" loop="loop" style="width:684px">
   <source src="//i.imgur.com/ErMFOKL.mp4" type="video/mp4">
</video>

<a href="https://imgur.com/RVQAho5.png" target="_blank"><img src="https://imgur.com/RVQAho5.png" style="width:340px"  /></a>
<a href="https://imgur.com/CtY1Otx.png" target="_blank"><img src="https://imgur.com/CtY1Otx.png" style="width:340px"  /></a>
<a href="https://imgur.com/56UauS6.png" target="_blank"><img src="https://imgur.com/56UauS6.png" style="width:340px"  /></a>
<a href="https://imgur.com/rlgRwNS.png" target="_blank"><img src="https://imgur.com/rlgRwNS.png" style="width:340px"  /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci 182 Card is a beautiful credit card sized rectangle with 182 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a tiny galaxy, it's mesmerizing to watch.

It consists of 182 WS2812C-2020 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

<a class="btn btn-success" href="https://www.tindie.com/products/23597">Buy on Tindie</a>

It has solder pads on the back that match the pinout of the [QT Py by Adafruit](https://www.adafruit.com/?q=qt+py), or [XIAO by Seeed](https://www.seeedstudio.com/catalogsearch/result/?q=xiao). It can be used by any microcontroller via the 5V, GND, and Data In pins. It also has a Data Out pad, for connecting more LEDs on the same data pin.

The six mounting holes are surrounded by capacitive touch compatible pads. They're connected to the A0-A3, A6 & A7 pads/pins on the QT Py footprint. The SAMD21 QT Py supports capacitive touch on these pins.

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

- Size: 3.37 x 2.125 x .063 inch (85.6 x 53.98 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) Finish
- Designed in the US by Evil Genius Labs
- Some are assembled in the US by Evil Genius Labs

**Parts**

Parts I used in my builds:

- [QT Py by Adafruit](https://www.adafruit.com/product/4600)

### Code

Open source touch demo: [https://github.com/jasoncoon/fibonacci182-card](https://github.com/jasoncoon/fibonacci182-card)

### Pixelblaze Map

[Pixelblaze](https://www.bhencke.com/pixelblaze) is an advanced WiFi LED pattern engine, created by [ElectroMage](https://electromage.com). Live pattern expression compiler, lightning fast fixed point math, and HDR!

Fibonacci boards are laid out physically in a zig-zag pattern, from center to edge and back to center, all the way around the board. This layout automatically makes one dimensional patterns designed for strips visually interesting.

To treat the board as a matrix, you can use a pixel map. A 2D XY map can allow you to scroll colors, palettes, and patterns across the panel horizontally, vertically, diagonally, etc.

This map can be copied and pasted into the Pixel Mapper in the Mapper tab of your Pixelblaze web interface.

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Pixelblaze XY Map (click to expand)
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        <pre>
[[44.41,26.99],[56.09,25.89],[61.33,23.9],[65.08,21.35],[67.88,18.38],[69.94,15.08],[71.35,11.54],[72.15,7.82],[76.4,7.41],[75.8,11.25],[74.67,14.91],[72.99,18.32],[70.74,21.42],[67.86,24.11],[64.26,26.31],[59.69,27.85],[53.23,28.39],[49.02,29.26],[57.07,30.9],[62.31,30.64],[66.54,29.42],[70.08,27.52],[73.07,25.08],[75.54,22.18],[77.51,18.92],[78.99,15.35],[77.48,26.57],[74.78,29.25],[71.66,31.45],[68.11,33.07],[64.09,34.01],[59.45,34.05],[53.71,32.73],[49.85,32.93],[55.95,36.33],[60.75,37.63],[65.02,37.79],[68.94,37.12],[72.53,35.76],[75.8,33.83],[78.74,31.38],[76.08,38.69],[72.65,40.34],[68.99,41.41],[65.14,41.82],[61.09,41.44],[56.83,40.09],[52.14,37.28],[45.38,30.36],[48.39,36.74],[52.65,41.29],[56.62,43.89],[60.54,45.35],[64.42,45.95],[68.25,45.82],[71.97,45.05],[75.56,43.7],[78.96,41.82],[77.84,47.19],[55.48,47.58],[51.95,45.04],[48.57,41.17],[45.1,34.33],[44.99,39.74],[47.43,44.91],[43.41,43.58],[42.34,37],[41.3,32.58],[40.21,41.2],[40.9,46.49],[37.31,43.92],[38.2,37.97],[37.83,34.06],[34.81,40.63],[33.88,45.58],[30.12,46.29],[31.14,41.89],[33.62,36.92],[40.75,28.87],[33.96,33.14],[29.65,37.86],[27.35,42.07],[26.2,46.12],[22.26,45.09],[23.57,41.29],[25.84,37.55],[29.48,33.83],[36.33,29.66],[30.68,30.19],[25.62,33.08],[22.26,36.24],[19.94,39.65],[18.44,43.25],[17.63,46.98],[13.78,44.28],[14.88,40.64],[16.6,37.21],[19.02,34.07],[22.26,31.3],[26.64,29],[33.31,27.38],[38.06,26.15],[28.78,25.69],[23.47,26.8],[19.44,28.7],[16.22,31.16],[13.66,34.07],[11.7,37.33],[10.29,40.87],[9.43,44.63],[7.29,36.81],[9.01,33.39],[11.24,30.3],[13.96,27.62],[17.22,25.43],[21.08,23.85],[25.74,23.06],[31.88,23.51],[35.86,22.97],[28.81,20.36],[23.74,19.82],[19.44,20.34],[15.66,21.64],[12.33,23.57],[9.42,26.01],[6.93,28.91],[8.28,21.31],[11.39,19.12],[14.83,17.46],[18.58,16.44],[22.66,16.15],[27.16,16.83],[32.41,18.95],[36.22,19.1],[31.04,15.05],[26.61,13.07],[22.46,12.24],[18.51,12.28],[14.76,13.03],[11.21,14.4],[7.9,16.32],[8.31,11.16],[11.82,9.53],[15.48,8.47],[19.26,8.01],[23.11,8.24],[27.01,9.24],[30.95,11.22],[35.01,14.61],[39.93,21.47],[38.7,15.59],[35.35,10.66],[31.9,7.54],[39.45,11.38],[41.65,18.13],[43.11,23.41],[42.87,13.28],[41.32,7.99],[45.18,9.94],[45.21,16.25],[45.92,20.33],[48.06,12.79],[48.21,7.62],[51.43,10.77],[49.69,16.27],[49.72,20.1],[53.46,14.47],[55.11,9.84],[58.95,9.87],[57.28,13.99],[54.16,18.37],[47.29,24.13],[53.41,22.09],[58.16,18.29],[61.03,14.56],[62.79,10.79],[67.65,8.88],[66.5,12.55],[64.61,16.06],[61.82,19.36],[57.75,22.38],[50.95,25.2]]
        </pre>
      </div>
    </div>
  </div>

</div>

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

**Note**: Earlier versions of the PCB had header pin holes for 5V, GND, and Data In. Newer versions have pads, not holes. The pads allow you to either solder wires on, or solder a QT Py directly to the PCB.

<img src="https://imgur.com/vTpDaWP.png" class="img-responsive" />

1. Find a clean spot on your soldering workspace. I used a piece of heavy card stock. Carefully place the board with the LEDs facing down and the bottom of the board facing up.
1. **VERY** carefully check polarity before connecting 5V and GND.
1. Either:

- Solder wires to the pads on the back of the Fibonacci PCB and connect them to your microcontroller.
- Or:
- Carefully align an Adafruit QT Py, Seeeduino XIAO, or another controller with an identical footprint with the pads on the back of the Fibonacci PCB. Solder the pads.

1. Each WS2812C-2020 can theoretically draw 15mA at full brightness, solid white color. 182 of them can theoretically draw 2.72A! I suggest using [FastLED's power management](https://github.com/FastLED/FastLED/wiki/Power-notes#managing-power-in-fastled) to limit the maximum brightness to a reasonable amount, well under the maximum your power supply is rated for. I've found that 960mA is blindingly bright.
1. Keep an eye on the temperature of the PCB and especially the connectors. High temperatures can reduce the life of the LEDs. When possible, ensure air can flow, either passively (ventilation) or actively (exhaust fan).
