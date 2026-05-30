import { DESSERT_ITEMS, KAISERSCHMARRN } from '../data';
import MenuItem from './MenuItem';

export default function DessertSection() {
  return (
    <>
      <div className="menu-list">
        {DESSERT_ITEMS.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <div className="kaiserschmarrn-card">
        <div className="kaiserschmarrn-header">
          <div className="kaiserschmarrn-title">Karamellisierter Kaiserschmarrn</div>
          <div className="kaiserschmarrn-price">{KAISERSCHMARRN.price} €</div>
        </div>
        <div className="kaiserschmarrn-desc">{KAISERSCHMARRN.desc}</div>
        <div className="kaiserschmarrn-note">{KAISERSCHMARRN.note}</div>
        <div className="kaiserschmarrn-addons">
          {KAISERSCHMARRN.addons.map(a => (
            <div key={a.name} className="kaiserschmarrn-addon-item">
              <span>+ {a.name}</span>
              <strong>{a.price} €</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
