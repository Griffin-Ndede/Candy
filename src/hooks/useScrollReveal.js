import { useEffect } from "react";

// Marks every [data-reveal] element with data-visible="true" once it scrolls into view.
// Tailwind classes (data-[visible=true]:opacity-100 ...) do the actual animation.
export function useScrollReveal(selector = "[data-reveal]", routeKey) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const show = (el) => el.setAttribute("data-visible", "true");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, routeKey]);
}
