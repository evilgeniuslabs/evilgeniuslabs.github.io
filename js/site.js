/*
 * Site behaviour, no dependencies. Works with Bootstrap 5's CSS classes (show/collapsed) but not its JS.
 * Uses its own data-toggle / data-target / data-parent attributes (not data-bs-*), so loading Bootstrap's JS
 * later would not double-handle clicks.
 *
 * 1. Collapse  [data-toggle="collapse"]: navbar ☰ menu, FAQ accordion, "click to expand" panels.
 *              Target from data-target or href. data-parent (on the panel, Bootstrap 5 style, or on the toggle)
 *              makes an accordion: opening one closes the others.
 * 2. Dropdown  [data-toggle="dropdown"]: Portfolio / Products / More. Closes on outside click and Escape.
 * 3. Lazy media <video data-src data-poster> and <iframe data-src>: real src assigned shortly before they
 *              scroll into view (browsers can't natively lazy-load <video>).
 * 4. Motion    Looping autoplay videos: with "reduce motion" nothing autoplays (posters show; videos not inside a
 *              link get controls); otherwise videos pause while off-screen and resume when back in view.
 * 5. TOC       Post table of contents (.post-toc): highlights the section being read (class "active",
 *              aria-current) and positions the sidebar marker.
 * 6. Lightbox  Links in <main> to an image file on this site that wrap an <img> open in a modal <dialog> instead
 *              of a new tab, and so do unlinked images and looping videos shown well below their file's size:
 *              previous/next through the page's media, arrow keys, swipe, Esc / backdrop to close. Modified clicks
 *              (Ctrl/Cmd/Shift, middle button) and no-JS visitors still get the plain link. Opt a link, image or
 *              video out with data-no-lightbox (or download on a link).
 *
 * 5 and 6 are placed before 3 + 4, which return early on browsers without IntersectionObserver.
 *
 * Loaded at the end of <body>, so the document is already parsed when this runs.
 */
(function () {
  "use strict";

  /* ---------- 1 + 2: collapse and dropdown ---------- */

  function targetOf(toggle) {
    var selector = toggle.getAttribute("data-target") || toggle.getAttribute("href");
    if (!selector || selector.charAt(0) !== "#") return null;
    try {
      return document.querySelector(selector);
    } catch (e) {
      return null;
    }
  }

  function togglesFor(panel) {
    return Array.prototype.filter.call(document.querySelectorAll('[data-toggle="collapse"]'), function (t) {
      return targetOf(t) === panel;
    });
  }

  function setCollapsed(panel, open) {
    panel.classList.toggle("show", open);
    togglesFor(panel).forEach(function (t) {
      t.classList.toggle("collapsed", !open);
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function setDropdown(dropdown, open) {
    var t = dropdown.querySelector('[data-toggle="dropdown"]');
    var menu = dropdown.querySelector(".dropdown-menu");
    if (t) {
      t.classList.toggle("show", open);
      t.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (menu) menu.classList.toggle("show", open);
  }

  function openDropdown() {
    var menu = document.querySelector(".dropdown-menu.show");
    return menu ? menu.closest(".dropdown") : null;
  }

  function closeDropdowns(except) {
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      if (dropdown !== except) setDropdown(dropdown, false);
    });
  }

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest('[data-toggle="collapse"], [data-toggle="dropdown"]');

    if (!toggle) {
      if (!event.target.closest(".dropdown-menu")) closeDropdowns(null);
      return;
    }
    event.preventDefault();

    if (toggle.getAttribute("data-toggle") === "dropdown") {
      var dropdown = toggle.closest(".dropdown");
      var menu = dropdown && dropdown.querySelector(".dropdown-menu");
      if (!menu) return;
      var open = !menu.classList.contains("show");
      closeDropdowns(dropdown);
      setDropdown(dropdown, open);
      return;
    }

    var panel = targetOf(toggle);
    if (!panel) return;
    var opening = !panel.classList.contains("show");
    var parentSelector = panel.getAttribute("data-parent") || toggle.getAttribute("data-parent");
    if (opening && parentSelector) {
      var parent = document.querySelector(parentSelector);
      if (parent) {
        parent.querySelectorAll(".collapse.show").forEach(function (other) {
          if (other !== panel) setCollapsed(other, false);
        });
      }
    }
    setCollapsed(panel, opening);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var open = openDropdown();
    if (!open) return;
    closeDropdowns(null);
    var t = open.querySelector('[data-toggle="dropdown"]');
    if (t) t.focus();
  });

  /* ---------- 5: table of contents scroll highlighting ---------- */

  (function () {
    var toc = document.querySelector(".post-toc");
    if (!toc) return;

    var items = Array.prototype.slice
      .call(toc.querySelectorAll('a[href^="#"]'))
      .map(function (link) {
        var id = decodeURIComponent(link.getAttribute("href").slice(1));
        return { link: link, heading: document.getElementById(id) };
      })
      .filter(function (item) {
        return item.heading;
      });
    if (!items.length) return;

    var current = null;
    var pinned = null; // link the visitor clicked; wins until they scroll themselves
    var queued = false;

    function pick() {
      if (pinned) return pinned;
      // A heading is "current" once it passes a line 25% down the viewport. Near the end of the page the line
      // slides down to the bottom, so short final sections (which can't reach the top) still get their turn.
      var vh = window.innerHeight;
      var remaining = document.documentElement.scrollHeight - (window.scrollY + vh);
      var line = vh * 0.25 + Math.max(0, vh * 0.75 - remaining);
      var found = null;
      for (var i = 0; i < items.length; i++) {
        if (items[i].heading.getBoundingClientRect().top > line) break;
        found = items[i].link;
      }
      return found;
    }

    function update() {
      queued = false;
      var next = pick();
      if (next !== current) {
        if (current) {
          current.classList.remove("active");
          current.removeAttribute("aria-current");
        }
        if (next) {
          next.classList.add("active");
          next.setAttribute("aria-current", "location");
        }
        current = next;
      }
      if (!current) {
        toc.style.removeProperty("--toc-marker-height");
        return;
      }

      // Marker on the sidebar's left border (drawn by CSS only when the TOC is a sidebar).
      var tocBox = toc.getBoundingClientRect();
      var linkBox = current.getBoundingClientRect();
      var top = linkBox.top - tocBox.top + toc.scrollTop;
      toc.style.setProperty("--toc-marker-top", String(top)); // unitless: CSS scales a 1px bar by these
      toc.style.setProperty("--toc-marker-height", String(linkBox.height));

      // When the sidebar itself scrolls (long TOC, short window), keep the current entry in view.
      if (toc.scrollHeight > toc.clientHeight) {
        if (linkBox.top < tocBox.top) toc.scrollTop += linkBox.top - tocBox.top - 16;
        else if (linkBox.bottom > tocBox.bottom) toc.scrollTop += linkBox.bottom - tocBox.bottom + 16;
      }
    }

    function schedule() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(update);
    }

    toc.addEventListener("click", function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;
      pinned = link;
      schedule();
    });
    ["wheel", "touchstart", "keydown", "mousedown"].forEach(function (type) {
      window.addEventListener(
        type,
        function () {
          if (!pinned) return;
          pinned = null;
          schedule();
        },
        { passive: true, capture: true }
      );
    });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule); // images above headings finish loading and move them
    update();
  })();

  /* ---------- 6: image lightbox ---------- */

  (function () {
    var main = document.getElementById("main");
    if (!main || typeof HTMLDialogElement !== "function") return;

    // Two kinds of entry, browsed together in page order:
    // - Links wrapping an <img>. Same-origin image files only: off-site links ending in .png etc. are often pages
    //   about an image (Wikimedia "File:" pages). data-lightbox (the post gallery strip, _includes/post-gallery.html)
    //   opts a link in wherever it points, videos included.
    // - Unlinked <img>s and looping <video>s whose file is noticeably bigger than they're shown (screenshots squeezed
    //   to 320px, 720px tutorial clips in 240px boxes, any photo on a phone). Decided from the rendered size, so it
    //   follows the layout; rechecked on load and resize. Skips the post's hero (.post-hero), Wikipedia formula
    //   images, SVGs, and videos showing controls (reduced motion, section 4: clicks belong to the controls).
    var IMAGE_PATH = /\.(jpe?g|png|gif|webp|avif)$/i;
    var VIDEO_PATH = /\.(mp4|webm)$/i;
    var ZOOM_RATIO = 1.25;
    var candidates = Array.prototype.filter.call(main.querySelectorAll("a[href], img, video"), function (el) {
      if (el.hasAttribute("data-no-lightbox")) return false;
      if (el.tagName !== "A") {
        return (
          !el.closest("a, .post-hero, [data-no-lightbox]") &&
          !el.classList.contains("mwe-math-fallback-image-inline") &&
          !/\.svg$/i.test(el.getAttribute("src") || "")
        );
      }
      if (!el.querySelector("img") || el.hasAttribute("download")) return false;
      if (el.hasAttribute("data-lightbox")) return true;
      return el.origin === window.location.origin && IMAGE_PATH.test(el.pathname);
    });
    if (!candidates.length) return;

    var media = []; // the unlinked images and videos
    candidates.forEach(function (el) {
      if (el.tagName === "A") el.classList.add("lightbox-link");
      else media.push(el);
    });

    // The file's own width. Before it loads, the width attribute _plugins/media_size.rb adds at build time.
    function fileWidth(el) {
      var loaded = el.tagName === "VIDEO" ? el.videoWidth : el.naturalWidth;
      return loaded || Number(el.getAttribute("width")) || 0;
    }

    // Zoomable media acts as a button: zoom-in cursor, focusable, opens with Enter/Space. Media with no alt text
    // gets a generic name so the button isn't anonymous.
    function updateZoomable(el) {
      var shown = el.clientWidth;
      var zoomable = shown > 0 && !el.controls && fileWidth(el) > shown * ZOOM_RATIO;
      if (zoomable === el.classList.contains("lightbox-zoomable")) return;
      el.classList.toggle("lightbox-zoomable", zoomable);
      if (zoomable) {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "button");
        el.setAttribute("aria-haspopup", "dialog");
        if (!el.getAttribute("alt") && !el.hasAttribute("aria-label")) {
          el.setAttribute("aria-label", el.tagName === "VIDEO" ? "Enlarge video" : "Enlarge image");
          el.setAttribute("data-lightbox-label", "");
        }
      } else {
        el.removeAttribute("tabindex");
        el.removeAttribute("role");
        el.removeAttribute("aria-haspopup");
        if (el.hasAttribute("data-lightbox-label")) {
          el.removeAttribute("aria-label");
          el.removeAttribute("data-lightbox-label");
        }
      }
    }
    media.forEach(function (el) {
      el.addEventListener(el.tagName === "VIDEO" ? "loadedmetadata" : "load", function () {
        updateZoomable(el);
      });
    });
    // Batched to the next frame. That also puts the first pass after section 4 (later in this file), which adds
    // controls to videos for reduced-motion visitors, and lets a change of that preference settle before rechecking.
    var updateQueued = false;
    function queueUpdate() {
      if (updateQueued) return;
      updateQueued = true;
      window.requestAnimationFrame(function () {
        updateQueued = false;
        media.forEach(updateZoomable);
      });
    }
    queueUpdate();
    window.addEventListener("resize", queueUpdate);
    var motion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    if (motion && motion.addEventListener) motion.addEventListener("change", queueUpdate);

    function icon(path) {
      return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + path + '"/></svg>';
    }

    var dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Image viewer");
    dialog.innerHTML =
      '<figure class="lightbox-figure">' +
      '<img class="lightbox-img" alt="">' +
      '<video class="lightbox-video" controls muted loop playsinline hidden></video>' +
      '<figcaption class="lightbox-caption"></figcaption>' +
      "</figure>" +
      '<div class="lightbox-bar">' +
      '<span class="lightbox-counter" aria-hidden="true"></span>' +
      '<a class="lightbox-original" target="_blank">Open original</a>' +
      '<button type="button" class="lightbox-btn lightbox-close" aria-label="Close">' +
      icon("M6 6l12 12M18 6 6 18") +
      "</button>" +
      "</div>" +
      '<button type="button" class="lightbox-btn lightbox-prev" aria-label="Previous image">' +
      icon("M15 5l-7 7 7 7") +
      "</button>" +
      '<button type="button" class="lightbox-btn lightbox-next" aria-label="Next image">' +
      icon("M9 5l7 7-7 7") +
      "</button>" +
      '<div class="spinner-border lightbox-spinner" aria-hidden="true"></div>' +
      '<div class="visually-hidden" aria-live="polite"></div>';
    document.body.appendChild(dialog);

    var figure = dialog.querySelector(".lightbox-figure");
    var img = dialog.querySelector(".lightbox-img");
    var video = dialog.querySelector(".lightbox-video");
    video.muted = true; // the attribute only sets the default; autoplay needs the property
    var caption = dialog.querySelector(".lightbox-caption");
    var bar = dialog.querySelector(".lightbox-bar");
    var counter = dialog.querySelector(".lightbox-counter");
    var original = dialog.querySelector(".lightbox-original");
    var closeButton = dialog.querySelector(".lightbox-close");
    var status = dialog.querySelector("[aria-live]");

    var items = []; // the entries being browsed (links and zoomable images), in page order
    var index = 0;
    var opener = null;
    var token = 0; // ignores a slow image that finishes after the visitor has moved on
    var spinnerTimer = 0;

    function browsable(el) {
      if (el.tagName === "IMG") return el.classList.contains("lightbox-zoomable");
      return el.getClientRects().length > 0; // skips links in collapsed panels
    }

    function srcOf(el) {
      if (el.tagName === "A") return el.href;
      return el.currentSrc || el.src || el.getAttribute("data-src"); // a lazy video may not have its src yet
    }

    function thumbOf(el) {
      return el.tagName === "A" ? el.querySelector("img") : el;
    }

    function isVideo(el) {
      return el.tagName === "VIDEO" || (el.tagName === "A" && VIDEO_PATH.test(el.pathname));
    }

    // Shown while the lightbox video loads: a gallery link's thumbnail, or the page video's own poster
    function posterOf(el) {
      if (el.tagName === "VIDEO") return el.getAttribute("poster") || el.getAttribute("data-poster") || "";
      var thumb = thumbOf(el);
      return thumb.currentSrc || thumb.src;
    }

    function preload(i) {
      var el = items[(i + items.length) % items.length];
      if (!isVideo(el)) new Image().src = srcOf(el);
    }

    function setCaption(alt) {
      caption.textContent = alt;
      caption.hidden = !alt;
    }

    function stopVideo() {
      video.pause();
      video.removeAttribute("src");
      video.removeAttribute("poster");
      video.load(); // drops the old file so it stops downloading
    }

    function show(i) {
      index = (i + items.length) % items.length;
      var entry = items[index];
      var src = srcOf(entry);
      var thumb = thumbOf(entry);
      var alt = thumb.getAttribute("alt") || "";
      var mine = ++token;

      counter.textContent = index + 1 + " / " + items.length;
      original.href = src;
      status.textContent = (items.length > 1 ? "Item " + (index + 1) + " of " + items.length + ". " : "") + alt;
      clearTimeout(spinnerTimer);
      dialog.classList.remove("lightbox-loading");

      if (isVideo(entry)) {
        // The poster shows at once while the video loads. Autoplays (muted, looping, like the post's own videos)
        // unless the visitor prefers reduced motion; controls either way.
        img.hidden = true;
        img.removeAttribute("src");
        video.hidden = false;
        var poster = posterOf(entry);
        if (poster) video.poster = poster;
        else video.removeAttribute("poster");
        video.src = src;
        if (entry.tagName === "VIDEO" && entry.currentTime) {
          // Carry on from where the page's copy is, so opening it looks like a zoom rather than a restart
          var from = entry.currentTime;
          video.addEventListener(
            "loadedmetadata",
            function () {
              if (video.getAttribute("src") === src) video.currentTime = from;
            },
            { once: true }
          );
        }
        setCaption(alt);
        if (!reduced()) tryPlay(video); // reduced() and tryPlay() are declared with section 4 below
        if (items.length > 1) {
          preload(index + 1);
          preload(index - 1);
        }
        return;
      }

      if (!video.hidden) {
        stopVideo();
        video.hidden = true;
      }
      img.hidden = false;

      // Swap only once the new file is ready, so the old image doesn't blank out while it downloads. The spinner
      // waits a moment: thumbnails are usually the same file, already cached.
      clearTimeout(spinnerTimer);
      spinnerTimer = setTimeout(function () {
        if (mine === token) dialog.classList.add("lightbox-loading");
      }, 150);
      var loader = new Image();
      loader.onload = loader.onerror = function () {
        if (mine !== token) return;
        clearTimeout(spinnerTimer);
        dialog.classList.remove("lightbox-loading");
        img.src = src;
        img.alt = alt;
        setCaption(alt);
      };
      loader.src = src;

      if (items.length > 1) {
        preload(index + 1);
        preload(index - 1);
      }
    }

    function open(el) {
      media.forEach(updateZoomable); // sizes may have changed (a panel opened, fonts loaded)
      items = candidates.filter(browsable);
      var i = items.indexOf(el);
      if (i < 0) return false;
      opener = el;
      dialog.classList.toggle("lightbox-single", items.length < 2);
      show(i);
      dialog.showModal();
      closeButton.focus();
      return true;
    }

    main.addEventListener("click", function (event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; // new tab / window / download
      var el = event.target.closest(".lightbox-link, .lightbox-zoomable");
      if (el && open(el)) event.preventDefault();
    });

    main.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (!event.target.classList || !event.target.classList.contains("lightbox-zoomable")) return;
      if (open(event.target)) event.preventDefault(); // Space would otherwise scroll the page
    });

    dialog.addEventListener("click", function (event) {
      var t = event.target;
      if (t.closest(".lightbox-prev")) show(index - 1);
      else if (t.closest(".lightbox-next")) show(index + 1);
      else if (t.closest(".lightbox-close") || t === dialog || t === figure || t === bar) dialog.close();
    });

    dialog.addEventListener("keydown", function (event) {
      if (items.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target === video) return; // its controls use the arrow keys to seek
      if (event.key === "ArrowLeft") show(index - 1);
      else if (event.key === "ArrowRight") show(index + 1);
      else if (event.key === "Home") show(0);
      else if (event.key === "End") show(items.length - 1);
      else return;
      event.preventDefault();
    });

    // Horizontal swipe on touch screens. Ignored while pinch-zoomed, so panning around a zoomed photo doesn't
    // change it.
    var touchX = null;
    var touchY = 0;
    dialog.addEventListener(
      "touchstart",
      function (event) {
        var zoomed = window.visualViewport && window.visualViewport.scale > 1.01;
        if (event.touches.length !== 1 || zoomed) {
          touchX = null;
          return;
        }
        touchX = event.touches[0].clientX;
        touchY = event.touches[0].clientY;
      },
      { passive: true }
    );
    dialog.addEventListener(
      "touchend",
      function (event) {
        if (touchX === null || items.length < 2) return;
        var touch = event.changedTouches[0];
        var dx = touch.clientX - touchX;
        var dy = touch.clientY - touchY;
        touchX = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );

    // Runs for every way of closing: button, backdrop, Esc.
    dialog.addEventListener("close", function () {
      token++;
      clearTimeout(spinnerTimer);
      dialog.classList.remove("lightbox-loading");
      img.removeAttribute("src"); // the next open shouldn't flash this image
      if (!video.hidden) {
        stopVideo();
        video.hidden = true;
      }
      setCaption("");
      if (opener) opener.focus({ preventScroll: true });
      opener = null;
    });
  })();

  /* ---------- 3 + 4: lazy media and motion ---------- */

  var query = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var autoplayVideos = Array.prototype.slice.call(document.querySelectorAll("video[autoplay]"));
  var lazyMedia = Array.prototype.slice.call(document.querySelectorAll("video[data-src], iframe[data-src]"));
  var visible = new WeakMap();

  function reduced() {
    return !!(query && query.matches);
  }

  function tryPlay(video) {
    var result = video.play();
    if (result && typeof result.catch === "function") result.catch(function () {});
  }

  function loadMedia(el) {
    var poster = el.getAttribute("data-poster");
    var src = el.getAttribute("data-src");
    if (poster) el.setAttribute("poster", poster);
    if (src) el.setAttribute("src", src);
    el.removeAttribute("data-poster");
    el.removeAttribute("data-src");
    if (el.tagName === "VIDEO") el.load(); // autoplay (if still set) starts it once data arrives
  }

  function applyMotionPreference() {
    autoplayVideos.forEach(function (video) {
      if (reduced()) {
        video.autoplay = false;
        video.removeAttribute("autoplay");
        video.pause();
        if (!video.closest("a") && !video.controls) {
          video.controls = true;
          video.setAttribute("data-motion-controls", "");
        }
      } else {
        video.autoplay = true;
        video.setAttribute("autoplay", "");
        if (video.hasAttribute("data-motion-controls")) {
          video.controls = false;
          video.removeAttribute("data-motion-controls");
        }
        if (visible.get(video) && video.currentSrc) tryPlay(video);
      }
    });
  }

  // Must run before any lazy video gets its src, so reduced-motion visitors never see one start.
  applyMotionPreference();
  if (query) {
    if (query.addEventListener) query.addEventListener("change", applyMotionPreference);
    else if (query.addListener) query.addListener(applyMotionPreference);
  }

  if (!("IntersectionObserver" in window)) {
    lazyMedia.forEach(loadMedia);
    return;
  }

  // Start loading a little before the element scrolls into view.
  var loader = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        loader.unobserve(entry.target);
        loadMedia(entry.target);
      });
    },
    { rootMargin: "300px 0px" }
  );
  lazyMedia.forEach(function (el) {
    loader.observe(el);
  });

  // Pause/resume based on actual visibility (no margin).
  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var video = entry.target;
      visible.set(video, entry.isIntersecting);
      if (!entry.isIntersecting) {
        if (!video.paused) video.pause();
      } else if (!reduced() && video.paused && video.currentSrc) {
        tryPlay(video);
      }
    });
  });
  autoplayVideos.forEach(function (video) {
    watcher.observe(video);
    // A lazy video can finish loading after it has already scrolled away; autoplay would start it anyway.
    video.addEventListener("playing", function () {
      if (visible.get(video) === false) video.pause();
    });
  });
})();
