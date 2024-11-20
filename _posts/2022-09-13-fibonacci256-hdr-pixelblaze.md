---
layout: post
title: Fibonacci256 HDR Pixelblaze
id: fibonacci256-hdr-pixelblaze
imgurId: D4qEjgU
excerpt: Fibonacci256 HDR is a beautiful 166mm circular disc with 256 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories: 
  - portfolio
  - products
published: true
redirect_from:
  - /61
  - /f256hdr
  - /f256hdrpb
sortKey: Fibonacci0256hdrpb
---

<a href="https://i.imgur.com/D4qEjgU.gif" target="_blank"><img src="https://i.imgur.com/D4qEjgU.gif" style="width:340px"  /></a>

<!-- <a href="https://i.imgur.com/ej7igQO.png" target="_blank"><img src="https://i.imgur.com/ej7igQO.png" style="width:340px" /></a> -->

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

<a href="https://lectronz.com/products/fibonacci256-hdr-166mm" alt="Buy it on Lectronz"><img src="https://lectronz-images.b-cdn.net/static/badges/buy-it-on-lectronz-small.png" /></a>

Fibonacci256 HDR is a beautiful 166mm circular disc with 256 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It consists of 256 SK9822-EC20 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

I have created several LED art pieces in Fibonacci patterns.  They are all very labor intensive to create, and so are fairly expensive and limited in quantity.  I wanted to come up with a Fibonacci layout that was at least slightly easier to create, and therefore more affordable.

I have RGB LEDs in just about every form they come: strips, strings, rings, discs, etc.  The LEDs on most discs are arranged in very regular rings.  Fibonacci256 is different.  The LEDs are arranged in a Fibonacci distribution.  The makes the layout very organic and seemingly messy.  But with the proper animation, spiral patterns emerge with spectacular results.

The PCB includes 17 0.1uF decoupling capacitors.  The top and bottom of the PCB are large 5V and GND planes, to allow for the large amount of current required by the 256 LEDs.  The LEDs can be driven at up to 30MHz for insanely high frame rates.  They also support 8bit color per channel, like WS2812, but also 5bit brightness control.  This allows for much better color depth at low brightness.

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

### Connecting

Your Fibonacci256 should automatically play a playlist of pre-selected patterns endlessly.

For more control, you can connect to it via wi-fi.

##### To connect your Fibonacci256 to a wi-fi network:

1. If not already connected to a wi-fi network, your Fibonacci256 will create its own network named Pixelblaze_XXXXXXX,
   where XXXXX is a code unique to your Fibonacci256. You should see it in the list of wi-fi networks available on
   a computer or mobile device:

   <img src="/images/setup/wifi-android.png" class="img-thumbnail" style="width: 240px" />

   **Note:** If you can't find the Fibonacci256's wi-fi network, it may not be in setup mode.
   
   To put it in to setup mode:
   1. Press and hold the button for 5 seconds.
   1. If the status LED on the back flashes 5 times, it's now in setup mode.
   1. If the status LED on the back flashes once, press and hold the button for 5 more seconds.
   The status LED on the back should now flash 5 times, 
   1. It should now be in setup mode and its wi-fi network should now appear in the list on your computer or mobile device.

1. Connect to this network from a computer or mobile device.
1. You should see a pop-up and/or automatically get redirected to configure the Fibonacci256's wi-fi settings.
   If not, open a browser and go to [http://192.168.4.1](http://192.168.4.1)

   <img src="/images/setup/wifi-settings.jpeg" class="img-thumbnail" style="width: 240px" />

In WiFi Settings you an configure your Fibonacci256 to run in one of two modes:

---

##### Client Mode - Connect to a network

In this mode your Fibonacci256 can connect to an existing wi-fi network.
Use this mode while at home or another location with an existing wi-fi network that you can connect to.

1. Choose the wi-fi network to which you'd like to connect, or enter the SSID (Name) if you know it, it's hidden, etc.

   <img src="/images/setup/wifi-settings-2.jpeg" class="img-thumbnail" style="width: 240px" />

1. Enter the password for the wi-fi network.
1. Leave **Enable Discovery Service** enabled to use the [Pixelblaze Discovery Service](http://discover.electromage.com),
   which makes it much easier to find your Pixelblaze on your wi-fi network later.
1. Click Submit to connect.

   <img src="/images/setup/wifi-settings-3.jpeg" class="img-thumbnail" style="width: 240px" />

1. Once it has connected, it will have an IP address on your wi-fi network.
1. The computer or mobile device you're using should automatically re-connect to its previous network (your home wi-fi, mobile data, etc).
1. If you left it enabled, use the [Pixelblaze Discovery Service](http://discover.electromage.com) to find your Fibonacci256.
1. If you're unable to find your Fibonacci256's IP address, you can use [these instructions for finding a Raspberry Pi](https://www.raspberrypi.org/documentation/remote-access/ip-address.md).

---

##### AP Mode - Create a stand-alone network

In this mode your Fibonacci256 will create its own wi-fi network that you can connect to from another device.
Use this mode when outdoors or away from other wi-fi networks.

If you've already chosen **Client Mode** and followed the instructions above, skip down to [**Next Steps**](#next-step-settingssetupsettings)

1. Enter an SSID (Name).
   This is the name of the wi-fi network that you will connect to from other devices to configure your Fibonacci256.
1. Enter a password at least 8 characters long. Passwords with fewer than 8 characters will not work.
1. Now you should be able to use a computer or mobile device to connect to the wi-fi network with the SSID (name)
   you entered in step one above.
1. Once connected, open a browser and enter the address [http://192.168.4.1](http://192.168.4.1)

---

Congratulations! You should now be able to connect to and configure your Fibonacci256!

### Settings

After you've gotten your Fibonacci256 connected to a wi-fi network,
there are a few settings you should check and be aware of.

Open your Fibonacci256's web app and click on the **Settings** tab.

We won't go over every setting on this page, just the ones that are important for the use of your Fibonacci256.

- Name: you can give your Fibonacci256 a unique name to differentiate it from others. This is especially useful if you have multiple Fibonacci256s and/or Pixelblaze controllers on the same network.
- LED Settings:
- Limit Brightness: **Warning!** we recommend you keep this **at or below 50%!**
  It is possible for high brightnesses and patterns that use a lot of white or desaturated colors to draw a lot of power, potentially causing high temperatures and reducing the LED life time.

These settings should **always** be set to the following values to match the type and quantity of LEDs in your Fibonacci256:

- LED Type: APA102 / SK9822 / DotStar
- Pixels: 256
- Data Speed: 2 MHz
- Color Order: GRB
- CPU Speed: 240 MHz (Fastest)

---

### Mapper

You shouldn't need to change anything on the **Mapper** tab.
This page just contains the pixel map, which is the location of each of your Fibonacci256's LEDs. It's used by the Pixelblaze controller in patterns.

If you ever do need to reset to the Fibonacci256's default map, use these values:

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
[[133,126],[164,131],[178,140],[186,152],[191,164],[192,178],[190,192],[185,206],[178,219],[167,230],[154,241],[140,249],[123,255],[96,248],[114,245],[129,240],[143,233],[156,223],[165,212],[172,200],[176,187],[177,173],[174,160],[166,147],[149,134],[152,148],[161,163],[162,177],[160,191],[154,203],[145,214],[134,223],[121,230],[106,234],[90,236],[73,235],[56,231],[23,202],[37,211],[53,218],[69,222],[85,223],[100,222],[114,218],[126,211],[136,202],[144,190],[148,177],[147,161],[137,138],[136,153],[135,172],[130,186],[121,196],[109,203],[96,208],[82,210],[67,209],[53,205],[38,198],[24,188],[12,176],[0,133],[7,149],[17,163],[28,175],[41,184],[54,191],[68,195],[82,195],[96,193],[108,187],[118,177],[126,162],[122,146],[111,166],[99,175],[86,180],[73,180],[59,177],[46,172],[34,163],[24,152],[15,138],[9,123],[5,106],[17,64],[15,81],[16,98],[19,114],[25,129],[33,141],[43,152],[54,159],[67,164],[81,165],[95,162],[110,152],[120,133],[96,148],[80,151],[66,148],[54,142],[44,132],[37,121],[31,107],[28,92],[28,77],[30,60],[36,44],[44,28],[68,16],[58,29],[49,44],[44,59],[41,74],[41,89],[44,103],[50,115],[59,126],[70,134],[84,138],[104,136],[94,128],[78,122],[67,112],[60,101],[56,88],[55,74],[57,59],[63,45],[71,32],[81,20],[94,9],[110,0],[137,2],[120,8],[106,16],[93,26],[83,37],[76,50],[71,63],[70,77],[72,90],[78,103],[89,114],[111,123],[103,112],[90,98],[86,84],[85,70],[89,57],[95,45],[105,34],[116,25],[130,18],[145,13],[162,11],[179,11],[217,35],[201,28],[184,24],[168,23],[152,25],[138,29],[125,36],[114,45],[106,56],[101,68],[100,82],[104,98],[117,107],[113,86],[115,71],[122,59],[132,49],[143,42],[157,38],[172,36],[187,37],[202,41],[217,48],[232,58],[251,98],[241,83],[229,71],[216,62],[202,55],[187,51],[173,50],[159,52],[147,57],[136,66],[128,77],[123,95],[128,114],[136,88],[146,76],[158,69],[171,65],[185,65],[198,69],[212,75],[224,84],[235,95],[244,109],[251,125],[255,142],[246,168],[245,151],[241,134],[235,120],[227,107],[216,96],[205,87],[192,82],[179,80],[165,82],[152,88],[138,103],[152,102],[168,96],[182,95],[195,99],[206,106],[216,116],[224,128],[230,142],[233,158],[233,174],[231,191],[226,208],[204,224],[212,209],[218,194],[220,178],[220,163],[217,148],[212,135],[204,124],[193,115],[180,110],[165,109],[143,116],[156,120],[175,122],[187,129],[197,139],[203,151],[206,165],[207,179],[204,194],[199,209],[191,223],[180,235],[167,247]]
        </pre>
      </div>
    </div>
  </div>
</div>

---

### Patterns

Fibonacci256 comes with a wide variety of patterns built-in.
By default, it will automatically play a playlist of pre-selected patterns.

* Color Waves <a href="/downloads/f256pb/F256 Color Waves.epe"><i class="fa fa-download" aria-hidden="true"></i></a>
* Pride <a href="/downloads/f256pb/F256 Pride.epe"><i class="fa fa-download" aria-hidden="true"></i></a>
* Stars <a href="/downloads/f256pb/F256 Stars.epe"><i class="fa fa-download" aria-hidden="true"></i></a>
* Palette Noise <a href="/downloads/Palette Noise.epe"><i class="fa fa-download" aria-hidden="true"></i></a>
* Palettes Outward <a href="/downloads/Palettes Outward.epe"><i class="fa fa-download" aria-hidden="true"></i></a>

The sequencer can be configured via the web interface over wi-fi in the following ways:

##### Pattern sequencer options:

* <b><u>Off</u></b>: Continuously play your selected favorite pattern. You can manually move to the next pattern by clicking the button on the back.
* <b><u>Shuffle All</u></b>: randomly shuffle between all patterns after playing each one for an adjustable duration.
* <b><u>Playlist</u></b>: patterns can be arranged into a playlist with customizable order and duration for each pattern.

---

### Specifications

- Size: 6.54 x 6.54 x .063 inch (166 x 166 x 1.6 mm)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling)
- Designed and assembled in the US by Evil Genius Labs
