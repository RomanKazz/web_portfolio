import { useEffect } from "react";

// Reveal once on entry. Content stays visible if motion or browser support is absent.
export function usePageMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !Element.prototype.animate)
      return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealed = new Set();
    const running = new Map();
    const targets = new Map();
    const groups = [
      [".hero-grid > div:first-child > *", 60],
      [".portrait", 0],
      [".about-editorial > *", 45],
      [".section-heading, .interests > h2", 0],
      [".game-preview, .game-notes, .nullwise-gallery", 0],
      [".powerlifting-photo, .powerlifting-content", 50],
      [".contact-section h2, .contact-invitation, .contact-actions", 50],
    ];
    for (const [selector, stagger] of groups) {
      document.querySelectorAll(selector).forEach((element, index) => {
        targets.set(element, Math.min(index * stagger, 150));
      });
    }

    let observer;
    function stop() {
      observer?.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
    }
    function start() {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const element = entry.target;
            observer.unobserve(element);
            revealed.add(element);
            // Keyboard navigation must never wait for a decorative reveal.
            if (element.contains(document.activeElement)) continue;
            const animation = element.animate(
              [
                { opacity: 0, translate: "0 14px" },
                { opacity: 1, translate: "0 0" },
              ],
              {
                duration: 560,
                delay: targets.get(element),
                easing: "cubic-bezier(.22, 1, .36, 1)",
                fill: "backwards",
              },
            );
            running.set(element, animation);
            animation.finished.then(
              () => running.delete(element),
              () => running.delete(element),
            );
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px 32px 0px" },
      );
      targets.forEach((_, element) => {
        if (!revealed.has(element)) observer.observe(element);
      });
    }
    function revealFocused(event) {
      running.forEach((animation, element) => {
        if (element.contains(event.target)) animation.finish();
      });
    }
    start();
    preference.addEventListener("change", start);
    document.addEventListener("focusin", revealFocused);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      document.removeEventListener("focusin", revealFocused);
    };
  }, []);
}
