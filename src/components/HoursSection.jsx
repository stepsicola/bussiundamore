import { HOURS } from '../data';

export default function HoursSection({ onBook }) {
  const today = new Date().getDay();
  const todayIdx = (today + 6) % 7;
  return (
    <section className="hours-section" id="hours">
      <div className="hours-grid">
        <div>
          <h2 className="section-title" style={{ marginBottom: 40, lineHeight: 1.39 }}>Wann <em>geöffnet</em></h2>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <table className="hours-table">
              <tbody>
                {HOURS.map((h, i) => (
                  <tr key={h.day} className={`${i === todayIdx ? 'today' : ''} ${h.closed ? 'closed' : ''}`}>
                    <td>{h.day}</td><td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="hours-info">
          <h3 style={{ color: 'var(--sage-dark)' }}>Täglich geöffnet.</h3>
          <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={onBook}>Jetzt reservieren →</button>
        </div>
      </div>
    </section>
  );
}
