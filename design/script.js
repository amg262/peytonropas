/* Reveal-on-scroll and the sticky-bar hairline.
 *
 * Deliberately measured with getBoundingClientRect rather than
 * IntersectionObserver. The reveal starts elements at opacity 0, so anything
 * that stops the callback firing leaves the page blank — and on a portfolio
 * the work IS the product. A rect check on scroll cannot silently no-op, and
 * for ~13 elements the cost is irrelevant. The `js` class on <html> means a
 * failed script leaves everything visible instead of hidden. */

(function () {
  // Claim the guard set in <head> — we're alive, so keep .reveal hidden until
  // it scrolls into view rather than letting the fallback strip the class.
  clearTimeout(window.__revealGuard);

  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealables = Array.from(document.querySelectorAll(".reveal"));
  const topbar = document.querySelector(".topbar");

  if (reduced) {
    revealables.forEach((el) => el.classList.add("is-in"));
    return;
  }

  let pending = revealables;

  function sweep() {
    if (pending.length) {
      const limit = window.innerHeight * 0.92;
      const still = [];

      for (const el of pending) {
        const rect = el.getBoundingClientRect();
        // Visible once its top edge crosses into view, or it already spans it.
        if (rect.top < limit && rect.bottom > 0) el.classList.add("is-in");
        else still.push(el);
      }
      pending = still;
    }

    if (topbar) topbar.classList.toggle("is-stuck", window.scrollY > 8);
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      sweep();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  window.addEventListener("load", sweep);

  sweep();

  // Late-loading webfonts and images reflow the page; re-measure once settled.
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(sweep);

  root.classList.add("reveal-ready");
})();
