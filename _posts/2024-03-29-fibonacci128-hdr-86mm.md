---
layout: post
title: Fibonacci128 HDR 86mm
id: fibonacci128-hdr-86mm
imgurId: 9m1VjmE
excerpt: Fibonacci128 is a beautiful 86mm circular disc with 128 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /72
  - /f128hdr
  - /f128hdr86mm
sortKey: Fibonacci0128-hdr-86mm
---

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci128 HDR is a beautiful 86mm circular disc with 128 SK9822-EC20 HDR RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It consists of 128 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

<a class="btn btn-success" href="https://www.tindie.com/products/19486">Buy on Tindie</a>

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

- Size: 3.39 x 3.39 x .063 inch (86 x 86 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) Finish
- Designed in the US by Evil Genius Labs

### FastLED Maps

<div class="panel-group" id="accordion0" role="tablist" aria-multiselectable="true">

  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading0One">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion0" href="#collapse0One" aria-expanded="false" aria-controls="collapse0One">
          FastLED Maps (click to expand)
        </a>
      </h4>
    </div>
    <div id="collapse0One" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        <pre>
const uint8_t  physicalToFibonacci[NUM_LEDS] { 0, 21, 42, 63, 84, 105, 126, 113, 92, 71, 50, 29, 8, 16, 37, 58, 79, 100, 121, 108, 87, 66, 45, 24, 3, 11, 32, 53, 74, 95, 116, 124, 103, 82, 61, 40, 19, 6, 27, 48, 69, 90, 111, 119, 98, 77, 56, 35, 14, 1, 22, 43, 64, 85, 106, 127, 114, 93, 72, 51, 30, 9, 17, 38, 59, 80, 101, 122, 109, 88, 67, 46, 25, 4, 12, 33, 54, 75, 96, 117, 125, 104, 83, 62, 41, 20, 7, 28, 49, 70, 91, 112, 120, 99, 78, 57, 36, 15, 2, 23, 44, 65, 86, 107, 115, 94, 73, 52, 31, 10, 18, 39, 60, 81, 102, 123, 110, 89, 68, 47, 26, 5, 13, 34, 55, 76, 97, 118 };
const uint8_t  fibonacciToPhysical[NUM_LEDS] { 0, 49, 98, 24, 73, 121, 37, 86, 12, 61, 109, 25, 74, 122, 48, 97, 13, 62, 110, 36, 85, 1, 50, 99, 23, 72, 120, 38, 87, 11, 60, 108, 26, 75, 123, 47, 96, 14, 63, 111, 35, 84, 2, 51, 100, 22, 71, 119, 39, 88, 10, 59, 107, 27, 76, 124, 46, 95, 15, 64, 112, 34, 83, 3, 52, 101, 21, 70, 118, 40, 89, 9, 58, 106, 28, 77, 125, 45, 94, 16, 65, 113, 33, 82, 4, 53, 102, 20, 69, 117, 41, 90, 8, 57, 105, 29, 78, 126, 44, 93, 17, 66, 114, 32, 81, 5, 54, 103, 19, 68, 116, 42, 91, 7, 56, 104, 30, 79, 127, 43, 92, 18, 67, 115, 31, 80, 6, 55 };

byte coordsX[NUM_LEDS] = { 137, 181, 201, 213, 219, 221, 218, 193, 198, 199, 195, 184, 160, 164, 176, 178, 175, 167, 154, 127, 142, 152, 158, 157, 142, 140, 140, 132, 119, 103, 85, 45, 65, 84, 101, 116, 126, 121, 106, 89, 70, 51, 32, 9, 25, 43, 63, 83, 104, 118, 84, 62, 42, 25, 11, 0, 11, 19, 32, 47, 68, 96, 81, 58, 43, 33, 27, 26, 49, 47, 50, 58, 74, 105, 94, 77, 70, 69, 74, 83, 125, 110, 99, 91, 90, 96, 114, 108, 112, 121, 135, 152, 193, 174, 156, 141, 129, 123, 130, 141, 155, 172, 191, 210, 239, 221, 202, 182, 164, 145, 164, 186, 206, 225, 241, 255, 248, 237, 222, 204, 182, 151, 170, 196, 214, 227, 236, 241 };
byte coordsY[NUM_LEDS] = { 130, 137, 150, 166, 184, 204, 224, 235, 216, 197, 178, 159, 141, 160, 182, 203, 222, 240, 255, 251, 237, 221, 202, 180, 147, 167, 195, 215, 229, 240, 247, 227, 228, 225, 216, 202, 181, 158, 186, 199, 206, 207, 203, 166, 177, 184, 185, 181, 166, 139, 161, 165, 161, 152, 139, 122, 96, 114, 129, 140, 146, 143, 132, 123, 110, 93, 74, 55, 39, 59, 78, 96, 112, 126, 109, 89, 69, 49, 30, 13, 0, 13, 28, 46, 67, 90, 102, 72, 50, 33, 19, 9, 21, 24, 31, 43, 60, 85, 112, 75, 57, 47, 42, 42, 74, 66, 63, 66, 75, 96, 95, 86, 85, 91, 101, 115, 142, 126, 114, 106, 105, 115, 121, 124, 134, 148, 166, 185 };
byte angles[NUM_LEDS] = { 136, 134, 139, 145, 150, 155, 161, 169, 164, 159, 154, 148, 143, 157, 162, 167, 172, 178, 183, 192, 186, 181, 176, 171, 165, 179, 184, 189, 195, 200, 205, 220, 214, 209, 203, 198, 193, 201, 206, 212, 217, 223, 228, 242, 237, 231, 226, 220, 214, 221, 229, 234, 240, 246, 251, 2, 11, 5, 255, 249, 243, 237, 252, 3, 8, 14, 20, 25, 34, 29, 23, 17, 12, 4, 21, 26, 32, 38, 43, 49, 63, 57, 52, 47, 41, 35, 44, 50, 56, 61, 66, 72, 86, 81, 75, 70, 64, 59, 69, 74, 78, 84, 89, 95, 109, 104, 98, 93, 88, 84, 97, 102, 107, 113, 118, 123, 132, 127, 121, 116, 111, 107, 121, 125, 130, 136, 141, 146 };
byte radius[NUM_LEDS] = { 18, 104, 148, 180, 207, 233, 255, 243, 218, 192, 162, 124, 67, 93, 140, 175, 204, 230, 251, 238, 213, 186, 155, 115, 46, 79, 132, 169, 196, 222, 245, 250, 229, 206, 178, 145, 103, 60, 120, 157, 188, 214, 236, 242, 221, 197, 168, 135, 87, 29, 107, 147, 179, 205, 228, 248, 235, 213, 186, 159, 121, 68, 91, 136, 168, 196, 222, 243, 231, 206, 180, 149, 109, 45, 75, 124, 160, 191, 217, 239, 248, 226, 202, 174, 139, 96, 57, 115, 154, 185, 212, 235, 243, 220, 196, 167, 132, 84, 31, 106, 147, 179, 207, 230, 239, 217, 191, 159, 124, 70, 95, 139, 173, 201, 225, 247, 234, 211, 184, 153, 114, 51, 83, 132, 167, 196, 222, 245 };
        </pre>
      </div>
    </div>
  </div>
</div>

### Pixelblaze Map

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Pixelblaze Map (click to expand)
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        <pre>
 [[45.338123,43],[58.195198,45.044418],[63.789894,48.697433],[67.25679,53.29055],[69.148987,58.495949],[69.648453,64.056137],[68.845367,69.741806],[61.471832,72.996025],[63.13755,67.613869],[63.432163,62.086205],[62.156754,56.607666],[58.897614,51.35516],[52.055382,46.306988],[53.270424,51.655849],[56.605034,57.997173],[57.343243,63.830036],[56.333427,69.295349],[53.91523,74.300003],[50.305405,78.70813],[42.49651,77.439056],[46.675785,73.711296],[49.745895,69.107109],[51.410019,63.658001],[51.13736,57.20063],[46.763866,47.90929],[46.355984,53.699272],[46.192993,61.578178],[43.881912,67.16967],[40.228294,71.405548],[35.601501,74.455147],[30.26886,76.342003],[18.813492,70.86132],[24.531694,71.116814],[30.005909,70.077301],[34.998459,67.665672],[39.233727,63.703339],[42.325642,57.586006],[40.811485,51.141201],[36.305767,58.995712],[31.356773,62.867508],[26.015711,64.71228],[20.488203,64.970779],[14.983789,63.837341],[8.355934,53.313129],[13.076317,56.473614],[18.287779,58.383907],[23.839783,58.831543],[29.621307,57.462208],[35.758469,53.3004],[40.01384,45.735569],[30.125214,51.95808],[23.597326,52.957428],[17.967846,51.866352],[13.075785,49.274487],[8.966934,45.486935],[5.732117,40.731461],[8.968613,33.316597],[11.35515,38.428303],[14.846581,42.725899],[19.452837,45.935024],[25.341887,47.654835],[33.579403,46.888714],[29.179279,43.571568],[22.570559,41.106918],[18.143475,37.281097],[15.233221,32.551777],[13.663933,27.215158],[13.371822,21.516418],[20.002306,17.147699],[19.410398,22.722937],[20.221064,28.196552],[22.624126,33.343975],[27.092329,37.92514],[36.09285,41.778229],[32.885128,37.138252],[27.868717,31.281563],[25.865625,25.613293],[25.741718,20.029524],[27.125671,14.660919],[29.809525,9.672592],[42.00972,5.970367],[37.598827,9.632435],[34.237846,14.083134],[32.15147,19.21633],[31.654659,24.971411],[33.407722,31.505299],[38.826233,34.963699],[37.025379,26.389368],[38.115402,20.254522],[40.842247,15.320278],[44.768547,11.419914],[49.612755,8.557182],[61.656063,11.863894],[56.028603,12.698933],[50.880199,14.783081],[46.464294,18.166878],[43.097244,23.023287],[41.326958,30.089825],[43.457077,37.791813],[46.517998,27.361439],[50.667374,22.317661],[55.565025,19.372162],[60.931099,18.015265],[66.525017,18.061241],[74.772781,27.083723],[69.563217,24.899553],[64.088806,24.055708],[58.528931,24.755291],[53.03693,27.39006],[47.541344,33.295383],[53.081104,32.96785],[59.553642,30.435913],[65.377167,30.321327],[70.702316,31.879082],[75.45256,34.782265],[79.506874,38.810135],[77.57753,46.544483],[74.266373,42.011993],[69.993881,38.495998],[64.777634,36.285572],[58.452179,35.860527],[49.543053,38.837841],[54.865871,40.391266],[62.355602,41.396317],[67.601547,44.257637],[71.428566,48.314262],[74.007614,53.22543],[75.375763,58.730499]]
        </pre>
      </div>
    </div>
  </div>

</div>

