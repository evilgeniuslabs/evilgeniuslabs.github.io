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
 *              aria-current) and positions the sidebar marker. Placed before 3 + 4, which return early on
 *              browsers without IntersectionObserver.
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
