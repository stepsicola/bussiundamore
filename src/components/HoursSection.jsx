import { HOURS } from '../data';

export default function HoursSection({ onBook }) {
  const today = new Date().getDay();
  const todayIdx = (today + 6) % 7;
  return (
    <section className="hours-section" id="hours">
      <div className="hours-inner">
        <h2 className="section-title hours-title">Wann <em>geöffnet</em>?</h2>
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
        <div className="hours-info">
          <h3>Täglich geöffnet.</h3>
          <button className="btn btn-primary" onClick={onBook}>Jetzt reservieren →</button>
        </div>
      </div>
    </section>
  );
}
