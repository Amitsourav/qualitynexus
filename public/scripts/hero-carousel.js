// Hero photo carousel — auto-advance, crossfade, pause on hover, prefers-reduced-motion aware.
(function () {
  var root = document.querySelector("[data-hero-carousel]");
  if (!root) return;

  var slides = root.querySelectorAll("[data-hc-slide]");
  var dots = root.querySelectorAll("[data-hc-dot]");
  var TICK = 4500;
  var current = 0;
  var timer = null;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setActive(i) {
    var target = ((i % slides.length) + slides.length) % slides.length;
    slides.forEach(function (el, j) {
      el.classList.toggle("is-active", j === target);
    });
    dots.forEach(function (el, j) {
      el.classList.toggle("is-active", j === target);
      el.setAttribute("aria-selected", j === target ? "true" : "false");
    });
    current = target;
  }

  function start() {
    if (reduce || timer !== null) return;
    timer = window.setInterval(function () { setActive(current + 1); }, TICK);
  }
  function stop() {
    if (timer !== null) { clearInterval(timer); timer = null; }
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      setActive(i);
      stop();
      start();
    });
  });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  start();
})();
