---
layout: default
title: Pixelblaze 3D Tutorial
---

<div class="page-header">
  <h1>
    {{page.title}}
    <small>Writing your own 3D patterns for Pixelblaze</small>
  </h1>
</div>

- TOC
{:toc}

The Pixelblaze controller inside your cube allows you to write your own patterns! In fact, you can view and edit the code for every pattern included with it.

Let’s get started writing your first pattern.

### Starting with 2D

If you haven't already, I would highly recommend going through the tutorials for writing 2D patterns for Pixelblaze.
They were created for Lux Lavalier, but they really apply to anything that's powered by Pixelblaze.

<b>Note</b>:
Any time you see a `render2D` function, just rename it to `render3D` instead, or you'll get an error: `⚠️ No valid render function found!`

<div class="row">
  <div class="col-md-6">
    <div class="thumbnail" id="luxlavalier">
      <div class="embed-responsive embed-responsive-4by3">
        <a href="https://luxlavalier.com/code">
          <video class="post lazy" data-poster="https://luxlavalier.com/assets/img/code/radius-center-full.jpg"
            autoplay="autoplay" muted="muted" loop="loop" playsinline>
            <source data-src="https://luxlavalier.com/assets/img/code/radius-out.mp4" type="video/mp4">
          </video>
        </a>
      </div>
      <div class="caption">
        <h3>
          <a href="https://luxlavalier.com/code" target="_blank" rel="noopener noreferrer">
            Lux Lavalier (Pixelblaze2D)
          </a>
        </h3>
      </div>
    </div>
  </div>
</div>

### Getting Started

1. If you haven't already, connect your Pixelblaze to your wi-fi, and open its web page: [Wi-Fi Setup Instructions](/setup/wifi)
1. In the Pixelblaze web app, click the Edit tab at the top of the page.
1. Delete any code in the New Expression editor.
1. Type (or copy and paste) the following code into the editor:

       export function render() {
         rgb(1, 0, 0)
       }

1. All of the pixels (LEDs) should turn red.
1. Change the second line of the code to `rgb(0, 1, 0)` and all of the pixels should turn green.
1. Change it to `rgb(0, 0, 1)` and they'll turn blue.
1. Change it to `rgb(.5, 0, .5)` and they'll turn purple.
1. Change it to `rgb(1, 1, 1)` and they'll turn white.
1. Experiment with making different colors by mixing red, green, and blue with different values between 0 and 1. The expression editor will warn you if there are any errors.

Explanation time!

### The render function

The render function gets called repeatedly, once for each pixel, in order and then wraps from the end back to the beginning. Inside the render function above, we're calling another function that is included with the Pixelblaze, called `rgb`.

---

### RGB Colors and the `rgb` function

Each pixel internally has three LEDs: Red, Green, and Blue. We can directly control those tiny little individual LEDs inside each pixel with the `rgb` function. The numbers passed to the function should be between 0.0 and 1.0. A value of 0 turns that LED off completely. A value of 1 turns that LED on completely. Any number in between turns it on a percentage. A value of 0.1 will turn it on at 10% brightness.

The Pixelblaze automatically scales this down with the global brightness you've set with the brightness slider in the upper-right corner of the page.

<a title="SharkD, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:RGB_color_solid_cube.png"><img class="img-thumbnail" style="width: 240px" alt="RGB color solid cube" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/RGB_color_solid_cube.png/512px-RGB_color_solid_cube.png"></a>

You may have found that it can be a little difficult to get just the right color by mixing different values for red, green, and blue. So let's explore a different way of handling colors: HSV!

---

### HSV Colors and the `hsv` function

We can also control the pixel colors by using the `hsv` function. 

1. Change the second line of the code to `hsv(0, 1, 1)` and all of the pixels should turn red.
   
   Here's the complete code:

       export function render() {
         hsv(0, 1, 1)
       }

1. Change it to `hsv(.33, 1, 1)` and they'll turn green.
1. Change it to `hsv(.66, 1, 1)` and they'll turn blue.
1. Change it to `hsv(1, 1, 1)` and they'll turn back to red.
1. Change it to `hsv(1, .99, 1)` and they'll turn pink.

HSV stands for Hue, Saturation, and Value.

The first number (hue) controls the color or shade from the rainbow color wheel:

<img src="https://luxlavalier.com/assets/img/code/hue-wheel.jpg" class="img-thumbnail" style="width: 240px" />

<img src="https://luxlavalier.com/assets/img/code/hue-bar.png" class="img-thumbnail" style="width: 240px" />

Notice that at 0 at the top it's red. As hue increases, it rotates clockwise so at .25 it's one quarter of the way around. At .33 or a third it's at green, then at .66 or two thirds (2/3) it's at blue, then it circles back towards red.

Using the color wheel, change the first number in the `hsv` function and it should be much easier to set the LEDs to whatever color you want.

The second number (saturation) controls the 'whiteness' of the color:

<a title="Crossover1370, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Color_circle_(RGB).svg"><img class="img-thumbnail" style="width: 240px" alt="Color circle (RGB)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Color_circle_%28RGB%29.svg/512px-Color_circle_%28RGB%29.svg.png"></a>

A saturation of zero will be white, regardless of the hue. A saturation of 1 is fully saturated, the strongest possible color of the hue. In between are more pastel colors.

The third and final number (value) controls the brightness (or inversely blackness) of the color:

<a title="HSV_color_solid_cylinder.png: SharkD
derivative work: SharkD  Talk, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:HSV_color_solid_cylinder_saturation_gray.png"><img class="img-thumbnail" style="width: 240px" alt="HSV color solid cylinder saturation gray" src="https://luxlavalier.com/assets/img/code/hsv.png"></a>

A value of zero will be black, regardless of the hue or saturation. A value of 1 will be fully bright. In between are darker colors.

Experiment with using different combinations of hue, saturation, and value to create different colors.

Changing every pixel to be the same color is neat, but what if we want each pixel to be a different color?

---

### The `index` variable

We can use the pixel index to make each LED a different color.

1. Change the first line, adding `index` in between the parentheses of the render function:

       export function render(index) {

1. Change the second line to `hsv(index / pixelCount, 1, 1)`
   
   Here's the complete code:

       export function render(index) {
         hsv(index / pixelCount, 1, 1)
       }

1. Congratulations, you made a rainbow!

    <img src="https://i.imgur.com/8rP0GLu.jpeg" class="img-thumbnail" style="width: 240px" />

The `render` function includes `index`, which is the index of the current pixel being rendered. The very first time render is called, index is set to 0. The next time, index is 1, etc, until index is the number of pixels minus one. Then it wraps back to the beginning so that the next time it's called it starts back over at 0.

---

### The `pixelCount` variable

On the second line of code, we used `pixelCount`, which is a special global variable that Pixelblaze automatically sets for us to the total number of pixels. Assuming we have 64 pixels, we used it to convert the `index` which ranges from 0 to 63, to `hue` which ranges from 0 to 1. The first time render is called, index is 0, which divided by any number is still 0. The second time, index is 1, and 1 / 64 = `0.015625`. When used as a hue, that gives a color very close to red, but slightly rotated around the color wheel towards orange. For pixel 21, we're about one-third of the way through the pixels and the color wheel: 21 / 64 = `0.328125` which, when used as a hue, gives a color close to green.

So now we have changed each pixel to be a different color, and made rainbows, but what about animation?

---

### Animation

We can use time to make the pixel colors change!

Replace the code with the following:

    export function render(index) {
      t = time(.1)
      i = index / pixelCount
      h = i + t
      hsv(h, 1, 1)
    }

And now the rainbow moves!

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/MqZ9p3Z.mp4" type="video/mp4">
  </video>
</div>
<br />

Try different values in the `time` function on the second line. You should find that `1` makes it move extremely slowly, taking over a minute to make a full rotation, while `0.005` is very fast. With low enough numbers for time, it will rotate so fast that it looks white!

Note that we've reorganized the code a bit:

1. We added a new variable `t` and set it by calling the `time` function. The `t` variable value will now slowly change over time.
2. We added a new variable `i` and set it to `index / pixelCount`, which is exactly what we were doing before: make each pixel have a unique hue, according to its index.
3. We added a new variable `h` and set it by adding `i` and `t`, so now the hue for each pixel changes over time.
4. Then we call `hsv`, passing it `h` for the hue.

---

### The `time` function

The `time` function returns a value between 0 and 1 that loops over and over. The speed it loops is controlled by the value passed to it. A value of 1 will loop about every 65 seconds. A value of .1 will loop about every 6.5 seconds. When added to a hue, this rotates the color around the hue color wheel. Since we add that to each pixel's fixed hue (`index / pixelCount`), they all rotate at the same speed.

Note that Pixelblaze automatically handles values for hue larger than 1, wrapping it around to the other side of the color wheel.  So a hue of `1.33` is the same green as `0.33`.

---

### XYZ Mapping and the `render3D` function

What if we want to use some other way of drawing patterns, other than `index`? How would we make a vertical or horizontal rainbow?

Replace the code with the following:

    export function render3D(index, x, y, z) {
      hsv(x, 1, 1)
    }

You should now see a horizontal rainbow!

   <img src="https://i.imgur.com/EZfr3yQ.jpeg" class="img-thumbnail" style="width: 240px" />

Change the hue (the first parameter inside the `hsv` function) from `x` to `z` and it'll change to vertical.

   <img src="https://i.imgur.com/2ahJUK5.jpeg" class="img-thumbnail" style="width: 240px" />

Change it to `(x + y + z) / 3` and it'll be diagonal!

   <img src="https://i.imgur.com/o54k9Zt.jpeg" class="img-thumbnail" style="width: 240px" />

Notice that we changed from using the `render` function to the `render3D` function. In addition to the `index` parameter, it also includes `x`, `y` and `z`. These parameters range from 0 to 1, and indicate the current pixel's three-dimensional position in the display, with `(0,0,0)` in the top left corner, and `(1,1,1)` in the bottom right.

We can animate these three dimensional rainbows the same way we did before, with time:

    hsv(x + time(.1), 1, 1)

should give you a rainbow that scrolls from right to left:

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/qhxfOai.mp4" type="video/mp4">
  </video>
</div>
<br />

To make it change direction, subtract instead of adding time:

    hsv(x - time(.1), 1, 1)

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/4kO0WuI.mp4" type="video/mp4">
  </video>
</div>
<br />

To make it scroll vertically, change `x` to `z`:

    hsv(z - time(.1), 1, 1)

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/4yvofFE.mp4" type="video/mp4">
  </video>
</div>
<br />

Diagonal:

    hsv((x + y + z) / 3 + time(.1), 1, 1)

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/ChRnxO1.mp4" type="video/mp4">
  </video>
</div>
<br />

What if we want to make it rotate, expand, or contract? For that, we need some basic trigonometry! Wait, where are you going? Come back, I promise it's not that bad!

---

### Radius

Replace the code with the following:

    export function render3D(index, x, y, z) {
      v = 1 - hypot3(x, y, z)
      hsv(1, 1, v)
    }

You should see a red quarter sphere in the back bottom left corner.

   <img src="https://i.imgur.com/Ljhf0X6.jpeg" class="img-thumbnail" style="width: 240px" />

The `hypot3` function calculates the radius of the current point, or the distance of the point `(x,y,z)` from the origin `(0,0)` (the upper-left corner). If we want the origin in the center of the display, we change the second line to:

    v = 1 - hypot3(x - .5, y - .5, z - .5)

   <img src="https://i.imgur.com/sV9sLNP.jpeg" class="img-thumbnail" style="width: 240px" />

It may be difficult to tell it's a sphere now, so let's increase the contrast by adding this line:

   v = v * v

   <img src="https://i.imgur.com/sV9sLNP.jpeg" class="img-thumbnail" style="width: 240px" />

Make it move with time:

    export function render3D(index, x, y, z) {
      t = time(.01)
      v = t - hypot3(x - .5, y - .5, z - .5)
      v = v * v
      hsv(1, 1, v)
    }

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/h5sQidd.mp4" type="video/mp4">
  </video>
</div>
<br />

Flip the direction and make it move inward by adding instead of subtracting:

    v = 1 - (t + hypot3(x - .5, y - .5, z - .5))

<div class="ratio ratio-1x1 img-thumbnail">
  <video preload="auto" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" style="width: 240px">
    <source src="https://i.imgur.com/oBLqTQK.mp4" type="video/mp4">
  </video>
</div>
<br />

Experiment by changing any of the numbers in the code with different values:

* Changing the x, y and z offsets from .5 will change the center of the circle.
* Changing the time from .1 will make it move slower or faster.

---

More coming soon!