---
layout: post
title: Fibonacci64 Flower
id: fibonacci64-flower
imgurId: 6my9fUx
videoUrl: https://www.youtube.com/embed/videoseries?list=PLUYGVM-2vDxJpEjrSeHCH8u1hxFz4qawU
excerpt: Fibonacci64 is a beautiful 86mm circular disc with 64 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories:
  - portfolio
published: true
redirect_from:
  - /56
  - /f64f
  - /f64flower
sortKey: Fibonacci0064 Flower
---

<a href="https://i.imgur.com/6my9fUx.gif" target="_blank"><img src="https://i.imgur.com/6my9fUx.gif" style="width:340px" class="img-responsive" /></a>

<a href="https://i.imgur.com/gHC4cA6.gif" target="_blank"><img src="https://i.imgur.com/gHC4cA6.gif" style="width:340px" class="img-responsive" /></a>

<a href="https://i.imgur.com/iLaweEn.png" target="_blank"><img src="https://i.imgur.com/iLaweEn.png" style="width:340px" class="img-responsive" /></a>

<a href="https://i.imgur.com/1QSxMku.png" target="_blank"><img src="https://i.imgur.com/1QSxMku.png" style="width:340px" class="img-responsive" /></a>

<a href="https://i.imgur.com/3bSrP5e.png" target="_blank"><img src="https://i.imgur.com/3bSrP5e.png" style="width:340px" class="img-responsive" /></a>

<a href="https://i.imgur.com/3bUMPma.png" target="_blank"><img src="https://i.imgur.com/3bUMPma.png" style="width:340px" class="img-responsive" /></a>

<a href="https://i.imgur.com/DyUJ6JV.png" target="_blank"><img src="https://i.imgur.com/DyUJ6JV.png" style="width:340px" class="img-responsive" /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci64 Flower is a beautiful 148mm PCB with 64 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It has solder pads on the back that match the pinout of the [QT Py by Adafruit](https://www.adafruit.com/?q=qt+py), or [XIAO by Seeed](https://www.seeedstudio.com/catalogsearch/result/?q=xiao). It can be used by any microcontroller via the 5V, GND, and Data In pins. It also has a Data Out pad, for connecting more LEDs on the same data pin.

The six mounting holes are surrounded by capacitive touch compatible pads. They're connected to the A0-A3, A6 & A7 pads/pins on the QT Py footprint. The SAMD21 QT Py supports capacitive touch on these pins. Most other QT Py / XIAO boards, such as the RP2040, do not support capacitive touch.

It was inspired by and created with a fork of bleeptrack's overflower project:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Overflower Generator has two new features:<br>- Color Picker<br>- Set number of leaves<a href="https://t.co/viUEdNGSVe">https://t.co/viUEdNGSVe</a><a href="https://twitter.com/hashtag/generative?src=hash&amp;ref_src=twsrc%5Etfw">#generative</a> <a href="https://twitter.com/hashtag/procedural?src=hash&amp;ref_src=twsrc%5Etfw">#procedural</a> <a href="https://t.co/gzOBMi7BqM">pic.twitter.com/gzOBMi7BqM</a></p>&mdash; bleeptrack (@Bleeptrack) <a href="https://twitter.com/Bleeptrack/status/1127377988880863232?ref_src=twsrc%5Etfw">May 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It consists of 64 RGB LEDs, arranged into a flower-shaped <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

<!-- <a class="btn btn-success" href="https://www.tindie.com/products/19184">Buy on Tindie</a> -->

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
