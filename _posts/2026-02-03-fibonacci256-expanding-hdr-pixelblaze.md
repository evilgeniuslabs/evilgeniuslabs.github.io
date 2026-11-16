---
layout: post
title: Fibonacci256 Expanding HDR
id: fibonacci256-expanding-hdr-pixelblaze
imgurId: 0OlTim6.mp4
excerpt: Fibonacci256 Expanding HDR is a beautiful 166mm circular disc with 256 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /f256eh
  - /f256expandinghdr
sortKey: Fibonacci0256expandinghdr
lectronz: fibonacci256-expanding-166mm-disc-w-256-rgb-leds
gallery:
  - src: "/assets/XpEm2VJ.jpg"
    alt: "Fibonacci256 Expanding HDR on a wall, glowing in red and purple spiral arms"
  - src: "/assets/8FVEf2V.jpg"
    alt: "Fibonacci256 Expanding HDR glowing in magenta and blue spirals"
  - src: "/assets/tmK3E7x.jpg"
    alt: "Fibonacci256 Expanding HDR glowing blue with a pink center"
  - src: "/assets/1pdD2p2.jpg"
    alt: "Fibonacci256 Expanding HDR glowing blue and green spirals"
  - src: "/assets/v0Knj3W.jpg"
    alt: "Fibonacci256 Expanding HDR glowing cyan and green with a yellow center"
  - src: "/assets/p7sbXcL.jpg"
    alt: "Fibonacci256 Expanding HDR glowing teal and green"
---

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci256 Expanding HDR is a beautiful 166mm circular disc with 256 RGB LEDs surface mounted in a Fibonacci layout. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

The 256 SK9822-EC20 HDR RGB LEDs start out close together in the center and gradually get larger and further apart. This gives an illusion of expansion, especially with the right animation.

I have created several LED art pieces in Fibonacci patterns. They are all very labor intensive to create, and so are fairly expensive and limited in quantity. I wanted to come up with a Fibonacci layout that was at least slightly easier to create, and therefore more affordable.

I have RGB LEDs in just about every form they come: strips, strings, rings, discs, etc. The LEDs on most discs are arranged in very regular rings. Fibonacci256 is different. The LEDs are arranged in a Fibonacci distribution. The makes the layout very organic and seemingly messy. But with the proper animation, spiral patterns emerge with spectacular results.

{% include fermat-spiral.html %}

---

### Connecting

Your Fibonacci should automatically play a playlist of pre-selected patterns endlessly.

For more control, you can connect to it via wi-fi.

To connect your Fibonacci to a wi-fi network:

1. If not already connected to a wi-fi network, your Fibonacci will create its own network named Pixelblaze_XXXXXXX,
   where XXXXX is a code unique to your Fibonacci. You should see it in the list of wi-fi networks available on
   a computer or mobile device:

   <img alt="Phone Wi-Fi settings showing the Pixelblaze_807656 network, saved with no internet access" src="/images/setup/wifi-android.png" class="img-thumbnail" style="width: 240px" />

   **Note:** If you can't find the Fibonacci's wi-fi network, it may not be in setup mode.

   To put it in to setup mode:
   1. Press and hold the button for 5 seconds.
   1. If the status LED on the back flashes 3 times, it's now in setup mode.
   1. If the status LED on the back flashes once, press and hold the button for 5 more seconds.
      The status LED on the back should now flash 3 times,
   1. It should now be in setup mode and its wi-fi network should now appear in the list on your computer or mobile device.

1. Connect to this network from a computer or mobile device.
1. You should see a pop-up and/or automatically get redirected to configure the Fibonacci's wi-fi settings.
   If not, open a browser and go to [http://192.168.4.1](http://192.168.4.1)

   <img alt="Pixelblaze WiFi Settings page on a phone, listing nearby networks to connect to" src="/images/setup/wifi-settings.jpeg" class="img-thumbnail" style="width: 240px" />

In WiFi Settings you can configure your Fibonacci to run in one of two modes:

---

Client Mode - Connect to a network

In this mode your Fibonacci can connect to an existing wi-fi network.
Use this mode while at home or another location with an existing wi-fi network that you can connect to.

1. Choose the wi-fi network to which you'd like to connect, or enter the SSID (Name) if you know it, it's hidden, etc.

   <img alt="Pixelblaze WiFi Settings on a phone with the network name and password filled in and the Submit button" src="/images/setup/wifi-settings-2.jpeg" class="img-thumbnail" style="width: 240px" />

1. Enter the password for the wi-fi network.
1. Leave **Enable Discovery Service** enabled to use the [Pixelblaze Discovery Service](http://discover.electromage.com),
   which makes it much easier to find your Pixelblaze on your wi-fi network later.
1. Click Submit to connect.

   <img alt="Pixelblaze WiFi Settings on a phone after pressing Submit, showing Connecting" src="/images/setup/wifi-settings-3.jpeg" class="img-thumbnail" style="width: 240px" />

1. Once it has connected, it will have an IP address on your wi-fi network.
1. The computer or mobile device you're using should automatically re-connect to its previous network (your home wi-fi, mobile data, etc).
1. If you left it enabled, use the [Pixelblaze Discovery Service](http://discover.electromage.com) to find your Fibonacci.
1. If you're unable to find your Fibonacci's IP address, you can use [these instructions for finding a Raspberry Pi](https://www.raspberrypi.org/documentation/remote-access/ip-address.md).

---

AP Mode - Create a stand-alone network

In this mode your Fibonacci will create its own wi-fi network that you can connect to from another device.
Use this mode when outdoors or away from other wi-fi networks.

If you've already chosen **Client Mode** and followed the instructions above, skip down to [**Next Steps**](#settings)

1. Enter an SSID (Name).
   This is the name of the wi-fi network that you will connect to from other devices to configure your Fibonacci.
1. Enter a password at least 8 characters long. Passwords with fewer than 8 characters will not work.
1. Now you should be able to use a computer or mobile device to connect to the wi-fi network with the SSID (name)
   you entered in step one above.
1. Once connected, open a browser and enter the address [http://192.168.4.1](http://192.168.4.1)

---

<!-- Congratulations! You should now be able to connect to and configure your Fibonacci! -->

### Settings

After you've gotten your Fibonacci connected to a wi-fi network,
there are a few settings you should check and be aware of.

Open your Fibonacci's web app and click on the **Settings** tab.

We won't go over every setting on this page, just the ones that are important for the use of your Fibonacci.

- Name: you can give your Fibonacci a unique name to differentiate it from others. This is especially useful if you have multiple Fibonaccis and/or Pixelblaze controllers on the same network.
- LED Settings:
- Limit Brightness: **Warning!** we recommend you keep this **at or below 50%!**
  It is possible for high brightnesses and patterns that use a lot of white or desaturated colors to draw a lot of power, potentially causing high temperatures and reducing the LED life time.

These settings should **always** be set to the following values to match the type and quantity of LEDs in your Fibonacci256:

- LED Type: APA102 / SK9822 / DotStar - HDR
- Pixels: 256
- Data Speed: 2 MHz
- Color Order: BGR
- CPU Speed: 240 MHz (Fastest)

---

### Mapper

You shouldn't need to change anything on the **Mapper** tab.
This page just contains the pixel map, which is the location of each of your Fibonacci's LEDs. It's used by the Pixelblaze controller in patterns.

If you ever do need to reset to the Fibonacci's default map, use these values:

<div class="accordion" id="accordion">

  <div class="accordion-item">
    <h4 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Pixelblaze Map (click to expand)</button></h4>
    <div id="collapseOne" class="accordion-collapse collapse" data-parent="#accordion" aria-labelledby="headingOne">
      <div class="accordion-body">
        <pre>
[[84.786,-73.323],[94.964,-74.919],[100.563,-78.109],[104.912,-82.577],[108.161,-88.175],[110.218,-94.751],[110.93,-102.12],[110.146,-110.063],[107.734,-118.324],[103.594,-126.618],[97.674,-134.636],[89.97,-142.049],[80.534,-148.523],[65.399,-142.5],[75.492,-138.188],[84.107,-132.656],[91.132,-126.214],[96.507,-119.176],[100.221,-111.849],[102.313,-104.525],[102.854,-97.469],[101.933,-90.917],[99.623,-85.061],[95.871,-80.036],[89.838,-75.784],[90.974,-79.96],[94.336,-85.71],[95.795,-91.761],[95.69,-98.155],[94.053,-104.734],[90.862,-111.272],[86.112,-117.506],[79.822,-123.155],[72.064,-127.928],[62.955,-131.537],[52.665,-133.704],[41.412,-134.176],[21.133,-117.56],[32.101,-121.189],[42.768,-122.859],[52.835,-122.73],[62.043,-121.005],[70.175,-117.915],[77.062,-113.713],[82.582,-108.661],[86.653,-103.018],[89.222,-97.021],[90.235,-90.852],[89.522,-84.532],[85.847,-76.907],[85.625,-81.376],[85.691,-88.406],[83.867,-94.376],[80.52,-99.748],[75.778,-104.447],[69.748,-108.287],[62.562,-111.051],[54.388,-112.516],[45.439,-112.475],[35.964,-110.749],[26.251,-107.194],[16.62,-101.713],[8.555,-77.313],[15.808,-86.07],[23.836,-93.025],[32.3,-98.156],[40.878,-101.496],[49.267,-103.126],[57.19,-103.168],[64.408,-101.778],[70.718,-99.123],[75.948,-95.365],[79.956,-90.598],[82.576,-84.63],[81.482,-79.336],[77.758,-86.084],[73.121,-90.349],[67.538,-93.215],[61.141,-94.753],[54.114,-94.881],[46.679,-93.491],[39.095,-90.491],[31.647,-85.818],[24.64,-79.454],[18.39,-71.43],[13.217,-61.832],[19.35,-37.404],[20.826,-48.496],[23.897,-58.482],[28.289,-67.165],[33.714,-74.402],[39.874,-80.103],[46.476,-84.225],[53.237,-86.769],[59.901,-87.764],[66.247,-87.247],[72.124,-85.187],[77.587,-81.163],[80.935,-75.305],[73.009,-80.343],[66.745,-81.716],[60.518,-81.321],[54.333,-79.354],[48.369,-75.861],[42.861,-70.874],[38.074,-64.452],[34.277,-56.694],[31.735,-47.746],[30.698,-37.799],[31.39,-27.095],[33.999,-15.915],[49.281,-10.1],[44.723,-20.122],[42.082,-30.051],[41.233,-39.578],[42.007,-48.43],[44.205,-56.376],[47.603,-63.223],[51.966,-68.825],[57.067,-73.069],[62.72,-75.863],[68.862,-77.076],[76.061,-76.228],[72.462,-73.763],[66.167,-71.754],[61.026,-68.245],[56.798,-63.427],[53.575,-57.437],[51.527,-50.431],[50.839,-42.593],[51.684,-34.151],[54.208,-25.366],[58.519,-16.53],[64.677,-7.962],[72.693,0],[88.39,-3.288],[79.358,-9.269],[71.985,-16.175],[66.327,-23.681],[62.387,-31.472],[60.119,-39.245],[59.436,-46.723],[60.223,-53.66],[62.358,-59.844],[65.752,-65.102],[70.498,-69.303],[78.036,-72.427],[75.457,-68.894],[70.771,-63.776],[68.125,-58.129],[66.995,-51.89],[67.347,-45.203],[69.229,-38.28],[72.692,-31.373],[77.764,-24.761],[84.427,-18.738],[92.617,-13.608],[102.218,-9.671],[113.062,-7.215],[135.58,-19.818],[124.282,-18.239],[113.63,-18.517],[103.885,-20.44],[95.267,-23.765],[87.944,-28.228],[82.035,-33.552],[77.617,-39.46],[74.725,-45.689],[73.374,-52.002],[73.6,-58.229],[75.635,-64.38],[80.004,-67.365],[78.315,-60.025],[78.899,-53.767],[81.116,-47.886],[84.829,-42.432],[89.959,-37.592],[96.414,-33.6],[104.067,-30.698],[112.749,-29.125],[122.248,-29.102],[132.307,-30.82],[142.634,-34.431],[154.655,-56.679],[146.056,-49.462],[137.026,-44.14],[127.897,-40.676],[118.98,-38.98],[110.557,-38.917],[102.873,-40.321],[96.137,-42.999],[90.518,-46.756],[86.155,-51.412],[83.179,-56.879],[81.82,-63.46],[83.431,-69.535],[85.865,-61.023],[89.583,-55.832],[94.469,-51.942],[100.386,-49.235],[107.172,-47.803],[114.628,-47.784],[122.519,-49.31],[130.581,-52.495],[138.518,-57.409],[146.015,-64.078],[152.745,-72.477],[158.377,-82.522],[151.017,-97.199],[147.613,-86.69],[142.854,-77.546],[137.039,-69.91],[130.478,-63.871],[123.476,-59.463],[116.328,-56.677],[109.307,-55.464],[102.657,-55.753],[96.582,-57.482],[91.219,-60.694],[86.504,-66.046],[90.885,-65.574],[96.865,-62.875],[103.032,-62.029],[109.416,-62.758],[115.85,-65.03],[122.102,-68.846],[127.91,-74.196],[132.992,-81.028],[137.063,-89.248],[139.846,-98.712],[141.079,-109.226],[140.53,-120.547],[126.686,-128.768],[129.331,-118.227],[130.122,-108.121],[129.238,-98.73],[126.892,-90.289],[123.32,-82.991],[118.774,-76.98],[113.507,-72.362],[107.754,-69.209],[101.7,-67.588],[95.382,-67.647],[87.913,-70.261],[92.097,-71.345],[98.922,-72.012],[104.667,-74.426],[109.705,-78.297],[113.954,-83.498],[117.232,-89.908],[119.329,-97.375],[120.038,-105.708],[119.171,-114.679],[116.57,-124.021],[112.119,-133.434],[105.749,-142.59]]
        </pre>
      </div>
    </div>
  </div>
</div>

---

### Patterns

Fibonacci comes with a wide variety of patterns built-in.
By default, it will automatically play a playlist of pre-selected patterns.

- Color Waves <a href="/downloads/f256pb/F256 Color Waves.epe" aria-label="Download Color Waves" title="Download Color Waves">{% include icon.html name="download" %}</a>
- Pride <a href="/downloads/f256pb/F256 Pride.epe" aria-label="Download Pride" title="Download Pride">{% include icon.html name="download" %}</a>
- Stars <a href="/downloads/f256pb/F256 Stars.epe" aria-label="Download Stars" title="Download Stars">{% include icon.html name="download" %}</a>
- Palette Noise <a href="/downloads/Palette Noise.epe" aria-label="Download Palette Noise" title="Download Palette Noise">{% include icon.html name="download" %}</a>
- Palettes Outward <a href="/downloads/Palettes Outward.epe" aria-label="Download Palettes Outward" title="Download Palettes Outward">{% include icon.html name="download" %}</a>

The sequencer can be configured via the web interface over wi-fi in the following ways:

Pattern sequencer options:

- <b><u>Off</u></b>: Continuously play your selected favorite pattern. You can manually move to the next pattern by clicking the button on the back.
- <b><u>Shuffle All</u></b>: randomly shuffle between all patterns after playing each one for an adjustable duration.
- <b><u>Playlist</u></b>: patterns can be arranged into a playlist with customizable order and duration for each pattern.

---

### Pixelblaze Settings

You can download this backup file <a href="/downloads/Fibonacci256 Expanding HDR.pbb">Fibonacci256 Expanding HDR.pbb</a> and restore it with the `Restore from Backup` button at the bottom of the Pixelblaze web UI's Settings tab/page.

---

### Specifications

- Size: 6.54 x 6.54 x .063 inch (166 x 166 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling)
- Designed and assembled in the US by Evil Genius Labs

### Assembly Instructions

<img alt="3D render of the assembled Fibonacci256 Expanding HDR case from the side" src="/images/f256-eh/case-1.png" class="img-thumbnail" style="width: 320px" />
<img alt="Exploded 3D render of the acrylic front, diffuser grid, LED PCB and back panel with screws" src="/images/f256-eh/case-7.png" class="img-thumbnail" style="width: 320px" />
<img alt="Exploded side-view render of the case layers with screws and standoffs" src="/images/f256-eh/case-6.png" class="img-thumbnail" style="width: 320px" />

#### Case Kit Parts

- 1 x Acrylic front with Voronoi pattern etch
- 1 x Voronoi grid
- 1 x Fibonacci256 Expanding HDR LED PCB
- 1 x Acrylic back with Pixelblaze mounting holes
- 4 x M2x12mm screws
- 4 x M2x10mm standoffs
- 4 x M2x6mm screws

#### Pixelblaze Assembly

Pixelblaze output:

1. Place the 4 pin JST-XH connector into the holes on the left side of the Pixelblaze (GND, DAT, CLK, and 5V).
1. Flip it over and solder all four pins.

<img alt="Back of the Pixelblaze v3.6 with a 4-pin connector soldered on" src="/images/pixelblaze/pb3.jpg" class="img-thumbnail" style="width: 320px" />

Pixelblaze expansion pins:

1. Place the 7 pin header that came with the Pixelblaze Sensor Expansion in the holes in the bottom right corner of the **Pixelblaze**, not the expansion board. Note that the GND, RST, 3v3, RX, TX, IO0, and IO25 should have pins, and that IO26 will not have a pin.
1. Ensure the 7 pin header is inserted all the way down, and that there are pins in the GND, 3v3, and RX holes on the Pixelblaze.
1. Flip the Pixelblaze over and solder at least the GND, 3v3, and RX pins.

<img alt="Back of the Pixelblaze v3.6 with the GND, 3v3 and RX pins soldered" src="/images/pixelblaze/pb2.jpg" class="img-thumbnail" style="width: 320px" />

Pixelblaze Sensor Expansion Board:

<img alt="Pixelblaze v3.6 next to the Pixelblaze Sensor Expansion board" src="/images/pixelblaze/pb1.jpg" class="img-thumbnail" style="width: 320px" />

1. With the Pixelblaze right-side up, with the pins pointing upwards, flip the Sensor Expansion Board over so the audio input jack is on the bottom, pointing down.
1. Place the sensor board onto the Pixelblaze pins.
1. Ensure that the GND, 3v3, and RX pins on the Pixelblaze are lined up and inserted into the GND, 3v3, and TX pins on the Sensor Expansion board. Note that the TX pin on the Sensor Expansion board is connected to the RX pin on the Pixelblaze
1. The top of the audio input jack should be flush with, and not extend beyond the bottom of the Pixelblaze PCB.
1. Double-check the pins are aligned and match up one more time.
1. Solder at least the GND, 3v3, and TX pins on the Sensor Expansion board.

<img alt="Pixelblaze with the Sensor Expansion board stacked on it" src="/images/pixelblaze/pb4.jpg" class="img-thumbnail" style="width: 320px" />

#### Power board assembly

1. Insert the three-pin JST-XH connector into the power board as shown, flip it over, and solder the pins.
1. Insert the power connector into the power board as shown, flip it over, and solder the pins.

   <img alt="Power board with a 5.5x2.1mm barrel jack and a connector soldered on" src="/images/f256-eh/power-pcb.jpg" class="img-thumbnail" style="width: 320px" />

#### LED PCB Assembly

1. The plastic fins on the JST-XH connectors may extend past the edge of the LED PCB when inserted. If so, they can be trimmed with a pair of wire cutters:

   <img alt="Trimming the plastic fins of a JST-XH connector with flush cutters" src="/images/f256-eh/jst1.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert the JST-XH connectors with the white plastic on the back of the LED PCB. The metal legs should be on the front, the side with the LEDs:

   <img alt="JST-XH connector inserted on the back of the LED PCB, pins labelled 5V, CI, DI and G" src="/images/f256-eh/jst2.jpg" class="img-thumbnail" style="width: 320px" />

1. Flip the board over and solder all of the pins on both connectors.

   <img alt="Front of the LED PCB with the connector pins soldered through" src="/images/f256-eh/jst3.jpg" class="img-thumbnail" style="width: 320px" />

#### Acrylic Case Assembly

1. Arrange the acrylic front, diffuser grid, and LED PCB as shown. Note the position of the Voronoi grid on the front and grid pieces, they should line up. The connectors on the LED PCB should be on the top.

   <img alt="The acrylic front, Voronoi diffuser grid and LED PCB laid out side by side" src="/images/f256-eh/case1.jpg" class="img-thumbnail" style="width: 320px" />

1. Flip the acrylic front over, then flip the Voronoi grid over and place it's flat side on the glossy side of the acrylic front. Then flip the LED PCB over and place it on the grid's feet, lining up all of the mounting holes on all three pieces.

   <img alt="Edge view of the LED PCB, diffuser grid and acrylic front stacked together, held in a hand" src="/images/f256-eh/case2.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert M2x12mm screws into each of the holes in the front of the acrylic, making sure each screw extends through the acrylic, grid, and PCB.

   <img alt="Close-up of a screw through the front acrylic and stack, extending out the back" src="/images/f256-eh/case3.jpg" class="img-thumbnail" style="width: 320px" />

1. Hand-tighten M2x10mm standoffs onto each of the screws.

   <img alt="Stack with M2x10mm standoffs threaded onto the screws" src="/images/f256-eh/case4.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert M2x5mm screws into the four holes shown here, starting from the matte side, out of the glossy side, and hand-tighten M2x7mm standoffs onto them.

   <img alt="Back panel with M2x5mm screws inserted in four holes" src="/images/f256-eh/case5.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert M2x10mm screws into the two holes shown here, and hand-tighten M2x10mm standoffs onto them.

   <img alt="Back panel with M2x10mm screws and standoffs in two more holes" src="/images/f256-eh/case6.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert M2x10mm screws into the two holes shown here, and hand-tighten M2x10mm standoffs onto them.

   <img alt="Back panel with M2x10mm screws and standoffs in two more holes" src="/images/f256-eh/case6.jpg" class="img-thumbnail" style="width: 320px" />

1. Place the Pixelblaze and power board into the standoffs, insert M2x5mm screws into the holes shown here, and hand-tighten them.

   <img alt="Pixelblaze and power board mounted on the back panel, next to the LED assembly" src="/images/f256-eh/case7.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert the three-pin end of the power wire harness into the connector on the power board.
1. Insert either end of the four wire harness into the connector on the Pixelblaze.

   <img alt="Four-wire harness connected to the Pixelblaze on the back panel" src="/images/f256-eh/wiring1.jpg" class="img-thumbnail" style="width: 320px" />

1. Bend a loop into both wires, and cross them in the middle, as shown:

   <img alt="Bending a loop into the harness wires and crossing them in the middle" src="/images/f256-eh/wiring2.jpg" class="img-thumbnail" style="width: 320px" />

1. Holding the wires, flip the back panel over place it over the LED PCB as shown:

   <img alt="Holding the wires while flipping the back panel over onto the LED PCB" src="/images/f256-eh/wiring3.jpg" class="img-thumbnail" style="width: 320px" />

1. Insert the two-wire harness into the output connector (marked 5V, CO, DO, G) on the left side of the back of the LED PCB.
1. Insert the four-wire harness into the input connector (marked 5V, CI, DI, G) on the right side of the back of the LED PCB.

   <img alt="Four-wire harness plugged into the LED PCB input connector, back panel in place" src="/images/f256-eh/wiring4.jpg" class="img-thumbnail" style="width: 320px" />

1. Place the back panel onto the standoffs, lining up the screw holes. Insert and hand-tighten M2x6mm screws.

   <img alt="Pixelblaze and power board mounted on the back panel, next to the LED assembly" src="/images/f256-eh/case7.jpg" class="img-thumbnail" style="width: 320px" />
