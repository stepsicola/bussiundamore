import { useState, useEffect } from 'react';
import { MENU_SECTIONS } from '../data';

export function useScrollSpy() {
  const [active, setActive] = useState('menu-brunch');
  useEffect(() => {
    const handler = () => {
      const offset = 130;
      let found = MENU_SECTIONS[0].id;
      for (const { id } of MENU_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) found = id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return active;
}
