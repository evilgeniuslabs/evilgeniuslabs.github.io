---
layout: post
title: Why Fibonacci?
id: why-fibonacci
imgurId: fermat-recipe.mp4
excerpt: Interactive animations show why the Fibonacci layout beats a grid or rings, why the angle is 137.508°, and where the Fibonacci numbers come from.
categories:
  - blog
  - portfolio
# Videos in /assets/ (each .mp4 with a .jpg poster), 16:9, from the fermat-explainer project:
#   fermat-recipe, -spacing, -golden-angle, -add-one, -fibonacci   scenes 1-5 (README: Rendering)
#   fermat-real-boards    scene 6 without the end card (edit/real-boards-16x9 in videokit)
# The steps below are a stepper (js/site.js section 7): one step at a time, each playing its video once.
# fermat-recipe is step 1's video, so the hero is hidden; imgurId still gives the post card and link previews.
# The rule, spacing, golden-angle, add-one and fibonacci steps are interactive: js/fermat-embed.js (built by fermat-explainer, npm run
# build:embed) replaces each one's video (data-fermat="…"), which stays as the fallback. The script goes once, after
# the last embed and before site.js: it mounts every embed above it.
hideHero: true
published: true
# Unlisted: published, but left out of the RSS feed, the board pages' teaser and the sitemap, and marked noindex.
# To launch: delete unlisted and sitemap, and uncomment the categories (home page + Portfolio menu).
unlisted: false
sitemap: true
# Short link evlgeni.us/why (/fermat is the 2016 Fermat (Lux Phyllotaxis) post).
redirect_from:
  - /why
---

I was inspired to create my first Fibonacci LED piece after seeing [this video](https://www.youtube.com/watch?v=_rt1cqsU8fo) by [Jim Bumgardner](https://krazydad.com/about) in 2015. I credit him for starting my Fibonacci obsession.

Fast forward to 2026. I've made dozens of Fibonacci designs. Recently, I saw [this brilliant post](https://www.instagram.com/p/DbYfgifReFx) by Nick Pisarro explaining the use of the golden angle in creating his beautiful [Halo Pixel](https://desert-ember.square.site/product/halo-pixel/2HSIGXSPGI5TLV2RCXBHFCMY). It got me thinking about how to explain the techniques I use.

Every Fibonacci board I make, from the tiny [One Inch Fibonacci64](/one-inch-fibonacci64) to the [Fibonacci1024](/fibonacci1024), puts its LEDs on a Fermat spiral, the same pattern as the seeds in a sunflower. It's different from the ["Fibonacci spiral"](https://en.wikipedia.org/wiki/Fibonacci_sequence) drawn from squares, which is a single curve. The Fibonacci step shows where the name comes from.

<div class="stepper" markdown="1">

<section class="step" id="rule" data-label="The rules" markdown="1">

## The rules

<div class="mb-3" data-fermat="recipe">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-recipe.jpg" data-no-lightbox aria-label="Starting at the center, LEDs are placed one at a time: step out a little, add an LED, turn 137.508°. It speeds up until 256 LEDs form a spiral." controls muted playsinline data-src="/assets/fermat-recipe.mp4"></video>
</div>
</div>

Start at the center. Then repeat:

1. Step out a little.
2. Add an LED.
3. Turn 137.508°.

Every LED on every¹ Fibonacci board is placed by those rules. LED *n* sits *n* × 137.508° around from the first, and about √*n* out from the center. The next two steps explain those two numbers.

<small id="ref1">
¹ There are exceptions to the √*n* rule, of course, like [Fibonacci64 Flower](/fibonacci64-flower) and [Fibonacci256 Expanding](/fibonacci256-expanding-hdr-pixelblaze).
</small>

</section>

<section class="step" id="golden-angle" data-label="Golden angle" markdown="1">

## The golden angle

<div class="mb-3" data-fermat="golden-angle">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-golden-angle.jpg" data-no-lightbox aria-label="600 LEDs placed at different turning angles. 90°, 120° and 135° make straight spokes, 137° and 137.5° bunch into arms, and the golden angle, 137.508°, spreads them evenly. A gauge shows how close the nearest two LEDs get." controls muted playsinline data-src="/assets/fermat-golden-angle.mp4"></video>
</div>
</div>

Any simple fraction of a turn makes spokes. At 90° (a quarter turn), every 4th LED lands on the same line. 120° makes 3 spokes, and 135° (3/8 of a turn) makes 8.

At 137° the LEDs still bunch into arms with gaps between them. 137.5° is exactly 55/144 of a turn, so the edge starts to crowd.

The golden angle, 360° ÷ φ² ≈ 137.508°, can't be written as a fraction at all, so the LEDs never line up. The animation measures how close the two nearest of 600 LEDs get, as a percentage of the spacing in a perfect honeycomb.

| angle | closest two LEDs |
|---|---|
| 90° | 4% |
| 135° | 9% |
| 137° | 55% |
| 137.5° | 82% |
| 137.508° (golden) | 87% |

The golden angle isn't the only angle that scores well, though. Other "noble" angles, like 99.5°, come close. The golden angle is the one that's furthest from every fraction.

Angles past 180° just mirror these: 222.492° (360° − 137.508°) makes the same spiral, flipped. That's why you'll sometimes see the golden angle given as about 222.5°.

</section>

<section class="step" id="spacing" data-label="√n spacing" markdown="1">

## √n spacing

<div class="mb-3" data-fermat="spacing">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-spacing.jpg" data-no-lightbox aria-label="256 LEDs on a spiral, each with its share of the board shaded. With the same step out each time, the LEDs are crowded in the middle and far apart at the edge. Shrinking the step by the square root of n spaces them evenly. Steps that shrink faster leave them far apart in the middle and crowded at the edge." controls muted playsinline data-src="/assets/fermat-spacing.mp4"></video>
</div>
</div>

With the angle set, the next question is how far each LED steps out from the center. Each cell in the animation is the part of the board that's closer to its LED than to any other.

If every step out is the same size, the edge has far more room than the middle but gets no more LEDs, so the LEDs end up crowded together in the middle and far apart at the edge. The biggest cell is about 150 times the size of the smallest.

A disc's area grows with the square of its radius, so the steps out have to shrink as you go. Stepping out by √*n* gives every LED the same share of the board, and neighboring LEDs end up evenly spaced. The biggest cell is then only 1.3 times the smallest. If the steps shrink faster than that, it flips, with the LEDs far apart in the middle and crowded at the edge.

With equal area for every LED, the pixel density is the same all the way across the board.

</section>

<section class="step" id="add-one" data-label="Add one more" markdown="1">

## You can always add one more

<div class="mb-3" data-fermat="add-one">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-add-one.jpg" data-no-lightbox aria-label="The Fibonacci layout, a square grid and concentric rings grow one LED at a time, from 1 to 1024. The grid is only square at square numbers and the rings are only tidy when full, but the spiral stays round at every count." controls muted playsinline data-src="/assets/fermat-add-one.mp4"></video>
</div>
</div>

A square grid only looks tidy at square numbers, rings only when every ring is full, and a hex grid only at 7, 19, 37, 61… The faint outlines in the animation show the spots each layout still needs to fill before it looks right again.

The spiral is an even, round disc at every count, and adding an LED never moves any of the others. The [Fibonacci32](/one-inch-fibonacci32), [Fibonacci64](/one-inch-fibonacci64), [Fibonacci128](/one-inch-fibonacci128), [Fibonacci256](/fibonacci256-hdr-pixelblaze), [Fibonacci512](/fibonacci512-hdr-pixelblaze) and [Fibonacci1024](/fibonacci1024) all use the same layout, with differently sized LEDs and different spacings, each stopped at a different count.

</section>

<section class="step" id="fibonacci" data-label="Fibonacci" markdown="1">

## Where the Fibonacci numbers come from

<div class="mb-3" data-fermat="fibonacci">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-fibonacci.jpg" data-no-lightbox aria-label="Lines join every LED, then every 2nd, 3rd, 5th, 8th, 13th, 21st and 34th LED of a 256-LED spiral. The first two zigzag. From every 3rd on, they form 3, 5, 8, 13, 21 and 34 spiral arms, straighter each time. It ends on the Fibonacci numbers." controls muted playsinline data-src="/assets/fermat-fibonacci.mp4"></video>
</div>
</div>
<script src="/js/fermat-embed.js"></script>

Look closely at any of the boards and you'll see spiral arms. Connect every 3rd LED and you get 3 arms, because the golden angle is close to 1/3 of a turn. Every 5th LED makes 5 arms curving the other way, every 8th makes 8, and so on. Each of those fractions (2/5, 3/8, 5/13, 8/21…) is a little closer to the golden angle than the last, so each set of arms is a little straighter.

Any other count, like 4 or 30, zigzags or wobbles across the board instead.

The arm counts are 3, 5, 8, 13, 21 and 34. Put 1, 1 and 2 in front and each number is the sum of the two before it. They're the Fibonacci numbers, which is where the boards get their name. Count the spirals in a sunflower head and you'll find Fibonacci numbers there too.

</section>

<section class="step" id="real-boards" data-label="Real boards" markdown="1">

## Real boards

<div class="ratio ratio-16x9 mb-3">
  <video class="post lazy" data-poster="/assets/fermat-real-boards.jpg" data-no-lightbox aria-label="The animated spiral fades into video of a real Fibonacci256 lit with the same pattern, followed by clips of four more Fibonacci boards." controls muted playsinline data-src="/assets/fermat-real-boards.mp4"></video>
</div>

The video shows a real [Fibonacci256](/fibonacci256), then the [One Inch Fibonacci64](/one-inch-fibonacci64), [One Inch Fibonacci128](/one-inch-fibonacci128), [Fibonacci512](/fibonacci512-hdr-pixelblaze) and [Fibonacci1024](/fibonacci1024). All of them follow the same rules.

</section>

</div>

More on Wikipedia: [Fermat's spiral](https://en.wikipedia.org/wiki/Fermat%27s_spiral), the [golden angle](https://en.wikipedia.org/wiki/Golden_angle), and [phyllotaxis](https://en.wikipedia.org/wiki/Phyllotaxis), the way plants arrange their leaves and seeds.

<small>The animations and videos in this post are © Evil Genius Labs LLC, licensed [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). You're welcome to share and adapt them with credit, but not commercially.</small>
