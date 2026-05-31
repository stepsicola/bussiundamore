import { useState, useEffect } from 'react';
import { MENU_SECTIONS } from '../data';

export function useScrollSpy() {
  const [active, setActive] = useState('menu-brunch');
  useEffect(() => {
    const visible = new Set();

    const pick = () => {
      for (const { id } of MENU_SECTIONS) {
        if (visible.has(id)) { setActive(id); return; }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        pick();
      },
      { rootMargin: '-130px 0px -40% 0px', threshold: 0 }
    );

    MENU_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return active;
}
