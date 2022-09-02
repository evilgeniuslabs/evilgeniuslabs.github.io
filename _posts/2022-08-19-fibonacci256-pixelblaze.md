---
layout: post
title: Fibonacci256 Pixelblaze
id: fibonacci256-pixelblaze
imgurId: D4qEjgU
excerpt: Fibonacci256 is a beautiful 166mm circular disc with 256 RGB LEDs surface mounted in a Fibonacci distribution.  Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.
categories: 
  - portfolio
  - products
published: true
redirect_from:
  - /58
  - /f256pb
sortKey: Fibonacci0256pb
---

<a href="https://i.imgur.com/D4qEjgU.gif" target="_blank"><img src="https://i.imgur.com/D4qEjgU.gif" style="width:340px"  /></a>

<!-- <a href="https://i.imgur.com/ej7igQO.png" target="_blank"><img src="https://i.imgur.com/ej7igQO.png" style="width:340px"  /></a>
<a href="https://i.imgur.com/fKj1V7K.png" target="_blank"><img src="https://i.imgur.com/fKj1V7K.png" style="width:340px"  /></a>
<a href="https://i.imgur.com/RHiNHaU.png" target="_blank"><img src="https://i.imgur.com/RHiNHaU.png" style="width:340px"  /></a>
<a href="https://i.imgur.com/FUcgUAu.png" target="_blank"><img src="https://i.imgur.com/FUcgUAu.png" style="width:340px"  /></a> -->

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

Fibonacci256 is a beautiful 166mm circular disc with 256 RGB LEDs surface mounted in a Fibonacci distribution. Swirling and pulsing like a colorful galaxy, it's mesmerizing to watch.

It consists of 256 WS2812B-Mini 3535 RGB LEDs, arranged into a circular <a href="https://en.wikipedia.org/wiki/Fermat%27s_spiral">Fermat's spiral</a> pattern.

I have created several LED art pieces in Fibonacci patterns.  They are all very labor intensive to create, and so are fairly expensive and limited in quantity.  I wanted to come up with a Fibonacci layout that was at least slightly easier to create, and therefore more affordable.

I have RGB LEDs in just about every form they come: strips, strings, rings, discs, etc.  The LEDs on most discs are arranged in very regular rings.  Fibonacci256 is different.  The LEDs are arranged in a Fibonacci distribution.  The makes the layout very organic and seemingly messy.  But with the proper animation, spiral patterns emerge with spectacular results.

Each of the 256 WS2812B-Mini 3535 RGB LEDs has its own decoupling capacitor built in.  The top and bottom of the PCB are large 5V and GND planes, to allow for the large amount of current required by the 256 LEDs.  The max theoretical frame rate with four way parallel output is ~130 FPS.

<a class="btn btn-success" href="https://www.tindie.com/products/19429">Buy on Tindie</a>

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

- LED Type: WS2812 / SK6812 / NeoPixel
- Pixels: 256
- Data Speed: 800 Kbps 270ns/630ns
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
[[122,126],[99,120],[90,109],[87,96],[90,82],[97,69],[108,57],[123,49],[141,45],[160,45],[179,50],[198,59],[214,74],[227,92],[236,114],[240,138],[238,163],[231,188],[218,211],[199,231],[132,255],[159,248],[182,235],[202,218],[217,198],[227,175],[231,152],[230,129],[224,107],[214,89],[200,74],[184,63],[166,57],[149,56],[133,59],[119,66],[109,76],[103,88],[103,102],[112,116],[117,103],[119,88],[127,77],[140,71],[154,68],[170,70],[185,77],[199,88],[211,103],[218,121],[222,141],[221,163],[214,184],[202,205],[186,222],[165,236],[141,245],[115,249],[88,247],[29,208],[51,224],[75,235],[101,241],[126,240],[149,234],[170,223],[188,209],[201,191],[209,172],[212,152],[211,132],[205,115],[195,101],[183,90],[169,84],[155,82],[142,86],[132,95],[127,114],[138,107],[151,98],[165,98],[177,103],[188,112],[196,126],[201,142],[201,159],[196,177],[187,195],[173,210],[155,222],[134,230],[112,233],[88,230],[64,223],[43,209],[24,191],[9,168],[0,142],[4,98],[4,125],[10,151],[22,174],[37,194],[56,209],[77,219],[99,223],[121,223],[141,218],[159,208],[173,195],[182,180],[188,164],[189,148],[185,134],[177,122],[166,114],[152,112],[144,123],[161,128],[171,138],[175,151],[174,165],[169,180],[159,193],[146,203],[129,211],[110,214],[90,212],[70,206],[51,194],[35,178],[22,158],[14,134],[11,109],[14,83],[23,58],[38,35],[76,11],[54,28],[38,48],[26,71],[20,95],[20,120],[25,142],[35,163],[48,179],[65,192],[83,200],[101,203],[119,202],[134,196],[147,187],[156,175],[160,162],[159,148],[151,136],[135,133],[145,152],[144,166],[137,177],[125,186],[111,190],[95,191],[79,187],[63,178],[49,165],[38,148],[31,128],[28,107],[31,84],[39,62],[53,41],[71,24],[93,11],[118,2],[145,0],[211,28],[187,16],[161,9],[135,8],[110,13],[87,23],[68,37],[53,55],[43,75],[39,96],[39,116],[43,135],[52,151],[64,164],[78,173],[93,177],[107,177],[120,172],[129,162],[133,146],[119,153],[108,161],[94,163],[81,160],[69,152],[58,139],[51,124],[49,106],[50,87],[57,69],[68,51],[83,36],[103,25],[125,18],[149,16],[174,20],[197,29],[219,44],[238,64],[255,133],[250,106],[240,81],[225,60],[206,44],[184,32],[162,26],[139,25],[117,29],[98,38],[82,50],[70,65],[63,82],[60,99],[62,115],[68,129],[77,140],[89,147],[103,148],[118,138],[106,134],[91,131],[80,122],[75,110],[73,95],[76,80],[84,65],[96,52],[112,42],[130,36],[150,34],[172,37],[192,45],[211,59],[227,77],[239,98],[246,123],[248,149],[243,176],[232,202]]
        </pre>
      </div>
    </div>
  </div>
</div>

---

### Patterns

Fibonacci256 comes with a wide variety of patterns built-in.
By default, it will automatically play a playlist of pre-selected patterns.
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
