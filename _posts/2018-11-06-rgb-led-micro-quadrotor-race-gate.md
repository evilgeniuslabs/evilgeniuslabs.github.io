---
layout: post
title: RGB LED Micro Drone Race Gate
id: rgb-led-micro-quadrotor-race-gate
categories: portfolio
imgurId: mOL28YC
videoUrl: https://www.youtube.com/embed/oqDBVKWO1fo
excerpt: RGB LED race gate for micro drones, built with a Trinket Pro, 60 NeoPixel strip, PEX pipe, and FastLED.
redirect_from:
  - /27
---

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/BnhkVe6w-w4" frameborder="0" allowfullscreen></iframe>
</div>

<br />

<div class="row">
  <a href="https://i.imgur.com/LP60W0A" target="_blank"><img src="https://i.imgur.com/LP60W0A.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/KDue2cs.gif" target="_blank"><img src="https://i.imgur.com/KDue2cs.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/mOL28YC" target="_blank"><img src="https://i.imgur.com/mOL28YC.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/VLQ5fCV" target="_blank"><img src="https://i.imgur.com/VLQ5fCV.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/WNybN7b.mp4" target="_blank"><img src="https://i.imgur.com/V9kHfCS.gif" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/M060Hxu.jpg" target="_blank"><img src="https://i.imgur.com/M060Hxu.jpg" class="col-sm-4 col-xs-12" /></a>
  <a href="https://i.imgur.com/HSkjbnz.jpg" target="_blank"><img src="https://i.imgur.com/HSkjbnz.jpg" class="col-sm-4 col-xs-12" /></a>
</div>

------

<h3>Table of Contents</h3>

- TOC
{:toc}

### Controller Options

[Wi-Fi LED Controller](https://www.evilgeniuslabs.org/wifi-led-controller)

[Mini Wi-Fi LED Controller](https://www.evilgeniuslabs.org/mini-wifi-led-controller)

[Trinket Pro Controller](https://www.evilgeniuslabs.org/trinket-pro-rgb-led-micro-quadrotor-race-gate)

[Nano v3 Controller](https://www.evilgeniuslabs.org/nano-v3-rgb-led-micro-quadrotor-race-gate)


### Gate Assembly Instructions

Each gate requires:

* [3/4" white PEX pipe/tubing](https://www.homedepot.com/p/Apollo-3-4-in-x-10-ft-White-PEX-Pipe-APPW1034/301541221)
* NeoPixels, 60 LEDs per meter
* Two 90 degree elbows
* Two tees
* Two flanges (feet)
* Two 1.5" sections of 3/4" white PEX pipe used as fitting couplers

I used acetone to remove the markings from the pipe before assembly.

I built one gate with 3/4" PEX [elbows](https://www.homedepot.com/p/Apollo-3-4-in-Plastic-PEX-Barb-90-Degree-Elbow-5-Pack-PXPAE345PK/301541108) and [tees](https://www.homedepot.com/p/Apollo-3-4-in-Plastic-PEX-Barb-Tee-5-Pack-PXPAT345PK/301541249) from the hardware store.  They only had them in black, and I didn't care for how they looked, so I decided to [design and 3D print them in white PLA](https://www.thingiverse.com/thing:3200653).  They also didn't have any flanges for feet.

The white PEX pipe is great at diffusing the light from the LEDs, but I realized it was still very irregular and the strip could move around inside the pipe.

<img src="https://i.imgur.com/TK1Mo66.jpg" class="img-responsive" />

So I cut thin strips of white floral craft styrofoam, one on the front and one on the back of each LED strip.  Then I slid the LEDs into the pipes.  They no longer moved, and they were much better centered inside the pipe.  The light was much more regular.

<img src="https://i.imgur.com/YtBD7k4.jpg" class="img-responsive" />

<img src="https://i.imgur.com/ojRlkRk.jpg" class="img-responsive" />

You might try using one thicker strip of foam on the front of the LEDs for even better diffusion, but then I don't think as much light would bounce around to the back.  I chose to point the LEDs towards the inside of the gate.

Ensure the input wires and JST-SM connector stick out one end, through a flange, coupler (short section of pipe), and tee.

All the pipe sections and fittings are just press fit together.  I did not use pipe glue.  If they're loose, you could use a bit of hot glue.

### Gate Sizes and Pipe Dimensions

#### MultiGP Tiny Whoop Class 19"x19" gate

- Four 19" pipe sections

The [MultiGP Tiny Whoop Class](https://www.multigp.com/class-specifications/) 19"x19" gate required 2 meters of LEDs, which fit nearly perfectly.

#### MultiGP Tiny Whoop Class 19" round gate

- One 5' pipe section

The [MultiGP Tiny Whoop Class](https://www.multigp.com/class-specifications/) 19" round gate required a little less than 2 meters of LEDs.  I had to trim 18 LEDs off the end.

#### Large gate

- Two 15" horizontal pipe sections
- Two 10.5" vertical pipe sections

The large gate has some space between the LED strips and the end fittings, but I don't feel it made much of a difference visually.

#### Medium gate

- Two 12.5" horizontal pipe sections
- Two 9.5" vertical pipe sections

I measured and cut the medium gate size so each LED strip would end right where the fittings started inside the pipe sections.

#### Small gate

I built one small gate that did not require cutting or splicing the LED strip.  I just measured and cut the pipe, then slid the LEDs and styrofoam through the pipe and fittings.

- Two 10.75" horizontal pipe sections
- Two 7" vertical pipe sections
- Two 1.5" pipes used as fitting couplers

The two larger gates I built required cutting the 60 LED strip into four pieces:

- 16 LEDs in each horizontal section
- 12 LEDs in each vertical section

I carefully counted, measured, re-counted, and re-measured before marking and cutting the LED strips.  I then carefully measured, cut, arranged and soldered 22 AWG wires between the output of one 12 LED strip to the input of one 16 LED strip.  Repeat for the next strip of 12, then the final strip of 16 LEDs.
