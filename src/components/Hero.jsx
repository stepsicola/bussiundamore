import { CONTACT } from '../data';

const BASE = import.meta.env.BASE_URL;

export default function Hero({ onBook }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${BASE}images/fassade_aussen.webp)` }}
    >
      <div>
        <h1 className="hero-title">Brunch,<br />Bistro, Bar<br />&amp; gaaanz viel <em>Amore.</em></h1>
        <div className="hero-ctas">
          <a href="#menu" className="hero-btn primary"><span>Speisekarte ansehen</span><span className="arrow">→</span></a>
          <button className="hero-btn secondary" onClick={onBook}><span>Tisch reservieren</span><span className="arrow">→</span></button>
        </div>
      </div>
      <div className="hero-sub">
        <div className="hero-meta">
          <div>
            Adresse
            <strong>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="hero-meta-link">
                {CONTACT.street}<br />{CONTACT.city}
                <span className="meta-arrow">↗</span>
              </a>
            </strong>
          </div>
          <div>
            Telefon
            <strong>
              <a href={`tel:${CONTACT.tel}`} className="hero-meta-link">
                {CONTACT.telDisplay}
                <span className="meta-arrow">↗</span>
              </a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
