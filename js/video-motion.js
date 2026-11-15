/*
 * Motion handling for the site's looping, muted, autoplaying videos.
 *
 * - "Reduce motion" (OS/browser setting): nothing autoplays. Videos show their poster frame; videos that
 *   aren't inside a link get native controls so they can be played on demand. Videos inside a link (the
 *   listing cards) stay still and the click goes to the post as before.
 * - Otherwise: autoplay as before, but each video is paused while it's off-screen and resumed when it
 *   scrolls back into view, so a page of 50+ videos doesn't keep decoding all of them.
 *
 * Loaded synchronously at the end of <body>, *before* vanilla-lazyload, so autoplay is switched off
 * before lazyload assigns any video its src. Reacts if the preference changes while the page is open.
 */
(function () {
  "use strict";

  var videos = Array.prototype.slice.call(document.querySelectorAll("video[autoplay]"));
  if (!videos.length) return;

  var query = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var visible = new WeakMap();

  function reduced() {
    return !!(query && query.matches);
  }

  function tryPlay(video) {
    var result = video.play();
    if (result && typeof result.catch === "function") result.catch(function () {});
  }

  function applyPreference() {
    videos.forEach(function (video) {
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

  applyPreference();
  if (query) {
    if (query.addEventListener) query.addEventListener("change", applyPreference);
    else if (query.addListener) query.addListener(applyPreference);
  }

  if (!("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(function (entries) {
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

  videos.forEach(function (video) {
    observer.observe(video);
    // A lazy video can finish loading after it has already scrolled away; autoplay would start it anyway.
    video.addEventListener("playing", function () {
      if (visible.get(video) === false) video.pause();
    });
  });
})();
