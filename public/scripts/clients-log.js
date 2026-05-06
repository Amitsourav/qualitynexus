// Clients page hero log card — auto-cycle through client rows.
(function () {
  var card = document.querySelector("[data-log]");
  if (!card) return;

  var rows = card.querySelectorAll("[data-log-i]");
  var TICK = 2200;
  var current = 0;
  var timer = null;

  function setActive(i) {
    var target = ((i % rows.length) + rows.length) % rows.length;
    rows.forEach(function (el, j) {
      el.classList.toggle("is-active", j === target);
    });
    current = target;
  }

  function startTimer() {
    if (timer !== null) return;
    timer = window.setInterval(function () { setActive(current + 1); }, TICK);
  }
  function stopTimer() {
    if (timer !== null) { clearInterval(timer); timer = null; }
  }

  card.addEventListener("mouseenter", stopTimer);
  card.addEventListener("mouseleave", startTimer);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopTimer(); else startTimer();
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    startTimer();
  }
})();
