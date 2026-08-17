import { useRef, useEffect, useMemo } from 'react';
import { MENU_SECTIONS } from '../data';
import { availableNow } from '../season';
import { useScrollSpy } from '../hooks/useScrollSpy';
import BrunchSection from './BrunchSection';
import KlassikerSection from './KlassikerSection';
import SpargelSection from './SpargelSection';
import DessertSection from './DessertSection';
import GetraenkeSection from './GetraenkeSection';

const SECTION_COMPONENTS = {
  'menu-brunch': BrunchSection,
  'menu-klassiker': KlassikerSection,
  'menu-spargel': SpargelSection,
  'menu-dessert': DessertSection,
  'menu-getraenke': GetraenkeSection,
};

export default function MenuSection({ showTitle = true }) {
  // Stabile Referenz — sonst baut der Scrollspy bei jedem Render neue Observer auf.
  const sections = useMemo(() => availableNow(MENU_SECTIONS), []);
  const active = useScrollSpy(sections);
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    const btn = navRef.current.querySelector('.menu-spy-btn.active');
    if (!btn) return;
    const nav = navRef.current;
    nav.scrollTo({ left: btn.offsetLeft - nav.offsetWidth / 2 + btn.offsetWidth / 2, behavior: 'smooth' });
  }, [active]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Navigation und Sprungleiste überdecken den Seitenanfang — Höhen zur
    // Laufzeit messen, damit der Offset auf Desktop und mobil stimmt.
    const navH = document.querySelector('.nav')?.offsetHeight ?? 0;
    const spyH = navRef.current?.parentElement?.offsetHeight ?? 0;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - navH - spyH,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section" id="menu">
      {showTitle && (
        <div className="section-head">
          <h2 className="section-title">Die <em>Karte</em></h2>
        </div>
      )}

      <div className="menu-spy-wrap">
        <nav className="menu-spy" ref={navRef}>
          {sections.map(({ id, label }) => (
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

      <div className="diet-legend">
        <span><span className="diet-badge diet-vegetarisch" aria-hidden="true">V</span> vegetarisch</span>
        <span><span className="diet-badge diet-vegan" aria-hidden="true">VG</span> vegan</span>
      </div>

      {sections.map(({ id, title, note }) => {
        const Body = SECTION_COMPONENTS[id];
        return (
          <div key={id} id={id} className="menu-category">
            <div className="menu-cat-header">
              <span className="menu-cat-title">{title}</span>
              {note && <span className="menu-cat-note">{note}</span>}
            </div>
            <Body />
          </div>
        );
      })}

      <div className="menu-footer-note">
        Für Unverträglichkeiten und Allergien sprecht unser Team jederzeit an.
      </div>
    </section>
  );
}
