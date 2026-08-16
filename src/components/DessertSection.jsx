import { DESSERT_ITEMS, KAISERSCHMARRN } from '../data';
import MenuItem from './MenuItem';

export default function DessertSection() {
  return (
    <>
      <div className="kaiserschmarrn-card">
        <div>
          <div className="kaiserschmarrn-title">Karamellisierter Kaiserschmarrn</div>
          <div className="kaiserschmarrn-includes">{KAISERSCHMARRN.desc} · {KAISERSCHMARRN.note}</div>
        </div>
        <div className="kaiserschmarrn-price">{KAISERSCHMARRN.price} €</div>
        <div className="kaiserschmarrn-addons">
          {KAISERSCHMARRN.addons.map(a => (
            <span key={a.name}>+ {a.name} · {a.price} €</span>
          ))}
        </div>
      </div>
      <div className="menu-list">
        {DESSERT_ITEMS.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
    </>
  );
}
