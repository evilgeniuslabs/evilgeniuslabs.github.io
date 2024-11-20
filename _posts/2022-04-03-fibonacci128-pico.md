---
layout: post
title: Fibonacci128 Pico
id: fibonacci128pico
imgurId: 
excerpt: Fibonacci 128 Pico is a tiny, beautiful 33mm circular disc with 128 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a miniature galaxy, it's mesmerizing to watch.
categories: []
published: true
redirect_from:
  - /52
  - /f128pico
  - /f128p
sortKey: Fibonacci0128 Pico
---

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci 128 Pico is a beautiful 33mm circular disc with 128 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a tiny galaxy, it's mesmerizing to watch.

It consists of 128 APA104-1212 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

It has solder pads on the back that match the pinout of the [QT Py by Adafruit](https://www.adafruit.com/?q=qt+py), or [XIAO by Seeed](https://www.seeedstudio.com/catalogsearch/result/?q=xiao). It can be used by any microcontroller via the 5V, GND, and Data In pins. It also has a Data Out pad, for connecting more LEDs on the same data pin.

The four mounting holes are surrounded by capacitive touch compatible pads. They're connected to the A0-A3 pads/pins on the QT Py footprint. The SAMD21 QT Py supports capacitive touch on these pins.

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

- Size: 1.3 x 1.3 x .063 inch (33 x 33 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black or Purple SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) or ENIG (electroless nickel immersion gold) Finish
- Designed in the US by Evil Genius Labs
- Some PCBs are manufactured in the US by [OSH Park](https://oshpark.com)
- Some are assembled in the US by Evil Genius Labs

### Code

Open source example firmware: [https://github.com/jasoncoon/fibonacci-demoreel/tree/f128-pico](https://github.com/jasoncoon/fibonacci-demoreel/tree/f128-pico)

Open source touch demo: [https://github.com/jasoncoon/fibonacci128-touch-demo](https://github.com/jasoncoon/fibonacci128-touch-demo)

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
[[17.355938,16.5],[22.062635,17.248417],[24.110735,18.585709],[25.37989,20.267151],[26.072584,22.172733],[26.255426,24.208199],[25.961437,26.289602],[23.262142,27.4809],[23.871925,25.510609],[23.979778,23.487049],[23.512877,21.481474],[22.319777,19.558645],[19.81498,17.710617],[20.259783,19.66872],[21.480511,21.990143],[21.750753,24.125429],[21.381083,26.126163],[20.495832,27.958261],[19.174353,29.57198],[16.315681,29.107399],[17.845627,27.742744],[18.969528,26.057255],[19.578728,24.06245],[19.478912,21.698547],[17.877871,18.297186],[17.728554,20.416775],[17.668886,23.301071],[16.822849,25.347998],[15.485337,26.898663],[13.791569,28.015057],[11.839402,28.705791],[7.645839,26.699432],[9.73915,26.792963],[11.743141,26.41242],[13.570808,25.529573],[15.121248,24.079048],[16.253132,21.839622],[15.698832,19.48032],[14.049384,22.355688],[12.237665,23.773067],[10.282416,24.4484],[8.258913,24.54303],[6.243867,24.128105],[3.81755,20.275415],[5.545581,21.432402],[7.453385,22.131718],[9.485855,22.295588],[11.602347,21.794304],[13.849031,20.270756],[15.406831,17.501432],[11.786818,19.77936],[9.397097,20.145201],[7.336266,19.745781],[5.545387,18.796955],[4.041224,17.410414],[2.857027,15.669537],[4.041839,12.955113],[4.915499,14.8264],[6.193637,16.399658],[7.879888,17.57445],[10.035742,18.204035],[13.051321,17.923574],[11.440531,16.70924],[9.02122,15.806984],[7.400559,14.406433],[6.335177,12.675129],[5.760695,10.721508],[5.653759,8.635322],[8.081038,7.036026],[7.864353,9.077002],[8.16112,11.080775],[9.040829,12.965136],[10.676542,14.642202],[13.97144,16.052736],[12.797162,14.35414],[10.960762,12.210131],[10.227472,10.135099],[10.182114,8.091002],[10.688747,6.125669],[11.671249,4.29955],[16.13748,2.944247],[14.522746,4.284849],[13.292364,5.914155],[12.528585,7.793308],[12.346714,9.90012],[12.988472,12.292036],[14.972075,13.558083],[14.312819,10.419203],[14.711853,8.173368],[15.710093,6.367047],[17.147427,4.939207],[18.920788,3.891222],[23.329584,5.10174],[21.269491,5.40743],[19.384773,6.17039],[17.768204,7.409126],[16.535599,9.186954],[15.887535,11.773862],[16.667326,14.593394],[17.787865,10.775058],[19.30686,8.928638],[21.099787,7.850355],[23.06419,7.353623],[25.112003,7.370455],[28.131332,10.673392],[26.224224,9.873814],[24.220158,9.5649],[22.184809,9.821003],[20.174305,10.785536],[18.162489,12.947348],[20.190475,12.827445],[22.559935,11.900557],[24.691799,11.85861],[26.641224,12.428871],[28.380188,13.491664],[29.864384,14.966181],[29.158094,17.797558],[27.94595,16.138313],[26.381882,14.851182],[24.472324,14.041991],[22.156712,13.886393],[18.895271,14.976322],[20.843842,15.544998],[23.58567,15.912927],[25.5061,16.960394],[26.907089,18.445436],[27.851223,20.243311],[28.352072,22.258598]]
        </pre>
      </div>
    </div>
  </div>

</div>
