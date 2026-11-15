/*
 * Site behaviour, no dependencies. Replaces jQuery + Bootstrap 3's JS + vanilla-lazyload.
 *
 * 1. Collapse  [data-toggle="collapse"]: navbar ☰ menu, FAQ accordion, "click to expand" panels.
 *              Target from data-target or href; data-parent makes an accordion (opening one closes the others).
 * 2. Dropdown  [data-toggle="dropdown"]: the "More" menu. Closes on outside click and Escape.
 * 3. Lazy media <video data-src data-poster> and <iframe data-src>: real src assigned shortly before they
 *              scroll into view (browsers can't natively lazy-load <video>).
 * 4. Motion    Looping autoplay videos: with "reduce motion" nothing autoplays (posters show; videos not inside a
 *              link get controls); otherwise videos pause while off-screen and resume when back in view.
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
    panel.classList.toggle("in", open);
    togglesFor(panel).forEach(function (t) {
      t.classList.toggle("collapsed", !open);
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function closeDropdowns(except) {
    document.querySelectorAll(".dropdown.open").forEach(function (dropdown) {
      if (dropdown === except) return;
      dropdown.classList.remove("open");
      var t = dropdown.querySelector('[data-toggle="dropdown"]');
      if (t) t.setAttribute("aria-expanded", "false");
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
      var dropdown = toggle.parentElement;
      var open = !dropdown.classList.contains("open");
      closeDropdowns(dropdown);
      dropdown.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }

    var panel = targetOf(toggle);
    if (!panel) return;
    var opening = !panel.classList.contains("in");
    var parentSelector = toggle.getAttribute("data-parent");
    if (opening && parentSelector) {
      var parent = document.querySelector(parentSelector);
      if (parent) {
        parent.querySelectorAll(".collapse.in").forEach(function (other) {
          if (other !== panel) setCollapsed(other, false);
        });
      }
    }
    setCollapsed(panel, opening);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var open = document.querySelector(".dropdown.open");
    if (!open) return;
    closeDropdowns(null);
    var t = open.querySelector('[data-toggle="dropdown"]');
    if (t) t.focus();
  });

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
