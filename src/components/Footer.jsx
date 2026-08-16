import { CONTACT } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">Bussi <em>&amp;</em> Amore</div>
          <div className="footer-tagline">Slow brunch · Potsdam · seit 2021</div>
        </div>
        <div><h4>Besuch</h4><ul><li>{CONTACT.street}</li><li>{CONTACT.city}</li><li><a href={`tel:${CONTACT.tel}`}>{CONTACT.telDisplay}</a></li></ul></div>
        <div><h4>Hallo sagen</h4><ul><li><a href="#">ciao@bussi-amore.de</a></li><li><a href="#">Instagram</a></li><li><a href="#">Newsletter</a></li></ul></div>
        <div><h4>Karriere</h4><ul><li><a href="#">Service (m/w/d)</a></li><li><a href="#">Köchin / Koch</a></li><li><a href="#">Aushilfe</a></li></ul></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Bussi &amp; Amore GmbH · Potsdam</span>
        <span>Impressum · Datenschutz · AGB</span>
      </div>
    </footer>
  );
}
