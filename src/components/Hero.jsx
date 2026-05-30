export default function Hero({ onBook }) {
  return (
    <section className="hero">
      <div>
        <h1 className="hero-title">Brunch,<br />Bistro, Bar<br />&amp; gaaanz viel <em>Amore.</em></h1>
        <div className="hero-ctas">
          <a href="#menu" className="hero-btn primary"><span>Speisekarte ansehen</span><span className="arrow">→</span></a>
          <button className="hero-btn secondary" onClick={onBook}><span>Tisch reservieren</span><span className="arrow">→</span></button>
        </div>
      </div>
      <div className="hero-sub">
        <div className="hero-meta">
          <div>Adresse<strong>Brandenburger Str. 41<br />14467 Potsdam</strong></div>
          <div>Telefon<strong>+49 331 1234 5678</strong></div>
        </div>
      </div>
    </section>
  );
}
