import { useRef, useEffect } from 'react';
import { MENU_SECTIONS, GETRAENKE_ITEMS } from '../data';
import { useScrollSpy } from '../hooks/useScrollSpy';
import BrunchSection from './BrunchSection';
import KlassikerSection from './KlassikerSection';
import SpargelSection from './SpargelSection';
import DessertSection from './DessertSection';
import MenuItem from './MenuItem';

export default function MenuSection() {
  const active = useScrollSpy();
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    const btn = navRef.current.querySelector('.menu-spy-btn.active');
    if (!btn) return;
    const nav = navRef.current;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const navWidth = nav.offsetWidth;
    nav.scrollTo({ left: btnLeft - navWidth / 2 + btnWidth / 2, behavior: 'smooth' });
  }, [active]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section className="section" id="menu">
      <div className="section-head">
        <h2 className="section-title">Die <em>Karte</em></h2>
      </div>

      <div className="menu-spy-wrap">
        <nav className="menu-spy" ref={navRef}>
          {MENU_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              className={`menu-spy-btn${active === id ? ' active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div id="menu-brunch" className="menu-category">
        <div className="menu-cat-header">
          <span className="menu-cat-title">Brunch</span>
          <span className="menu-cat-note">10–16 Uhr</span>
        </div>
        <BrunchSection />
      </div>

      <div id="menu-klassiker" className="menu-category">
        <div className="menu-cat-header">
          <span className="menu-cat-title">Bussi &amp; Amore Klassiker</span>
        </div>
        <KlassikerSection />
      </div>

      <div id="menu-spargel" className="menu-category">
        <div className="menu-cat-header">
          <span className="menu-cat-title">Beelitzer Spargel</span>
          <span className="menu-cat-note">Saisonal</span>
        </div>
        <SpargelSection />
      </div>

      <div id="menu-dessert" className="menu-category">
        <div className="menu-cat-header">
          <span className="menu-cat-title">Dessert</span>
        </div>
        <DessertSection />
      </div>

      <div id="menu-getraenke" className="menu-category">
        <div className="menu-cat-header">
          <span className="menu-cat-title">Getränke</span>
        </div>
        <div className="menu-list">
          {GETRAENKE_ITEMS.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
        </div>
      </div>

      <div className="menu-footer-note">
        Für Unverträglichkeiten und Allergien sprecht unser Team jederzeit an.
      </div>
    </section>
  );
}
