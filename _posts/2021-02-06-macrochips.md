---
layout: post
title: Macrochips
sortKey: Macrochips
id: macrochips
imgurId: 8DAWWY7.png
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

### Details

<a href="/assets/8DAWWY7.jpg" target="_blank"><img src="/assets/8DAWWY7.jpg" style="width:340px" /></a>

<!-- <a class="btn btn-success" href="https://www.etsy.com/listing/971715779">Buy on Etsy</a> -->

<!-- More info on Twitter: [https://twitter.com/jasoncoon_/status/1358068819303014402](https://twitter.com/jasoncoon_/status/1358068819303014402) -->

<!-- Full credit for the idea on Twitter: [https://twitter.com/arturo182/status/1356764474116554759](https://twitter.com/arturo182/status/1356764474116554759) -->

Some source vector and image files: [https://github.com/jasoncoon/macrochips](https://github.com/jasoncoon/macrochips)

I have a [Flux3D Beamo](https://flux3dp.com/beamo/) 30W CO2 laser. I use the metal engraving preset (50% power, 80mm/s speed).

A light coat of mineral oil before engraving makes them shiny, if that's the look you want.

<a href="/assets/rGQkxnr.gif" target="_blank"><img src="/assets/rGQkxnr.gif" style="width:340px" /></a>

### Collection

I have made {{ site.data.macrochips | size }} different macrochip designs so far:

<ul class="media-list">
{% for macrochip in site.data.macrochips %}
  <div class="col-md-4" id="{{ macrochip.name }}">
    <div class="thumbnail" id="{{ post.id }}">
      <div class="embed-responsive embed-responsive-4by3">
        <a href="/assets/{{ macrochip.imgurId }}.png">
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
