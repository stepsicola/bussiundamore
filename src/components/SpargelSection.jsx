import { SPARGEL_ITEMS, SPARGEL_EXTRAS } from '../data';
import MenuItem from './MenuItem';

export default function SpargelSection() {
  const mainItems = SPARGEL_ITEMS.slice(0, -1);
  const hollandaiseItem = SPARGEL_ITEMS[SPARGEL_ITEMS.length - 1];
  return (
    <div className="menu-list">
      {mainItems.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      <div className="menu-item spargel-hollandaise-item" style={{ animation: `fadeUp .4s ${mainItems.length * 0.03}s both` }}>
        <div className="menu-item-top">
          <div className="menu-item-name">{hollandaiseItem.name}</div>
          <div className="menu-item-price">{hollandaiseItem.price} €</div>
        </div>
        <div className="spargel-inline-extras">
          {SPARGEL_EXTRAS.map(e => (
            <div key={e.name} className="spargel-inline-extra-row">
              <span>+ {e.name}</span>
              <span className="beilagen-price">+ {e.price} €</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
