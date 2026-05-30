import { KLASSIKER_ITEMS, BEILAGEN_ITEMS } from '../data';
import MenuItem from './MenuItem';

export default function KlassikerSection() {
  return (
    <>
      <div className="menu-list">
        {KLASSIKER_ITEMS.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <div className="beilagen-section">
        <div className="beilagen-header">Beilagen</div>
        <div className="beilagen-list">
          {BEILAGEN_ITEMS.map(item => (
            <div key={item.name} className="beilagen-row">
              <span className="beilagen-name">{item.name}</span>
              <span className="beilagen-price">{item.price} €</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
