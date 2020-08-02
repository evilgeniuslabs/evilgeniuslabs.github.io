---
layout: post
title: Color Waves Playground
id: colorwavesplayground
imgurId: yZh2fmo
# videoUrl: https://www.youtube.com/embed/SNB5xsYFCak
excerpt: Tweak the settings of the amazing ColorWaves FastLED animation interactively via a web UI.
categories: 
published: true
redirect_from:
  - /39
  - /colorwavesplayground
---

Tweak the setting of the amazing ColorWaves and Pride FastLED animations interactively via a web UI.

<a href="https://i.imgur.com/yZh2fmo.gif" target="_blank"><img src="https://i.imgur.com/yZh2fmo.gif" style="width:340px"  /></a>
<a href="https://i.imgur.com/RiqwV1Q.png" target="_blank"><img src="https://i.imgur.com/RiqwV1Q.png" style="width:340px"  /></a>
<a href="https://i.imgur.com/ruwvVbW.png" target="_blank"><img src="https://i.imgur.com/ruwvVbW.png" style="width:340px"  /></a>
<a href="https://i.imgur.com/HZRVd8n.png" target="_blank"><img src="https://i.imgur.com/HZRVd8n.png" style="width:340px"  /></a>

<h3>Table of Contents</h3>

- TOC
{:toc}

### Background

[ColorWavesWithPalettes](https://gist.github.com/kriegsman/8281905786e8b2632aeb) and [Pride2015](https://gist.github.com/kriegsman/964de772d64c502760e5) are brilliant animations for the FastLED library created by Mark Kriegsman. The code for both include a set of "magic numbers" or constants defined in the code. Slight changes in these numbers can cause drastic changes in the appearance of the animations. But changing them requires compiling and uploading the code. I wanted to learn more about the animations and code, and decided being able to interactively change them and immediately see the result would be beneficial.

### Details

I used my [esp8266-fastled-webserver](https://github.com/jasoncoon/esp8266-fastled-webserver) project, which already provides a web interface over wi-fi for changing settings, such as brightness, pattern, palette, etc. I extracted all of the constants from the Pride2015 and ColorWaves code, and replaced them with variables that I exposed as fields via the [REST interface](https://en.wikipedia.org/wiki/Representational_state_transfer).  No changes were needed to the web app, since it dynamically displays editors for all of the fields.

<a href="https://i.imgur.com/ruwvVbW.png" target="_blank"><img src="https://i.imgur.com/ruwvVbW.png" style="width:340px"  /></a>

I quickly realized that a way of saving, importing and exporting the settings would be beneficial. You can save them to a JSON file which you can load, share, etc.

<a href="https://i.imgur.com/HZRVd8n.png" target="_blank"><img src="https://i.imgur.com/HZRVd8n.png" style="width:340px"  /></a>

* `Load Values` converts the current set of field values to JSON format in the large text area, where it can be copied, modified, etc.
* `Set Values` loads the contents of the text area, updates all of the changed field values in the UI, and submits them via wi-fi and the REST API.
* `Copy` copies the contents of the text area to the clipboard.
* `Scroll to Top` scrolls to the top of the web page. There is also a button at the top of the page to scroll to the bottom.
* `Save` downloads the contents of the text area to a preset file on your computer, using the filename entered in the textbox. The filename `preset1.json` is the default, and I suggest you use the `.json` file extension for these files.
* `Open` lets you browse to and open a file on your computer, and loads it into the text area. To apply the preset file, you need to then press the `Load Values` button.

### Source Code

You can find the source code on GitHub: [https://github.com/jasoncoon/esp8266-fastled-webserver](https://github.com/jasoncoon/esp8266-fastled-webserver)

* ColorWavesPlayground: [https://github.com/jasoncoon/esp8266-fastled-webserver/blob/main/ColorWavesPlayground.h](https://github.com/jasoncoon/esp8266-fastled-webserver/blob/main/ColorWavesPlayground.h)
* PridePlayground: [https://github.com/jasoncoon/esp8266-fastled-webserver/blob/main/PridePlayground.h](https://github.com/jasoncoon/esp8266-fastled-webserver/blob/main/PridePlayground.h)

I've also started porting the code to branches shared specifically for builds and products of mine, such as the Fibonacci boards pictured above:

* [Fibonacci256](/fibonacci256): [https://github.com/jasoncoon/esp8266-fastled-webserver/tree/fibonacci256](https://github.com/jasoncoon/esp8266-fastled-webserver/tree/fibonacci256)