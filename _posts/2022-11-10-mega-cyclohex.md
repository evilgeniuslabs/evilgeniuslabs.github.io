---
layout: post
title: Mega CycloHex
id: mega-cyclohex
imgurId: nsAjW5T.mp4
excerpt: Mega CycloHex is a beautiful set of hexagonally-nested rings with 228 RGB LEDs, six touch pads, and an Adafruit QT Py SAMD21.
categories:
  - portfolio
published: true
redirect_from:
  - /63
  - /mhex
  - /mega-hex
  - /mega-cyclohex-rings
sortKey: Mega CycloHex
---

<div class="embed-responsive embed-responsive-16by9">
   <a href="{{ post.url }}">
      <video class="post" poster="/assets/nsAjW5T.jpg" preload="auto" autoplay="autoplay" muted="muted" loop="loop">
         <source src="/assets/nsAjW5T.mp4" type="video/mp4">
      </video>
   </a>
</div>

<a href="/assets/Sz3XCdu.jpg" target="_blank"><img src="/assets/Sz3XCdu.jpg" style="width:340px" /></a>
<a href="/assets/SecOW6S.png" target="_blank"><img src="/assets/SecOW6S.png" style="width:340px" /></a><a href="/assets/hsf6LRW.png" target="_blank"><img src="/assets/hsf6LRW.png" style="width:340px" /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

---

### Details

Mega CycloHex is a beautiful set of hexagonally-nested rings with 228 RGB LEDs, six touch pads, and an Adafruit QT Py SAMD21.

I have RGB LEDs in just about every form they come: strips, strings, rings, discs, etc. I constantly seek new and novel forms.

The six mounting screws are connected to pins (A0-A3, A6 & A7) on the SAMD21 QT Py, which supports capacitive touch on these pins. Most other QT Py / XIAO boards, such as the RP2040, do not support capacitive touch.

---

### Specifications

- Size: 7.83 x 7.23 x .063 inch (199mm x 183.6mm x 30 mm)
- Designed in the US by Jason Coon of Evil Genius Labs

---

### Parts

- 19 x [12 WS2812B 5050 RGB LED Rings](https://www.aliexpress.us/item/2251832627571531.html): $31.06
  - These particular rings have two sets of three pads (5V, DI, GND) & (5V, DO, GND) and are **much** easier to wire and assemble.
  - The rings with only four pads (DI, 5V, GND, DO) are **much** harder to wire and assemble, as they require either soldering two 5V & GND wires to the small pads, or the creation of 5V & GND busses. Also the mounting holes do not match the acrylic design attached below.
  - Watch out for other listing that may show six pads, I ordered several and they arrived with only four pads.
- [22AWG flexible stranded hookup wire with silicone insulation](https://amzn.to/3jdBwpa): $16.95
  - You can use any small gauge flexible wire, but I really like this kit of 6 different color spools.
- [Metric button head hex socket screws/bolt & washer kit](https://amzn.to/3YtmgF1): $21.59
  - Actual hardware needed:
  - 6 x M2x16mm button head hex socket screws/bolts
  - 6 x M2x6mm button head hex socket screws/bolts
  - 6 x M2 washers
- [M2 hex standoff kit](https://amzn.to/3VYpNcJ): $9.99

  - Actual standoffs needed:
  - 6 x M2x10mm hex standoffs
  - 6 x M2x4mm hex standoffs (or M2x5mm, or M2x6mm, depending on diffusion desired)

    The larger the standoffs used between LEDs and the front acrylic, the more diffused (or blurred) the LEDs will appear.

- [M2 Nylon screw/bolt kit](https://amzn.to/3v4NUuh): $7.99
  - Use plastic screws/bolts, as the LED rings do not have enough room for metal M2 hardware without possibly shorting out the LED contacts.
- 6 x [M2.2 solder ring terminals](https://amzn.to/3PxTPSi): $8.31
- [Adafruit QT Py SAMD21](https://www.adafruit.com/product/4600)
  - Also available at [Digi-Key](https://www.digikey.com/en/products/detail/adafruit-industries-llc/4600/13543375)
- [Black LED Acrylic](https://www.tapplastics.com/product/plastics/cut_to_size_plastic/black_led_sheet/668): $16.17 plus ~$18 shipping, depending on your location
  - Only the front piece actually needs to be Black LED acrylic, the mount and back can be cut out of
    cheaper acrylic or other materials.
- [JST-SM pigtails](https://amzn.to/3C6sgdp): $9.99

---

### Laser Cut Acrylic Parts

- Front

  - [DXF](/images/CycloHex%2039mm%20Rings%20-%20Front.dxf)
  - [SVG](/images/CycloHex%2039mm%20Rings%20-%20Front.svg)

    <a href="/images/CycloHex%2039mm%20Rings%20-%20Front.svg" target="_blank"><img src="/images/CycloHex%2039mm%20Rings%20-%20Front.svg" style="width:340px" /></a>

- Mount

  - [DXF](/images/CycloHex%2039mm%20Rings%20-%20Mount.dxf)
  - [SVG](/images/CycloHex%2039mm%20Rings%20-%20Mount.svg)

    <a href="/images/CycloHex%2039mm%20Rings%20-%20Mount.svg" target="_blank"><img src="/images/CycloHex%2039mm%20Rings%20-%20Mount.svg" style="width:340px" /></a>

- Back

  - [DXF](/images/CycloHex%2039mm%20Rings%20-%20Back.dxf)
  - [SVG](/images/CycloHex%2039mm%20Rings%20-%20Back.svg)

    <a href="/images/CycloHex%2039mm%20Rings%20-%20Back.svg" target="_blank"><img src="/images/CycloHex%2039mm%20Rings%20-%20Back.svg" style="width:340px" /></a>

---

### Parts Cost

These costs do not include shipping. Also not included: your time, which is priceless.

I already had most of the parts on hand, so my total cost was lower, of course.

| Part              | Qty |   Total |
| ----------------- | --: | ------: |
| LED Rings         |  19 |  $27.55 |
| M2 Metal Bolt Kit |   1 |  $21.59 |
| Wire Kit          |   1 |  $16.95 |
| Black LED Acrylic |   3 |  $16.17 |
| M2 Standoff Kit   |   1 |   $9.99 |
| JST-SM Pigtail    |   1 |   $9.99 |
| M2 Nylon HW Kit   |   1 |   $7.99 |
| M2.2 Solder Rings |   1 |   $7.99 |
| Qt Py SAMD21      |   1 |   $7.50 |
| **Total**         |  25 | $125.72 |

---

### Code

Open source example firmware and web application: [https://github.com/jasoncoon/cyclohex-touch-demo/tree/39mm-rings](https://github.com/jasoncoon/cyclohex-touch-demo/tree/39mm-rings)

Flash this code, using Arduino, PlatformIO, etc, to your QT Py.

Note that if you use different LED rings, or wire them in a different order, then you'll need to adjust the coordinate maps in the code.

---

### Pixelblaze Settings & Map

If you'd rather use one of the amazing [Pixelblaze](https://shop.electromage.com/products/pixelblaze-v3-standard-wifi-led-controller) WiFi LED Controllers by [ElectroMage](https://electromage.com)
you won't be able to utilize the touch pads, but you will be able to control it via wi-fi via the awesome web UI!

Here are the settings and maps I use:

- Limit Brightness: 25
- LED Type: WS2812 / SK6812 / NeoPixel
- Pixels: 228
- Color Order: GRB (note this may be different if you used different LED rings)

Map:

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
[[60,0],[51.961525,30],[29.999998,51.961525],[-0.000003,60],[-30.000004,51.961525],[-51.961525,30.000004],[-60,-0.000005],[-51.961517,-30.000011],[-29.999994,-51.961525],[0.000001,-60],[29.999994,-51.961525],[51.961533,-29.999985],[90,-0.000005],[98.038475,-29.999998],[120.000008,-51.961525],[150,-60],[180,-51.961525],[201.961517,-30.000011],[210,0.00001],[201.961517,30.000004],[180,51.961525],[150.000015,60],[119.999985,51.961517],[98.038475,29.999992],[44.999981,-77.942284],[23.03846,-99.903809],[14.999985,-129.903809],[23.03846,-159.903809],[44.999992,-181.865326],[74.999985,-189.903809],[104.999977,-181.865326],[126.961502,-159.903824],[134.999985,-129.903793],[126.96151,-99.903809],[104.999985,-77.942284],[74.999992,-69.903809],[-45.000031,-77.942284],[-75.000031,-69.903809],[-105.000031,-77.942284],[-126.961555,-99.903809],[-135.000031,-129.903809],[-126.961555,-159.903809],[-105.000023,-181.865326],[-75.000031,-189.903809],[-45.000038,-181.865326],[-23.038509,-159.903824],[-15.000031,-129.903793],[-23.038506,-99.903809],[-90,0.000042],[-98.038475,30.000042],[-120,51.961567],[-150,60.000042],[-180,51.961567],[-201.961517,30.000046],[-210,0.000036],[-201.961517,-29.999956],[-180,-51.961483],[-150,-59.999958],[-120.000008,-51.961483],[-98.038483,-29.999969],[-44.999954,77.942314],[-23.038429,99.903839],[-14.999954,129.903839],[-23.038429,159.903839],[-44.999954,181.865356],[-74.999954,189.903839],[-104.999954,181.865356],[-126.961479,159.903839],[-134.999954,129.903839],[-126.961479,99.903839],[-104.999947,77.942314],[-74.999954,69.903839],[44.999935,77.942314],[74.999939,69.903839],[104.999939,77.942314],[126.961464,99.903839],[134.999939,129.903839],[126.961464,159.903839],[104.999939,181.865356],[74.999939,189.903839],[44.999935,181.865356],[23.038414,159.903839],[14.999939,129.903839],[23.038414,99.903839],[240,-0.000005],[248.038483,-29.999998],[270,-51.961525],[300,-60],[330,-51.961525],[351.961517,-30.000011],[360,0.00001],[351.961517,30.000004],[330,51.961525],[300,60],[270,51.961517],[248.038483,29.999992],[173.205078,-100.000046],[165.166595,-130.000046],[173.205078,-160.000046],[195.166595,-181.961578],[225.166595,-190.000046],[255.166595,-181.961578],[277.128113,-160.000061],[285.166595,-130.000031],[277.128113,-100.000046],[255.166595,-78.038521],[225.166611,-70.000046],[195.16658,-78.038528],[119.999908,-207.846161],[98.038383,-229.807678],[89.999908,-259.807678],[98.038383,-289.807678],[119.999916,-311.769196],[149.999908,-319.807678],[179.999908,-311.769196],[201.961426,-289.807678],[209.999908,-259.807678],[201.961426,-229.807678],[179.999908,-207.846161],[149.999924,-199.807678],[-0.000157,-200],[-30.000158,-208.038483],[-51.961678,-230],[-60.000153,-260],[-51.961678,-290],[-30.000149,-311.961517],[-0.000153,-320],[29.99984,-311.961517],[51.961369,-290],[59.999847,-260],[51.961372,-230],[29.999849,-208.038483],[-120.000198,-207.845978],[-150.000198,-199.807495],[-180.000198,-207.845978],[-201.961731,-229.807495],[-210.000198,-259.807495],[-201.961731,-289.807495],[-180.000198,-311.769012],[-150.000198,-319.807495],[-120.000206,-311.769012],[-98.038681,-289.807495],[-90.000198,-259.807495],[-98.038673,-229.807495],[-173.205231,-99.999771],[-195.166748,-78.038246],[-225.166748,-69.999771],[-255.166748,-78.038246],[-277.128265,-99.999771],[-285.166748,-129.999771],[-277.128265,-159.999771],[-255.166748,-181.961304],[-225.166748,-189.999771],[-195.166748,-181.961304],[-173.205231,-159.999786],[-165.166748,-129.999756],[-240,0.000355],[-248.038483,30.000355],[-270,51.96188],[-300,60.000355],[-330,51.96188],[-351.961517,30.000359],[-360,0.00035],[-351.961517,-29.999643],[-330,-51.96117],[-300,-59.999645],[-270,-51.96117],[-248.038483,-29.999657],[-173.204926,100.000305],[-165.166443,130.000305],[-173.204926,160.000305],[-195.166443,181.961823],[-225.166443,190.000305],[-255.166443,181.961823],[-277.12796,160.000305],[-285.166443,130.000305],[-277.12796,100.000305],[-255.166443,78.03878],[-225.166443,70.000305],[-195.166443,78.03878],[-119.999588,207.846344],[-98.038063,229.807861],[-89.999588,259.807861],[-98.038063,289.807861],[-119.999588,311.769379],[-149.999588,319.807861],[-179.999588,311.769379],[-201.961121,289.807861],[-209.999588,259.807861],[-201.961121,229.807861],[-179.999588,207.846344],[-149.999588,199.807861],[0.000459,200],[30.00046,208.038483],[51.961987,230],[60.000462,260],[51.961987,290],[30.00046,311.961517],[0.000459,320],[-29.999542,311.961517],[-51.961063,290],[-59.999538,260],[-51.961063,230],[-29.999533,208.038483],[120.000519,207.845825],[150.000519,199.807343],[180.000519,207.845825],[201.962036,229.807343],[210.000519,259.807343],[201.962036,289.807343],[180.000519,311.76886],[150.000519,319.807343],[120.000519,311.76886],[98.038994,289.807343],[90.000519,259.807343],[98.038994,229.807343],[173.205353,99.999512],[195.16687,78.037987],[225.16687,69.999512],[255.16687,78.037987],[277.128387,99.999512],[285.16687,129.999512],[277.128387,159.999512],[255.16687,181.961029],[225.16687,189.999512],[195.16687,181.961029],[173.205353,159.999512],[165.16687,129.999512]]
        </pre>
      </div>
    </div>
  </div>

</div>

---

### LED Ring Layout & Order

<a href="/images/CycloHex%2039mm%20Rings%20-%20Layout.png" target="_blank"><img src="/images/CycloHex%2039mm%20Rings%20-%20Layout.png" style="width:340px" /></a>

---

### Assembly Instructions

1. Solder a JST-SM socket pigtail (the one without the pins) to the QT Py. Solder the red wire to the 5V pad, the center wire (green on my JST-SM pigtail) to the MO pad, and the GND wire (white on mine) to the GND pad.
1. Peel any protective coverings from the acrylic mounting plate.
1. Align the LED rings with the mounting holes and wiring cutouts on the acrylic mounting plate.
1. Mount the LED rings to the acrylic mounting plate using plastic/nylon M2 screws and nuts.
1. Carefully flip over the mounting plate with LED rings mounted, so that you can access the solder pads.
1. Tin the input pads (5V, DI, GND) on the center LED ring.
1. Carefully solder the JST-SM pin pigtail (the one with the pins inside the shroud) wires onto the input pads of the center LED ring,
   ensuring there are no shorts between the pads. Solder the red wire to the 5V pad, the center wire (green on mine) to the DI pad, and the GND wire (white on mine) to the GND pad.

---

**Important!** - repeat these steps each time you connect another LED ring. It's much easier to find and fix problems, such as short-circuit connections between wires/pads, as you go rather than troubleshoot at the end with them all connected. If a short-circuit does happen and the connected LEDs get damaged, there's less to replace if you test as you go.

1. Check for shorts between the pads. Use a multimeter's continuity tester if possible.
1. Connect the QT Py to the center LED, and plug the QT Py in to a power source via the USB-C port.
1. Ensure the LED lights up.

---

1. For the connections between the rings, I used red wire for 5V, black for GND, and blue for DI/DO.
1. Strip a very short amount of insulation from the end of the wire.
1. Tin the wire and the output pads of the center LED ring with a small amount of solder.
1. Carefully solder the end of the wire to the output pads of the center LED ring pad.
1. Leaving at least a little slack, measure and cut the wire to go from the output pad of the center LED ring
   to the input pad of the nearest LED ring to the left (refer to the layout & order image above).
1. Repeat for the other wires from the center ring to the next ring (5V, DI->DO, GND).
1. Repeat the **Important!** testing steps above (check for shorts, connect the controller, ensure the connected rings light up.

Repeat the steps above to connect each LED ring, one at a time, testing each new LED ring as you go.

---

<a href="/images/CycloHex%2039mm%20Rings%20-%20Touch.png" target="_blank"><img src="/images/CycloHex%2039mm%20Rings%20-%20Touch.png" style="width:340px" /></a>

1. Strip and solder wires (I used white) onto the M2.2 solder ring terminals.
1. Leaving at least a little slack, measure and cut the wire to go from one of the six mounting holes on the back of the mounting plate
   to the location where you'll mount the QT Py. I mounted mine in the bottom middle.
1. Strip and solder the other end of the wire onto one of the QT Py touch pads. See the diagram above.
1. Repeat for the other touch wires.

---

### Acrylic Enclosure Assembly Instructions

1. Peel any protective coverings from the acrylic front plate.
1. Insert M2x16mm screws through the six holes in the front acrylic piece, with the screw heads on the matte side.
1. Thread the short M2 standoffs (4mm, 5mm, 6mm, etc) onto the screws on the back glossy side of the front acrylic.
1. It's easier if you leave the standoffs loose until after inserting the screws through the mounting plate.
1. Repeat for each of the six screws and holes in the front.
1. Carefully align and insert the screws through the mounting plate.
1. Hand-tighten the screws and standoffs.
1. Flip it over and put the ring terminals onto the mounting screws, in the order shown above.
1. Hand-tighten M2x10mm standoffs onto each of the six screws.
1. Plug in the QT Py and make sure all of the LED rings light up, and that touching each of the six mounting screws
   triggers a wave from that location.
1. Use double-sided foam or VHB mounting tape to secure the QT Py to the back of the mounting plate.

---

1. Peel any protective coverings from the acrylic back plate.
1. Place the back plate onto the standoffs, making sure the wall mounting hole is at the top.
1. Secure the back in place with six M2x6mm screws.

---

### Share your work!

Possibly the **MOST IMPORTANT** step: please take lots of photos and videos of your Mega CycloHex and share them with me!

- Mastodon: [@jasoncoon@leds.social](https://leds.social/@jasoncoon).
- Bluesky: [@evilgeniuslabs.org](https://bsky.app/profile/evilgeniuslabs.org).
- Instagram: [@jasoncoon](https://www.instagram.com/jasoncoon).
