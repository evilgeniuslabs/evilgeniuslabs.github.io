---
layout: post
title: Macrochips
sortKey: Macrochips
id: macrochips
imgurId: 8DAWWY7.jpg
excerpt: Laser engraved, 4 inch slate tile microchip coasters.
categories:
  - portfolio
  - products
published: true
redirect_from:
  - /42
  - /macrochip
  - /macrochips
  - /chips
---

A collection of laser engraved, 4 inch slate tile microchip coasters.

<h3>Table of Contents</h3>

- TOC
{:toc}

### To Purchase

These are available to purchase by request, just [contact me](/contact) and let me know the desired designs and quantities.
I can make any of the designs below, and can make new designs. I just need the chip name and links to any photos you can find.

### Details

Some source vector and image files: [https://github.com/jasoncoon/macrochips](https://github.com/jasoncoon/macrochips)

I have a [Flux3D Beamo](https://flux3dp.com/beamo/) 30W CO2 laser. I use the metal engraving preset (50% power, 80mm/s speed).

A light coat of mineral oil before engraving makes them shiny, if that's the look you want.

<div class="embed-responsive embed-responsive-16by9">
  <video class="post lazy" autoplay="autoplay" muted="muted" loop="loop">
    <source data-src="/assets/rGQkxnr.mp4" type="video/mp4">
  </video>
</div>

### Collection

I have made {{ site.data.macrochips | size }} different macrochip designs so far:

<ul class="media-list">
{% for macrochip in site.data.macrochips %}
  <div class="col-md-4" id="{{ macrochip.name }}">
    <div class="thumbnail" id="{{ post.id }}">
      <div class="embed-responsive embed-responsive-4by3">
        <a href="/assets/{{ macrochip.imgurId }}.jpg">
          <img class="media-object" style="width:340px" src="/assets/{{ macrochip.imgurId }}.jpg" alt="{{ macrochip.name }}">
        </a>
      </div>
      <div class="caption">
        <a href="macrochips#{{ macrochip.name }}">{{ macrochip.name }}</a>
      </div>
    </div>
  </div>
{% endfor %}
</ul>
