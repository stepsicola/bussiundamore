import { useState, useEffect } from 'react';

export default function Nav({ onBook }) {
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

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">Bussi <span className="amp">&amp;</span> Amore</a>
        <ul className="nav-links">
          <li><a href="#menu">Karte</a></li>
          <li><a href="#story">Über uns</a></li>
          <li><a href="#hours">Öffnungszeiten</a></li>
          <li><a href="#gallery">Galerie</a></li>
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
        <a href="#menu" className="nav-drawer-link" onClick={closeDrawer}>Karte</a>
        <a href="#story" className="nav-drawer-link" onClick={closeDrawer}>Über uns</a>
        <a href="#hours" className="nav-drawer-link" onClick={closeDrawer}>Öffnungszeiten</a>
        <a href="#gallery" className="nav-drawer-link" onClick={closeDrawer}>Galerie</a>
        <button className="hero-btn primary nav-drawer-cta" onClick={() => { closeDrawer(); onBook(); }}>
          <span>Tisch buchen</span><span className="arrow">→</span>
        </button>
      </div>
    </>
  );
}
