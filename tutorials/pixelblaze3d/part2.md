---
layout: default
title: Pixelblaze 3D Tutorial - Part 2
---

<div class="page-header">
  <h1>
    {{page.title}}
    <small>Writing your own 3D patterns for Pixelblaze</small>
  </h1>
</div>

Let's pick up from where we left off in [Part 1](/tutorials/pixelblaze3d/part1)

---

### Table of contents

* [The `beforeRender` function](#the-beforerender-function)
* [Value, Brightness, and Gamma Correction](#value-brightness-and-gamma-correction)
* [Waves](#waves)
* [Sawtooth Wave (Time)](#sawtooth-wave-time)
* [Triangle Wave](#triangle-wave)
* [Sine Wave](#sine-wave)
* [Polar Waves](#polar-waves)
* [Perlin Noise](#perlin-noise)
* [Next Steps](#next-steps)

---

### The `beforeRender` Function

While the `render` and `render2D` functions are called once for each pixel, the `beforeRender` function is called once before each new frame of pixels is rendered to the strip. This is where we can prepare any data needed by all of the pixels once.

The delta argument is the number of elapsed milliseconds (with a resolution of 6.25ns!) since the last time beforeRender was called. You can use delta to create animations that run at the same speed regardless of the frame rate.

In the introduction, we used the `time` function to make patterns move. In [Part 1](/tutorials/pixelblaze3d/part1), we just did this in `render`, once for each pixel. Now we know that we should move that to `beforeRender`, since it only needs to be updated once per frame not once per pixel:

    export function beforeRender(delta) {
      t = time(.1)
    }
    
    export function render3D(index, x, y, z) {
      h = x + t
      hsv(h, 1, 1)
    }

---

### Value, Brightness, and Gamma Correction

So far all of the patterns we've created turn on all the pixels at full brightness. Let's add some variety.

Type (or copy and paste) the following code into the editor:

    export function beforeRender(delta) {
      t = time(.01)
    }

    export function render3D(index, x, y, z) {
      v = (x + y + z) / 3 + t // scroll value horizontally
      v = v % 1 // wrap value from 1.0 to 0.0 (value does not wrap automatically)
      hsv(x, 1, v)
    }

Note that we now have a static rainbow with a slightly dark line scrolling horizontally:

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/LUeI9b8.mp4" type="video/mp4">
  </video>
</div>
<br />

Value (v) is the amount of light energy. You might think that a value of 0.5 would be half as bright as 1.0, but humans actually perceive brightness on a power-law scale (search for "gamma correction" for more information).
This means that our eyes perceive 0.25 as about half as bright as 1.0. 

To make the value change more noticeable, let's square it.

Change the line to the following:

    hsv(x, 1, v * v)

Notice the value change is more pronounced? We've squared the value. Value is between 0.0 and 1.0. So a value of 0.5, for example, when squared becomes 0.25. A value of 0.6 becomes 0.36, etc. Squaring the fractional values increases the contrast.

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/JNOTgwp.mp4" type="video/mp4">
  </video>
</div>
<br />

Try cubing the value:

    hsv(x, 1, v * v * v)

and the contrast increases even more. Notice that the brightest part stays just as bright, and the darkest part just as dark, but the values in between become more gradual. That's because 1.0 cubed is still 1.0, and 0.0 cubed still equals 0.0, but .5 cubed equals .125, etc.

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/wXrrGJz.mp4" type="video/mp4">
  </video>
</div>
<br />

The final code: 

    export function beforeRender(delta) {
      t = time(.01)
    }
    export function render3D(index, x, y, z) {
      v = (x + y + z) / 3 + t // scroll value horizontally
      v = v % 1 // wrap value from 1.0 to 0.0 (value does not wrap automatically)
      hsv(x, 1, v * v * v)
    }

---

### Waves

We've only been using the `time` function to add motion so far.

Let's explore some different waveforms and how to generate them.

---

### Sawtooth Wave (Time)

The `time` function that we've been using creates a sawtooth wave between 0.0 and 1.0 that loops about every `65.536 * interval` seconds (use `0.015` for approximately 1 second).

<img src="https://luxlavalier.com/assets/img/code/sawtooth-wave.png" class="img-thumbnail" />

Let's use time to make a moving rainbow:

    export function beforeRender(delta) {
      t = time(.1)
    }

    export function render3D(index, x, y, z) {
      h = (x + y + z) / 3 + t
      hsv(h, 1, 1)
    }

We see it as a continuously scrolling rainbow, because the time wave wraps from 1.0 to 0.0, and red is at both ends of the rainbow (0.0 and 1.0).

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/sE69gvC.mp4" type="video/mp4">
  </video>
</div>

---

### Triangle Wave

The `triangle` function converts a sawtooth wave between 0.0 and 1.0, like that returned by the `time` function, to a triangle wave between 0.0 and 1.0. The value passed to `triangle` is automatically wrapped between 0.0 and 1.0.

<img src="https://luxlavalier.com/assets/img/code/triangle-wave.png" class="img-thumbnail" />

Add the following line inside the `beforeRender` function:

    w = triangle(t)

And then change the first line in `render2D`:

    h = x + w

The complete code:

    export function beforeRender(delta) {
      t = time(.1)
      w = triangle(t)
    }

    export function render3D(index, x, y, z) {
      h = (x + y + z) / 3 + w
      hsv(h, 1, 1)
    }

Notice now instead of constantly scrolling in one direction, it now moves back and forth!

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/wdoWPaQ.mp4" type="video/mp4">
  </video>
</div>
<br />

---

### Sine Wave

The `wave` function converts a sawtooth wave between 0.0 and 1.0, like that returned by the `time` function, to a smooth sine wave between 0.0 and 1.0. The value passed to `wave` is automatically wrapped between 0.0 and 1.0.

<img src="https://luxlavalier.com/assets/img/code/sine-wave.png" class="img-thumbnail" />

Try changing line in `beforeRender` from `triangle` to `wave`:

    w = wave(t)

The complete code:

    export function beforeRender(delta) {
      t = time(.1)
      w = wave(t)
    }

    export function render3D(index, x, y, z) {
      h = (x + y + z) / 3 + w
      hsv(h, 1, 1)
    }

Notice the wave moves back and forth more smoothly, slowing as it reaches the sides before reversing direction.

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/HWC7uTb.mp4" type="video/mp4">
  </video>
</div>
<br />

---

### Polar Waves

Like in Part 1, we can switch from Cartesian XY coordinates to polar coordinates.

    export function beforeRender(delta) {
      t = time(.1)
      w = wave(t)
    }

    export function render3D(index, x, y, z) {
      radius = hypot(x - .5, y - .5)
      h = radius + w
      v = 1
      hsv(h, 1, v)
    }

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/gpIgrkl.mp4" type="video/mp4">
  </video>
</div>
<br />

Lets change it so the value moves but the hue doesn't:

    export function beforeRender(delta) {
      t = time(.03)
    }

    export function render3D(index, x, y, z) {
      radius = hypot(x - .5, y - .5)
      w = wave(t + radius)
      h = radius * 2
      v = w
      hsv(h, 1, v * v * v)
    }

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/CcYZkl7.mp4" type="video/mp4">
  </video>
</div>
<br />

Flip the direction:

    w = wave(t - radius)

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/4CYyaWe.mp4" type="video/mp4">
  </video>
</div>
<br />

The complete code:

    export function beforeRender(delta) {
      t = time(.03)
    }

    export function render3D(index, x, y, z) {
      radius = hypot(x - .5, y - .5)
      w = wave(t - radius)
      h = radius * 2
      v = w
      hsv(h, 1, v * v * v)
    }

---

### Perlin Noise

All of the above wave functions are symmetrical waveforms.  Let's explore a random, asymmetrical, irregular waveform.

`perlin(x, y, z, seed)`

The `perlin` function generates random 3D dimensional Perlin noise waveform. Every integer value produces a different random result, with smooth transitions between them. It returns a value ranging from -1.0 to 1.0.

<img src="https://luxlavalier.com/assets/img/code/perlin-wave.png" class="img-thumbnail" />

Try this code:

    export function beforeRender(delta) {
      t = time(7) // very slow sawtooth wave, cycles every 458.752 seconds!
      noiseTime = t * 256 // noise inputs range from 0 to 255
      n = perlin(noiseTime, 0, 0, 0) // perlin returns values ranging from -1.0 to 1.0
      n = (n * 0.5) + 0.5 // adjust them to 0.0 to 1.0
    }

    export function render3D(index, x, y, z) {
      h = (x + y + z) / 3 - n
      hsv(h, 1, 1)
    }

Notice the rainbow now moves in a much less regular, predictable way.

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/HsjoYhB.mp4" type="video/mp4">
  </video>
</div>
<br />

Perlin is different in another way from the other waveforms we've tried so far: it's a three-dimensional waveform! Lets use this to make a more interesting rainbow:

    export function beforeRender(delta) {
      t = time(7)
      noiseTime = t * 256
    }

    export function render3D(index, x, y, z) {
      n = perlin(x, y, z - noiseTime, 0) // perlin returns values ranging from -1.0 to 1.0
      n = (n * 0.5) + 0.5 // adjust them to 0.0 to 1.0
      h = n
      hsv(h, 1, 1)
    }

We've mapped the three-dimensional Perlin noise waveform to the hues for each pixel, using the pixels' three dimensional XY coordinates!

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/d3P7M6v.mp4" type="video/mp4">
  </video>
</div>
<br />

Let's make it look like a lava lamp by mapping Perlin noise to value (brightness):

    export function beforeRender(delta) {
      t = time(7)
      noiseTime = t * 256
    }

    export function render3D(index, x, y, z) {
      h = perlin(x - noiseTime, y, z, 0) // perlin returns values ranging from -1.0 to 1.0
      v = perlin(x, y, z - noiseTime, 1) // use a different value for the last parameter (seed) to create a completely different set of noise
      
      h = (h * 0.5) + 0.5 // adjust them to 0.0 to 1.0
      v = (v * 0.5) + 0.5 // adjust them to 0.0 to 1.0
      v = v * v * v
      hsv(h, 1, v)
    }

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/y7duaFV.mp4" type="video/mp4">
  </video>
</div>
<br />

---

### Next Steps

Coming soon: we'll cover custom color palettes, to make going beyond rainbows easier!
