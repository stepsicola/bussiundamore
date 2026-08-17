import { DESSERT_ITEMS, KAISERSCHMARRN } from '../data';
import { availableNow } from '../season';
import MenuItem, { DietBadge } from './MenuItem';

export default function DessertSection() {
  const items = availableNow(DESSERT_ITEMS);
  return (
    <>
      <div className="kaiserschmarrn-card">
        <div>
          <div className="kaiserschmarrn-title">
            Karamellisierter Kaiserschmarrn
            <DietBadge diet={KAISERSCHMARRN.diet} />
          </div>
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
        {items.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
    </>
  );
}
