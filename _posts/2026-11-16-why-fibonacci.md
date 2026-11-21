---
layout: post
title: Why Fibonacci?
id: why-fibonacci
imgurId: fermat-recipe.mp4
excerpt: Interactive animations show why a Fermat spiral beats a grid or rings, why the angle is 137.508°, and where the Fibonacci numbers come from.
categories:
  - blog
  - portfolio
# Videos in /assets/ (each .mp4 with a .jpg poster), 16:9, from the fermat-explainer project:
#   fermat-recipe, -spacing, -golden-angle, -add-one, -fibonacci   scenes 1-5 (README: Updating the site)
#   fermat-between        the "between" scene (the full one, not the YouTube video's short cut)
#   fermat-real-boards    scene 6 without the end card (edit/real-boards-16x9 in videokit)
# The steps below are a stepper (js/site.js section 7): one step at a time, each playing its video once.
# fermat-recipe is step 1's video, so the hero is hidden; imgurId still gives the post card and link previews.
# The rule, spacing, golden-angle, add-one, fibonacci and between steps are interactive: js/fermat-embed.js (built by fermat-explainer, npm run
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

Every Fibonacci board I make, from the tiny [One Inch Fibonacci64](/one-inch-fibonacci64) to the [Fibonacci1024](/fibonacci1024), puts its LEDs on a Fermat spiral, the same pattern as the seeds in a sunflower. It's different from the ["Fibonacci spiral"](https://en.wikipedia.org/wiki/Fibonacci_sequence) drawn from squares, which is a single curve. The Fibonacci section shows where the name comes from.

<div class="stepper" markdown="1">

<section class="step" id="rule" data-label="The rules" markdown="1">

## The rules

<div class="mb-3" data-fermat="recipe">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-recipe.jpg" data-no-lightbox aria-label="Starting at the center, LEDs are placed one at a time: increase the radius a little, add an LED, turn 137.508°. It speeds up until 256 LEDs form a spiral." controls muted playsinline data-src="/assets/fermat-recipe.mp4"></video>
</div>
</div>

Start at the center. Then repeat:

1. Increase the radius a little.
2. Add an LED.
3. Turn 137.508°.

Every LED on every¹ Fibonacci board is placed by those rules. LED *n* sits *n* × 137.508° around from the first, and about √*n* out from the center. The next two sections explain those two numbers.

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

At 137° the LEDs still bunch into arms with gaps between them. 137.5° is exactly 55/144 of a turn, so the edge starts to crowd. It takes about 400 LEDs for that to show, though. With 256, 137.5° scores the same as the golden angle.

The golden angle, 360° ÷ φ² ≈ 137.508°, can't be written as a fraction at all, so the LEDs never line up. The animation measures how close the two nearest of 600 LEDs get, as a percentage of the spacing in a perfect honeycomb.

| angle | closest two LEDs |
|---|---|
| 90° | 4% |
| 135° | 9% |
| 137° | 55% |
| 137.5° | 82% |
| 137.508° (golden) | 87% |

<br />
The golden angle's digits never end, but a board only needs a few of them. Each extra digit buys a lot more LEDs before arms start to show:

| angle | as good as the golden angle up to | off by (degrees) |
|---|---|---|
| 137.5° | 400 LEDs | 0.0078 |
| 137.51° | 1,100 LEDs | 0.0022 |
| 137.508° | 7,800 LEDs | 0.00024 |
| 137.5078° | 53,000 LEDs | 0.000036 |
| 137.50776° | 820,000 LEDs | 4.1 × 10⁻⁶ |
| 137.507764° | 43 million LEDs | 5.0 × 10⁻⁸ |
| 137.5077641° | 21 million LEDs² | 5.0 × 10⁻⁸ |
| 137.50776405° | 85 billion LEDs | 3.8 × 10⁻¹¹ |
| 137.50776405004° | 1.5 trillion LEDs | 2.2 × 10⁻¹² |

<br />

Two digits are plenty for the [Fibonacci1024](/fibonacci1024).

<small id="ref2">
² The seventh digit actually makes things worse: 137.5077641° is just as far from the golden angle as 137.507764°, but on the other side.
</small>

The golden angle isn't the only angle that scores well, though. Other "noble" angles, like 99.5°, come close. The golden angle is the one that's furthest from every fraction.

Angles past 180° just mirror these: 222.492° (360° − 137.508°) makes the same spiral, flipped. That's why you'll sometimes see the golden angle given as about 222.5°.

</section>

<section class="step" id="spacing" data-label="√n radius" markdown="1">

## The √n radius

<div class="mb-3" data-fermat="spacing">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-spacing.jpg" data-no-lightbox aria-label="256 LEDs on a spiral, each with its share of the board shaded. Dashed circles through LEDs 64, 128, 192 and 256 each enclose 64 more LEDs. With LED n at radius n, the circles are evenly spaced, and the LEDs are crowded in the middle and far apart at the edge. With the radius at √n, every ring has the same area and the LEDs are evenly spaced. When the radius grows more slowly, the middle has gaps and the edge is crowded." controls muted playsinline data-src="/assets/fermat-spacing.mp4"></video>
</div>
</div>

With the angle set, the next question is the radius: how far from the center each LED sits. Each cell in the animation is the part of the board that's closer to its LED than to any other. The dashed circles go through LEDs 64, 128, 192 and 256, so each ring between them holds 64 LEDs.

If LED *n* goes at radius *n*, LED 128 is twice as far from the center as LED 64, and LED 256 is four times as far. The circles are evenly spaced, but the outer rings are much bigger than the inner ones and get no more LEDs. The LEDs end up crowded in the middle and far apart at the edge. The biggest cell is about 150 times the smallest.

A disc's area grows with the square of its radius. Putting LED *n* at radius √*n* means LED 256 is only twice as far out as LED 64, and every ring gets the same area. The circles get closer together toward the edge, every LED gets the same share of the board, and the biggest cell is only 1.3 times the smallest. If the radius grows more slowly than √*n*, it flips: the LEDs are far apart in the middle and crowded at the edge.

With equal area for every LED, the pixel density is the same all the way across the board.

</section>

<section class="step" id="add-one" data-label="Add one more" markdown="1">

## You can always add one more

<div class="mb-3" data-fermat="add-one">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-add-one.jpg" data-no-lightbox aria-label="A Fermat spiral, a hex grid, a square grid and concentric rings grow one LED at a time, from 1 to 1024. The hex grid is only a hexagon at 7, 19, 37… LEDs, the square grid only square at square numbers and the rings only tidy when full, but the spiral stays round at every count." controls muted playsinline data-src="/assets/fermat-add-one.mp4"></video>
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

Look closely at any of the boards and you'll see spiral arms. Connect every 3rd LED and you get 3 arms, because the golden angle is close to 1/3 of a turn. Every 5th LED makes 5 arms curving the other way, every 8th makes 8, and so on. Each of those fractions (2/5, 3/8, 5/13, 8/21…) is a little closer to the golden angle than the last, so each set of arms is a little straighter.

Any other count, like 4 or 30, zigzags or wobbles across the board instead.

The arm counts are 3, 5, 8, 13, 21 and 34. Put 1, 1 and 2 in front and each number is the sum of the two before it. They're the Fibonacci numbers, which is where the boards get their name. Count the spirals in a sunflower head and you'll find Fibonacci numbers there too.

</section>

<section class="step" id="between" data-label="Between" markdown="1">

## Between Fibonacci numbers

<div class="mb-3" data-fermat="between">
<div class="ratio ratio-16x9">
  <video class="post lazy" data-poster="/assets/fermat-between.jpg" data-no-lightbox aria-label="A wave of brightness runs through 256 LEDs in the order they were placed, repeating every 21, 34, 27.5, 23, 17, 13 and then 19 LEDs. At 21, 34 and 13, whole spiral arms light at once. In between, the light runs along the arms. A strip shows LEDs 0 to 69 in a row, lit by the same wave." controls muted playsinline data-src="/assets/fermat-between.mp4"></video>
</div>
</div>
<script src="/js/fermat-embed.js"></script>

The arms show up in animations too. Send a wave of brightness through the LEDs in the order they were placed, from the center out, and have it repeat every so many LEDs. The strip shows the first LEDs in a row, lit by the same wave, with a bracket over one repeat.

When the wave repeats every 21 LEDs, LEDs 21 apart light up together. They're on the same arm, so each of the 21 arms lights up all at once. The same thing happens at 13 and 34, with their own arms.

Between two Fibonacci numbers, the LEDs along an arm are at slightly different points in the wave. They light one after another, so the light seems to travel along the arms. Halfway between 21 and 34, at 27.5, it runs in along one set of arms and out along the other, and the LEDs themselves seem to move. Close to a Fibonacci number, the light races along each arm, and at exactly that number the whole arm lights at once.

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
