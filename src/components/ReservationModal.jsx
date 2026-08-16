import { useState, useMemo } from 'react';

export default function ReservationModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const dates = useMemo(() => {
    const arr = [];
    const today = new Date();
    for (let i = 0; i < 12; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const disabled = d.getDay() === 2 || d.getDay() === 3;
      arr.push({ d, label: d.toLocaleDateString('de-DE', { weekday: 'short' }).slice(0, 2), day: d.getDate(), disabled, iso: d.toISOString().slice(0, 10) });
    }
    return arr;
  }, [open]);

  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];
  if (!open) return null;

  const reset = () => { setStep(0); setDate(null); setTime(null); setGuests(2); setName(''); setEmail(''); setNotes(''); };
  const close = () => { onClose(); setTimeout(reset, 300); };
  const canNext = (step === 0 && date) || (step === 1 && time) || (step === 2 && guests > 0) || (step === 3 && name && email);
  const stepLabels = ['Datum wählen', 'Uhrzeit wählen', 'Wie viele Gäste?', 'Deine Daten', 'Bestätigt'];

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={close} aria-label="Schließen">×</button>
        {step < 4 && <div className="modal-steps">{[0, 1, 2, 3].map(i => <div key={i} className={`modal-step ${i < step ? 'done' : i === step ? 'active' : ''}`}></div>)}</div>}
        {step < 4 && (<><div className="modal-eyebrow">Schritt {step + 1} von 4</div><h2>{stepLabels[step].split(' ').length > 1 ? <>{stepLabels[step].split(' ').slice(0, -1).join(' ')} <em>{stepLabels[step].split(' ').slice(-1)[0]}</em></> : stepLabels[step]}</h2></>)}
        {step === 0 && <div className="date-grid">{dates.map(d => <button key={d.iso} className={`date-cell ${date?.iso === d.iso ? 'selected' : ''} ${d.disabled ? 'disabled' : ''}`} disabled={d.disabled} onClick={() => !d.disabled && setDate(d)}><span className="dow">{d.label}</span><span className="day">{d.day}</span></button>)}</div>}
        {step === 1 && <div className="time-grid">{times.map(t => <button key={t} className={`time-cell ${time === t ? 'selected' : ''}`} onClick={() => setTime(t)}>{t}</button>)}</div>}
        {step === 2 && <div><div className="guests-row"><button className="guests-btn" disabled={guests <= 1} onClick={() => setGuests(g => g - 1)}>−</button><div><div className="guests-num">{guests}</div><div className="guests-label">{guests === 1 ? 'Person' : 'Personen'}</div></div><button className="guests-btn" disabled={guests >= 8} onClick={() => setGuests(g => g + 1)}>+</button></div><div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: 13, marginTop: 12 }}>Für mehr als 8 Personen bitte direkt anrufen.</div></div>}
        {step === 3 && <div><div className="form-field"><label>Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Vor- und Nachname" /></div><div className="form-field"><label>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="dich@email.de" /></div><div className="form-field"><label>Anmerkungen (optional)</label><textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Allergien, Geburtstag, Hund …"></textarea></div></div>}
        {step === 4 && <div className="confirmed"><div className="confirmed-check">✓</div><div className="modal-eyebrow">Reservierung bestätigt</div><h2>Bis <em>bald</em>, {name.split(' ')[0]}.</h2><div className="summary" style={{ textAlign: 'left', marginTop: 24 }}><div className="summary-row"><span>Datum</span><span>{date?.d.toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long' })}</span></div><div className="summary-row"><span>Uhrzeit</span><span>{time}</span></div><div className="summary-row"><span>Gäste</span><span>{guests}</span></div><div className="summary-row"><span>Name</span><span>{name}</span></div></div><p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.6 }}>Eine Bestätigung wurde an <strong style={{ color: 'var(--bordeaux)' }}>{email}</strong> geschickt.</p><button className="btn btn-primary" style={{ marginTop: 24, width: '100%' }} onClick={close}>Schließen</button></div>}
        {step < 4 && <div className="btn-row">{step > 0 ? <button className="btn btn-ghost" onClick={() => setStep(s => s - 1)}>← Zurück</button> : <span></span>}<button className="btn btn-primary" disabled={!canNext} onClick={() => setStep(s => s + 1)}>{step === 3 ? 'Reservieren' : 'Weiter →'}</button></div>}
      </div>
    </div>
  );
}
