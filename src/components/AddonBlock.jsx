import { availableNow } from '../season';

// Eines von zwei Add-on-Mustern: gilt für eine ganze Kategorie.
// Das zweite Muster sind Add-ons direkt am Gericht (siehe MenuItem).
export default function AddonBlock({ title, items, plus = true }) {
  const visible = availableNow(items);
  if (!visible.length) return null;

  return (
    <div className="addons-box">
      <div className="addons-box-title">{title}</div>
      <div className="addons-grid">
        {visible.map(a => (
          <div key={a.name} className="addon-row">
            <span className="addon-name">{a.name}</span>
            <span className="addon-price">{plus ? '+ ' : ''}{a.price} €</span>
          </div>
        ))}
      </div>
    </div>
  );
}
