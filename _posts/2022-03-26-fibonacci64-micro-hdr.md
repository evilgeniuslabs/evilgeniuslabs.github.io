---
layout: post
title: Fibonacci64 Micro HDR
id: fibonacci64microhdr
imgurId: g8GJGfI.mp4
# videoUrl: https://www.youtube.com/embed/SNB5xsYFCak
excerpt: Fibonacci64 Micro HDR is a tiny, beautiful 40mm circular disc with 64 SK9822-EC20 HDR RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a miniature galaxy, it's mesmerizing to watch.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /51
  - /f64microhdr
  - /f64uh
sortKey: Fibonacci0064 Micro HDR
lectronz: fibonacci64-micro-hdr-40mm-64-rgb-leds-no-touch
# lectronz: fibonacci64-micro-hdr-40mm
gallery:
  - src: "/assets/K2bqxvt.jpg"
    alt: "Fibonacci64 Micro HDR glowing pink, blue and purple, with red and black power wires"
  - src: "/assets/BTdKtF9.jpg"
    alt: "Back of Fibonacci64 Micro HDR with a Pixelblaze Pico attached and power wires soldered on"
---

<!-- <video playsinline class="post lazy" data-poster="/assets/g8GJGfI.png" autoplay="autoplay" muted="muted" loop="loop" data-src="/assets/g8GJGfI.mp4"></video> -->

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci64 Micro HDR is a beautiful 40mm circular disc with 64 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a miniature galaxy, it's mesmerizing to watch.

It consists of 64 SK9822-EC2020 HDR (High Dynamic Range) RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

It has solder pads on the back that match the pinout of a [Pixelblaze V3 Pico by ElectroMage](https://shop.electromage.com/products/pixelblaze-v3-pico-tiny-wifi-led-controller), [QT Py by Adafruit](https://www.adafruit.com/?q=qt+py), or [XIAO by Seeed](https://www.seeedstudio.com/catalogsearch/result/?q=xiao). It can be used by any microcontroller via the 5V, GND, Clock and Data In pins.

<!-- <blockquote class="twitter-tweet"><p lang="en" dir="ltr">This is an incredibly cool fusion of <a href="https://twitter.com/evilgeniuslab?ref_src=twsrc%5Etfw">@evilgeniuslab</a>&#39;s Fib64 Micro with <a href="https://twitter.com/im889?ref_src=twsrc%5Etfw">@im889</a> &#39;s PixelBlaze Pico. Both boards have new mods designed for low power consumption (essential for wearables). This Fib64 uses SK9822 pixels which have more color depth, and produce much better color... <a href="https://t.co/v8B2vrUf2K">https://t.co/v8B2vrUf2K</a></p>&mdash; Geek Mom Projects (@GeekMomProjects) <a href="https://twitter.com/GeekMomProjects/status/1507490036907843587?ref_src=twsrc%5Etfw">March 25, 2022</a></blockquote> -->

{% include fermat-spiral.html %}

---

### Specifications

- Size: 1.57 x 1.57 x .063 inch (40 x 40 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black or Purple SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) or ENIG (electroless nickel immersion gold) Finish
- Designed in the US by Evil Genius Labs
- Some PCBs are manufactured in the US by [OSH Park](https://oshpark.com)
- Some are assembled in the US by Evil Genius Labs
- Some are assembled in the US by [ElectroMage](https://electromage.com)! See [Pixelblaze Map](#pixelblaze-map) below for more information. <a href="https://electromage.com" target="_blank"><img alt="ElectroMage logo: a wizard conjuring a glowing rainbow cube" src="/assets/JSukWUk.jpg" style="width:150px" class="img-fluid post-img" /></a>

**Parts**

Options available to purchase for additional amount:

- Diffuser: 3mm black LED acrylic 42mm circle.
- Open Case Kit: diffuser, back plate with wall mounting hole, M2 black nylon standoffs, M2 black metal screws.
- Fully Assembled: diffuser, open case, and assembled [Pixelblaze V3 Pico by ElectroMage](https://shop.electromage.com/products/pixelblaze-v3-pico-tiny-wifi-led-controller) controller.

If the "Fully Assembled" option is not chosen, these parts are **not included**, but are required to assemble and use:

- Microcontroller (Pixelblaze, Arduino, ESP8266, ESP32, etc)
- Wires, connectors, crimp tool, etc.
- Soldering iron, solder, etc.

Parts I used in my builds:

- [Pixelblaze V3 Pico by ElectroMage](https://shop.electromage.com/products/pixelblaze-v3-pico-tiny-wifi-led-controller)
- [Chemcast Black LED Acrylic](https://www.tapplastics.com/product/plastics/cut_to_size_plastic/black_led_sheet/668)

### Code

Open source touch demo: [https://github.com/jasoncoon/fibonacci64-touch-demo/tree/f64-micro-hdr](https://github.com/jasoncoon/fibonacci64-touch-demo/tree/f64-micro-hdr)

### Pixelblaze Map

[Pixelblaze](https://www.bhencke.com/pixelblaze) is an advanced WiFi LED pattern engine, created by [ElectroMage](https://electromage.com). Live pattern expression compiler, lightning fast fixed point math, and HDR!

Fibonacci boards are laid out physically in a zig-zag pattern, from center to edge and back to center, all the way around the board. This layout automatically makes one dimensional patterns designed for strips visually interesting.

To treat the board as a matrix, you can use a pixel map. A 2D XY map can allow you to scroll colors, palettes, and patterns across the panel horizontally, vertically, diagonally, etc.

This map can be copied and pasted into the Pixel Mapper in the Mapper tab of your Pixelblaze web interface.

<div class="accordion" id="accordion">

  <div class="accordion-item">
    <h4 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Pixelblaze XY Map (click to expand)</button></h4>
    <div id="collapseOne" class="accordion-collapse collapse" data-parent="#accordion" aria-labelledby="headingOne">
      <div class="accordion-body">
        <pre>
[[140,128],[189,114],[208,91],[214,63],[208,34],[146,0],[168,21],[180,48],[180,76],[162,106],[152,78],[146,47],[129,25],[103,11],[72,5],[40,38],[70,35],[97,42],[120,61],[131,101],[107,87],[79,69],[50,68],[23,78],[0,98],[7,143],[23,118],[46,102],[76,98],[93,122],[57,131],[37,152],[28,179],[29,209],[87,255],[68,230],[59,202],[62,174],[80,148],[113,142],[91,181],[94,210],[109,235],[133,252],[202,235],[172,234],[145,224],[125,203],[117,170],[145,183],[170,201],[198,205],[227,198],[253,181],[255,134],[235,157],[210,171],[181,173],[148,153],[175,145],[207,138],[228,120],[240,93],[244,63]]
        </pre>
      </div>
    </div>
  </div>

</div>

### Case Assembly Instructions

#### Case Kit Parts

- 1 x Acrylic front with Voronoi pattern etch
- 1 x Fibonacci64 Micro HDR LED PCB
- 1 x Acrylic back
- 4 x M2x10mm screws
- 4 x M2 hex metal nuts
- 4 x M2x5mm standoffs
- 4 x M2x6mm screws

#### Pixelblaze Assembly

1. Peel and remove any protective plastic and/or paper film from the acrylic.
1. Insert M2x10mm Button Head Hex Screws into the holes in the matte side of the acrylic face plate.
1. Carefully center and place the Fibonacci PCB onto the screws, with the LED side facing the glossy side of the acrylic face plate.
1. Guide the wires through the holes in the back plate. Center and place the back plate onto the screws. Gently pull the slack out of the wires, through the slots in the back plate. The back plate should fit flush against the back of the PCB.
1. Hand-tighten M2 Hex Nuts onto the screws.

<img alt="Exploded side-view render: screws above the Fibonacci64 Micro HDR PCB, case layers and nuts below" src="/assets/gSIIyeB.jpg" class="img-fluid post-img" />

<img alt="Exploded side-view render of the case layers with the Pixelblaze clip below" src="/assets/V6sFYjP.jpg" class="img-fluid post-img" />

<img alt="Exploded side-view render with three screws above the stacked layers" src="/assets/04DFta6.jpg" class="img-fluid post-img" />

<img alt="3D render of the round case with screws inserted, viewed from above" src="/assets/efwTcve.jpg" class="img-fluid post-img" />

<img alt="Side-view render of the assembled stack with screws and nuts tightened" src="/assets/VVqsDXH.jpg" class="img-fluid post-img" />

<img alt="Side-view render of the assembled stack with the Pixelblaze clip underneath" src="/assets/IoB18cV.jpg" class="img-fluid post-img" />

<img alt="Side-view render of the finished stack" src="/assets/uNrHVci.jpg" class="img-fluid post-img" />

<img alt="3D render of the assembled Fibonacci64 Micro HDR from below, with the Pixelblaze and its cable" src="/assets/sKSUWMC.jpg" class="img-fluid post-img" />

<img alt="3D render of the back of the assembled Fibonacci64 Micro HDR with the Pixelblaze cover and cable" src="/assets/ZKyQbHm.jpg" class="img-fluid post-img" />

<img alt="3D render of the assembled Fibonacci64 Micro HDR seen from the side, cable looped through the back" src="/assets/i1QUncM.jpg" class="img-fluid post-img" />

<img alt="3D render of the Fibonacci64 Micro HDR connected to a battery holder by a cable" src="/assets/Lrk5Erw.jpg" class="img-fluid post-img" />

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

<img alt="Back of Fibonacci64 Micro HDR with a Pixelblaze Pico attached and power wires soldered on" src="/assets/BTdKtF9.jpg" class="img-fluid post-img" />

1. Find a clean spot on your soldering workspace. I used a piece of heavy card stock. Carefully place the board with the LEDs facing down and the bottom of the board facing up.
1. **VERY** carefully check polarity before connecting 5V and GND.
1. Either:

- Solder wires to the pads on the back of the Fibonacci PCB and connect them to your microcontroller.
- Or:
- Carefully align a Pixelblaze V3 Pico Adafruit QT Py, Seeeduino XIAO, or another controller with an identical footprint with the pads on the back of the Fibonacci PCB. Solder the pads.

1. Each SK9822-EC2020 can theoretically draw 15mA at full brightness, solid white color. 64 of them can theoretically draw 960mA. I've found that 960mA is blindingly bright.
1. Keep an eye on the temperature of the PCB and especially the connectors. High temperatures can reduce the life of the LEDs. When possible, ensure air can flow, either passively (ventilation) or actively (exhaust fan).
1. If using a Pixelblaze V3 Pico, I suggest using the low power settings (reduce the global brightness, CPU clock speed, and/or disable wi-fi) to reduce power usage and heat.
1. If using FastLED, I suggest using its [power management](https://github.com/FastLED/FastLED/wiki/Power-notes#managing-power-in-fastled) to limit the maximum brightness to a reasonable amount, well under the maximum your power supply is rated for.
