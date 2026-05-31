const BASE = import.meta.env.BASE_URL;

const MAPS_URL = 'https://maps.google.com/?q=Brandenburger+Str.+41,+14467+Potsdam';
const TEL = '+4933112345678';
const TEL_DISPLAY = '+49 331 1234 5678';

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
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hero-meta-link">
                Brandenburger Str. 41<br />14467 Potsdam
                <span className="meta-arrow">↗</span>
              </a>
            </strong>
          </div>
          <div>
            Telefon
            <strong>
              <a href={`tel:${TEL}`} className="hero-meta-link">
                {TEL_DISPLAY}
                <span className="meta-arrow">↗</span>
              </a>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
