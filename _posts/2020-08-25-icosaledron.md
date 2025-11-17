---
layout: post
title: IcosaLEDron
sortKey: IcosaLEDron
id: icosaledron
imgurId: waybbXq.mp4
# videoUrl: https://www.youtube.com/embed/SNB5xsYFCak
excerpt: IcosaLEDron is a 20-sided polyhedron with one WS2812B-Mini-3535 addressable RGB LED per face.
categories:
  - portfolio
  - retired
published: true
redirect_from:
  - /40
  - /icosaledron
  - /d20
---

<a href="https://media.giphy.com/media/UoLzutZkzOEUC1aZZ3/giphy.gif" target="_blank"><img src="https://media.giphy.com/media/UoLzutZkzOEUC1aZZ3/giphy.gif" style="width:340px"  /></a>
<a href="/assets/waybbXq.mp4" target="_blank"><img src="/assets/waybbXq.mp4" style="width:340px"  /></a>
<a href="/assets/fcWXd9l.jpg" target="_blank"><img src="/assets/fcWXd9l.jpg" style="width:340px"  /></a>
<a href="/assets/kq1mQMI.jpg" target="_blank"><img src="/assets/kq1mQMI.jpg" style="width:340px"  /></a>
<a href="/assets/uYUS46G.jpg" target="_blank"><img src="/assets/uYUS46G.jpg" style="width:340px"  /></a>
<a href="/assets/Ndzfn2W.jpg" target="_blank"><img src="/assets/Ndzfn2W.jpg" style="width:340px"  /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Details

IcosaLEDron is a 20-sided polyhedron with one WS2812B-Mini-3535 addressable RGB LED per face. Each face is an equilateral triangle printed circuit board. Each edge has five castellated edge holes in a symmetrical arrangement that allows connection at nearly any angle.

The triangles can be assembled into any [deltahedron](https://en.wikipedia.org/wiki/Deltahedron) that (obviously) does not have intersecting faces, although routing the data signal may not be possible. Some examples:

<a href="https://en.wikipedia.org/wiki/Tetrahedron" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tetrahedron.jpg/120px-Tetrahedron.jpg" style="width:120px" /> Tetrahedron</a>

<a href="https://en.wikipedia.org/wiki/Octahedron" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Octahedron.svg/120px-Octahedron.svg.png" style="width:120px" /> Octahedron</a>

<a href="https://en.wikipedia.org/wiki/Gyroelongated_square_bipyramid" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Gyroelongated_square_dipyramid.png/120px-Gyroelongated_square_dipyramid.png" style="width:120px" /> Gyroelongated Square Bipyramid</a>

<a href="https://en.wikipedia.org/wiki/Tetrahedron" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Triangulated_tetrahedron.png/120px-Triangulated_tetrahedron.png" style="width:120px" /> Tetrahedron
Augmentation
4 tets + 1 oct</a>

<a href="https://lectronz.com/stores/evilgeniuslabs" alt="I sell on Lectronz"><img src="https://lectronz-images.b-cdn.net/static/badges/i-sell-on-lectronz-medium.png" /></a>

<p>Deltahedron from <i>Wikipedia, The Free Encyclopedia</i>.  <a href="https://en.wikipedia.org/wiki/Deltahedron">https://en.wikipedia.org/wiki/Deltahedron</a>
</p>

### PCB Specifications

- Size: 1.37 x 1.19 x .063 inch (34.9 x 30.3 mm x 1.6mm)
- 2 layer printed circuit board
- FR4 substrate
- Black SMOBC (solder mask over bare copper)
- HASL (Hot Air Solder Leveling) Finish
- Designed in the US by Evil Genius Labs
- Some PCBs are assembled in the US by Evil Genius Labs

**Parts**

**Includes only the printed circuit board with LEDs**, does not include parts that are required to assemble and run it (microcontroller, power supply, wires, etc).

Parts that are **not included**, but are required to assemble and use:

- Microcontroller:
  - Any [Adafruit Feather Board](https://www.adafruit.com/category/946).
- Power supply, LiPo battery, or run off of USB power from microcontroller.
- Wires, connectors, crimp tool, etc.
- Soldering iron, solder, etc.

Parts I use in my IcosaLEDron builds (also **not included**):

- [Adafruit Feather nRF52840 Sense](https://www.adafruit.com/product/4516) is an amazing board that just fits inside and includes LiPo battery connector and charging circuitry, BLE, accelerometer, gyro, magnetometer, etc.
- [Lithium Ion Polymer Battery - 3.7v 500mAh](https://www.adafruit.com/product/1578)
- [SPDT Slide Switch](https://www.adafruit.com/product/805)
- [JST-PH Battery Extension Cable - 500mm](https://www.adafruit.com/product/1131)
- [24AWG Stranded Wire](https://amzn.to/2wpw1vj)
- [M3x6mm Button Head Hex Screws](https://amzn.to/31jA5sI)

3D printed parts:

Remixed from the fantastic [Snap-together Icosahedron (d20)](https://www.thingiverse.com/thing:2778943) by [aveday\_](https://www.thingiverse.com/aveday_)

I 3D printed all parts at high speed, 0.2mm layer height, no brim or raft.

The triangular frame parts can all be printed without supports:

- 1 x [IcosaLEDron-FeatherWing-Triangle-Full-Set.stl](https://github.com/jasoncoon/icosaLEDron/raw/main/hardware/IcosaLEDron-FeatherWing-Triangle-Full-Set.stl)

OR

- 17 x [IcosaLEDron-FeatherWing-Triangle-w-Screw-Holes.stl](https://github.com/jasoncoon/icosaLEDron/blob/main/hardware/IcosaLEDron-FeatherWing-Triangle-w-Screw-Holes.stl)
- 1 x [IcosaLEDron-FeatherWing-Triangle-w-Switch-Holder.stl](https://github.com/jasoncoon/icosaLEDron/blob/main/hardware/IcosaLEDron-FeatherWing-Triangle-w-Switch-Holder.stl)
- 1 x [IcosaLEDron-FeatherWing-Triangle-w-Feather-USB-Holder.stl](https://github.com/jasoncoon/icosaLEDron/blob/main/hardware/IcosaLEDron-FeatherWing-Triangle-w-Feather-USB-Holder.stl)
- 1 x [IcosaLEDron-FeatherWing-Triangle-w-Feather-End-Holder.stl](https://github.com/jasoncoon/icosaLEDron/blob/main/hardware/IcosaLEDron-FeatherWing-Triangle-w-Feather-End-Holder.stl)

I did have to enable supports, touching build plate only, for the dome covers.

- 20 x [IcosaLEDron-FeatherWing-Dome-Cover.stl](https://github.com/jasoncoon/icosaLEDron/blob/main/hardware/IcosaLEDron-FeatherWing-Dome-Cover.stl) (for less diffusion, brighter LEDs, for use with rigid filament)

OR

- 20 x [IcosaLEDron-FeatherWing-Dome-Cover-Thicker.stl](https://github.com/jasoncoon/icosaLEDron/blob/main/hardware/IcosaLEDron-FeatherWing-Dome-Cover-Thicker.stl) (for more diffusion, or for use with flexible filament)

### Code

Open source example firmware: [https://github.com/jasoncoon/icosaLEDron](https://github.com/jasoncoon/icosaLEDron)

### Assembly Instructions

**Note**: Double-check the position, alignment, and orientation of each component very carefully before soldering!

If you're new to soldering, I highly recommend reading through a good soldering tutorial, such as the ones by [Adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering) and [SparkFun](https://learn.sparkfun.com/tutorials/how-to-solder-through-hole-soldering).

**Important! Fire Danger!** Make sure you use a multimeter to test for shorts after each new connection, test to make sure newly-connected LEDs work, then turn off the switch and disconnect the USB cable before proceeding!. Testing after each PCB ensures that no bad connections are missed. Disconnecting power before proceeding ensures that a short circuit doesn’t damage any LEDs, components, the Feather board, the LiPo battery, etc. A short can cause damage to the LiPo, which can cause **sparks, fire, property damage, bodily harm, etc**.

1. **Check the polarity of your LiPo battery and JST extensions before assembling anything!** There is unfortunately no standard for polarity on these, apparently. My LiPo battery and JST extensions were wired backwards compared to the Feather board. Thankfully all Feathers, and likely all Adafruit products, do use the same polarity. When looking into the LiPo connector socket on the Feather board, the left pin is positive, the right pin is negative. If the connectors do not match, use a small flat screwdriver or knife to carefully pry the plastic tabs that hold the contact inside the connectors, then gently pull the wires out. Be extremely careful not to touch the exposed battery leads! Push them back in to the correct side.

   <a href="/assets/uyXCObF.jpg" target="_blank"><img src="/assets/uyXCObF.jpg" style="width:340px"  /></a>

1. Follow Adafruit's excellent instructions to create a [power switch for the LiPo battery](https://learn.adafruit.com/circuit-playground-yoyo/wiring-switch), **but I recommend also adding heat shrink tubing to insulate the exposed switch pins as well!**

1. Connect the LiPo battery, switch assembly, and Feather board. Test the power switch, ensuring it powers the Feather. Connect the Feather with a USB cable to a computer or power adapter, and ensure the battery charging light comes on when the switch is on.

1. Upload the firmware to the Feather board using Arduino, CircuitPython editor, etc. Ensure the Feather is working correctly before assembling further.

1. Cut a length of wire long enough to reach from one of the Feather board's digital output pins (I used D5) to the first LED triangle PCB. Cut it longer than needed, we can trim it down later, or tuck the excess inside.

1. Strip a few millimeters of insulation off the end of the wire, then solder to the digital output pin.

1. Repeat for the GND and BAT pins.

1. Hold two of the 3D printed triangular frame pieces securely, one in each hand. Align the hinges, then snap them together py pressing them together firmly.

   <a href="/assets/DWfeA1u.jpg" target="_blank"><img src="/assets/DWfeA1u.jpg" style="width:340px"  /></a>
   <a href="/assets/uUwZMGR.jpg" target="_blank"><img src="/assets/uUwZMGR.jpg" style="width:340px"  /></a>
   <a href="/assets/XFmD7Is.jpg" target="_blank"><img src="/assets/XFmD7Is.jpg" style="width:340px"  /></a>
   <a href="/assets/XehK5Z7.jpg" target="_blank"><img src="/assets/XehK5Z7.jpg" style="width:340px"  /></a>

1. Rotate the connected pieces along the hinge pivot, back and forth, several times to loosen the hinges. Separate the pieces by holding them firmly, one in each hand, rotating the hinge outward, then snapping them apart. Repeat for each edge of each piece. Doing this will make assembly and disassembly (if needed) of the frame much easier.

1. Insert the switch into the 3D printed triangle with the switch holder.

   <a href="/assets/65ZXbKR.jpg" target="_blank"><img src="/assets/65ZXbKR.jpg" style="width:340px"  /></a>
   <a href="/assets/qczcNjH.jpg" target="_blank"><img src="/assets/qczcNjH.jpg" style="width:340px"  /></a>
   <a href="/assets/7aG8nO4.jpg" target="_blank"><img src="/assets/7aG8nO4.jpg" style="width:340px"  /></a>
   <a href="/assets/mXnSeko.jpg" target="_blank"><img src="/assets/mXnSeko.jpg" style="width:340px"  /></a>

1. Feed the BAT, GND, and Data wires through the 3D printed triangle with the slot for the Feather's USB port edge.

1. Carefully snap the triangle PCBs apart. Hold securely and very closely on both sides of a single perforation and bend to flex and snap the perforation. Do not flex the entire panel at once. Sandpaper can be used to clean up any rough edges, but do this in a well ventilated area with a mask on to prevent breathing in the dust.

   <a href="/assets/bFaeRsp.jpg" target="_blank"><img src="/assets/bFaeRsp.jpg" style="width:340px"  /></a>

1. Strip and then solder the ends of the wires to the 5V, DI (Data In), and G (Ground) pins on one of the triangle PCBs. Use the set of three holes in the triangle PCB, not the ones on the edge.

   <a href="/assets/3gGQhnZ.jpg" target="_blank"><img src="/assets/3gGQhnZ.jpg" style="width:340px"  /></a>

1. Turn the switch on, and/or connect the USB cable, and ensure the LED on the triangle PCB lights up. Do not proceed if it does not. Ensure you've uploaded the firmware using Arduino, MicroPython editor, etc.

Take a break. Seriously. Stretch your legs. Drink some water. Go for a walk. :)

Welcome back, let's proceed.

1. Align the triangle PCB to the face. The USB connector should be aligned inside the slot in the triangle PCB. Feed the wires inside.

   <a href="/assets/tVJy7dV.jpg" target="_blank"><img src="/assets/tVJy7dV.jpg" style="width:340px"  /></a>
   <a href="/assets/zIqzECD.jpg" target="_blank"><img src="/assets/zIqzECD.jpg" style="width:340px"  /></a>

1. Insert an M3 screw in the hole above the LED, and carefully hand-tighten it with a hex driver. Do not over-tighten. Ensure the edges of the PCB are aligned with the edges of the triangle frame piece.

1. The two Feather holder pieces go on opposite faces of the icosahedron. The USB port of the Feather should be flush with the face. The other end of the Feather goes in the slots of the opposite face. One side of every triangle has a notch in the hinges, snap this edge on the same side as the Feather holder slots. Be very careful with the fragile antenna on the Feather Sense.

   <a href="/assets/A7bXd33.jpg" target="_blank"><img src="/assets/A7bXd33.jpg" style="width:340px"  /></a>
   <a href="/assets/7pB0PVg.jpg" target="_blank"><img src="/assets/7pB0PVg.jpg" style="width:340px"  /></a>
   <a href="/assets/HAcOU3v.jpg" target="_blank"><img src="/assets/HAcOU3v.jpg" style="width:340px"  /></a>
   <a href="/assets/RIPHm7J.jpg" target="_blank"><img src="/assets/RIPHm7J.jpg" style="width:340px"  /></a>

1. Assemble the IcosaLEDron 3D printed parts, with the Feather board, battery, and wires tucked inside. First, add pieces to connect the top and bottom end Feather holder pieces. Be very careful not to pinch or crimp any wires as you tuck them inside and snap more pieces on.

   <a href="/assets/54uaoeV.jpg" target="_blank"><img src="/assets/54uaoeV.jpg" style="width:340px"  /></a>
   <a href="/assets/4f1NMTF.jpg" target="_blank"><img src="/assets/4f1NMTF.jpg" style="width:340px"  /></a>
   <a href="/assets/SlgvXuE.jpg" target="_blank"><img src="/assets/SlgvXuE.jpg" style="width:340px"  /></a>
   <a href="/assets/ZVBDy8T.jpg" target="_blank"><img src="/assets/ZVBDy8T.jpg" style="width:340px"  /></a>

1. Start connecting pieces in the remaining spaces.

   <a href="/assets/z8zEMZ5.jpg" target="_blank"><img src="/assets/z8zEMZ5.jpg" style="width:340px"  /></a>
   <a href="/assets/oChHkRw.jpg" target="_blank"><img src="/assets/oChHkRw.jpg" style="width:340px"  /></a>

1. When you need to snap in a piece with two adjacent pieces, you should be able to set it in the gap, with the hinges aligned, then using your thumb and pointer finger, snap them together, one side at a time.

   <a href="/assets/deEx4IK.jpg" target="_blank"><img src="/assets/deEx4IK.jpg" style="width:340px"  /></a>

1. When you get to the last piece, with an adjacent piece on each of the three sides, follow the same steps. Set it in the gap, with the hinges aligned, then using your thumb and pointer finger, snap them together, one side at a time.

   <a href="/assets/EVAGmc1.jpg" target="_blank"><img src="/assets/EVAGmc1.jpg" style="width:340px"  /></a>
   <a href="/assets/Z4mQih3.jpg" target="_blank"><img src="/assets/Z4mQih3.jpg" style="width:340px"  /></a>
   <a href="/assets/Agdszmb.jpg" target="_blank"><img src="/assets/Agdszmb.jpg" style="width:340px"  /></a>
   <a href="/assets/8zZ65t1.jpg" target="_blank"><img src="/assets/8zZ65t1.jpg" style="width:340px"  /></a>
   <a href="/assets/nxdq3c7.jpg" target="_blank"><img src="/assets/nxdq3c7.jpg" style="width:340px"  /></a>
   <a href="/assets/vzG1QZj.jpg" target="_blank"><img src="/assets/vzG1QZj.jpg" style="width:340px"  /></a>
   <a href="/assets/yjWenJM.jpg" target="_blank"><img src="/assets/yjWenJM.jpg" style="width:340px"  /></a>

1. Ensure all pieces are firmly connected, with only minor gaps in the seams.

   <a href="/assets/Mz4SiA4.jpg" target="_blank"><img src="/assets/Mz4SiA4.jpg" style="width:340px"  /></a>
   <a href="/assets/17UN32H.jpg" target="_blank"><img src="/assets/17UN32H.jpg" style="width:340px"  /></a>
   <a href="/assets/lWi60zs.jpg" target="_blank"><img src="/assets/lWi60zs.jpg" style="width:340px"  /></a>

1. Turn on the switch, make sure everything still works and lights up.

Take another break. Stretch.

<a href="/assets/yOOUeCI.jpg" target="_blank"><img src="/assets/yOOUeCI.jpg" style="width:340px"  /></a>

1. **Turn off the switch and disconnect the USB cable.** Use a multimeter to ensure there is no voltage or shorts between the BAT and GND pins.

1. The triangle PCBs each have a small jumper pad used to direct the output direction of the serial LED data signal. We're going to connect the PCBs in the order and arrangement shown in the picture above.

1. The signal for the first four PCBs is going to be routed out of the left edge.

1. "Tin" both the center and left jumper pads, one at a time. Heat the pad with your soldering iron, then melt a small amount of solder onto the pad. Repeat for the other one. Now hold the soldering iron on both pads at once, and melt more solder onto them. The resulting solder blob should connect the two pads. Repeat if necessary. Use flux if the solder is not "sticking" to the pads.

1. Place the second triangle PCB onto the face to the left of the first PCB, with the DI pad on the second PCB aligned with the DO pin on the first. Secure it in place with M3 screws.

1. Ensure both triangle PCBs are aligned with the triangle frame pieces they are mounted to. The gap between the PCBs should be straight and even along the entire edge.

1. Tin the DO pad on one PCB, then the DI pad on the other PCB. Now connect the tinned pads by holding the soldering iron between the pads, touching both pads at the same time. Melt just enough solder into the gap to connect the pads.

1. Repeat this process on one set of GND and 5V pads. To reduce the risk of short circuit connections, you can just connect the G pads on one side, and 5V pads on the other side of the edge, so that they're not adjacent.

1. Use a multimeter to ensure there are no shorts between 5V, GND, and the data pins. If there are, rework the connections. Repeat.

1. Turn on the switch, and/or connect the USB cable. Ensure the second LED lights up. Do not proceed if it does not. Check the solder connections.

1. **Turn off the switch and disconnect the USB cable!**

1. Repeat the above steps for the next three PCBs, testing and then disconnecting power after each. Use M3 screws to keep each one in place as you solder.

Take another break. Marvel at your soldering and assembly skills, patience, and awesomeness.

You should now have the top cap of the icosaLEDron assembled!

1. The LED data signal output is going to turn right on the fifth PCB. So connect the center and right jumper pads with solder, following the same steps as before.

1. Assemble the following 10 triangle PCBs in the same way, following the order shown in the picture above, along the center of the icosahedron. Make sure you test for shorts after each new PCB, test to make sure newly-connected LED works, then **turn off the switch and disconnect the USB cable before proceeding!**

You should now have the top and center row of the icosaLEDron assembled. Repeat the above steps to complete the bottom cap of five PCBs. Remember to test after each PCB, then disconnect power.

Turn it on. Hold it in your hand. Marvel at its beauty.

<a href="/assets/KnSlyi7.mp4" target="_blank"><img src="/assets/KnSlyi7.mp4" style="width:340px"  /></a>
