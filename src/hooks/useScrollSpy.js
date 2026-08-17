import { useState, useEffect } from 'react';

export function useScrollSpy(sections) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    let observer;
    const visible = new Set();

    const pick = () => {
      for (const { id } of sections) {
        if (visible.has(id)) { setActive(id); return; }
      }
    };

    // Eine Kategorie gilt erst als aktiv, wenn sie unter Navigation und
    // Sprungleiste auftaucht. Die Höhen unterscheiden sich je Breakpoint,
    // deshalb wird der Beobachter bei Größenänderung neu aufgebaut.
    const build = () => {
      observer?.disconnect();
      visible.clear();

      const navH = document.querySelector('.nav')?.offsetHeight ?? 0;
      const spyH = document.querySelector('.menu-spy-wrap')?.offsetHeight ?? 0;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) visible.add(entry.target.id);
            else visible.delete(entry.target.id);
          });
          pick();
        },
        { rootMargin: `-${navH + spyH + 8}px 0px -40% 0px`, threshold: 0 }
      );

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    build();
    window.addEventListener('resize', build);

    return () => {
      window.removeEventListener('resize', build);
      observer?.disconnect();
    };
  }, [sections]);

  return active;
}
