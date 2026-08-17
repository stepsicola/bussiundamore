import { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;
export const KARTE_URL = `${BASE}karte/`;

// Auf der Kartenseite müssen die Sprungziele zurück auf die Startseite zeigen.
const linksFor = (page) => {
  const home = page === 'karte' ? BASE : '';
  return [
    { href: page === 'karte' ? BASE : KARTE_URL, label: page === 'karte' ? 'Startseite' : 'Karte' },
    { href: `${home}#story`, label: 'Über uns' },
    { href: `${home}#hours`, label: 'Öffnungszeiten' },
    { href: `${home}#gallery`, label: 'Galerie' },
  ];
};

export default function Nav({ onBook, page = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 760) setDrawerOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);
  const links = linksFor(page);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href={page === 'karte' ? BASE : '#'} className="nav-logo">Bussi <span className="amp">&amp;</span> Amore</a>
        <ul className="nav-links">
          {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        <button className="nav-cta" onClick={onBook}>Tisch buchen</button>
        <button
          className={`nav-hamburger ${drawerOpen ? 'open' : ''}`}
          onClick={() => setDrawerOpen(o => !o)}
          aria-expanded={drawerOpen}
          aria-label={drawerOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>
      </nav>
      <div
        className={`nav-drawer ${drawerOpen ? 'open' : ''}`}
        style={{ transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)' }}
        aria-hidden={!drawerOpen}
        {...(!drawerOpen ? { inert: '' } : {})}
      >
        {links.map(l => (
          <a key={l.label} href={l.href} className="nav-drawer-link" onClick={closeDrawer}>{l.label}</a>
        ))}
        <button className="hero-btn primary nav-drawer-cta" onClick={() => { closeDrawer(); onBook(); }}>
          <span>Tisch buchen</span><span className="arrow">→</span>
        </button>
      </div>
    </>
  );
}
