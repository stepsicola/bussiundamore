import { BRUNCH_MENU_CARD, BRUNCH_ITEMS, BRUNCH_ADDONS } from '../data';
import MenuItem from './MenuItem';

export default function BrunchSection() {
  return (
    <>
      <div className="brunch-menu-card">
        <div>
          <div className="brunch-menu-card-title">Brunch Menü</div>
          <div className="brunch-menu-card-includes">{BRUNCH_MENU_CARD.includes.join(' · ')}</div>
        </div>
        <div className="brunch-menu-card-price">{BRUNCH_MENU_CARD.price} €</div>
        <div className="brunch-menu-card-addon">
          + {BRUNCH_MENU_CARD.addon.name} · {BRUNCH_MENU_CARD.addon.price} €
        </div>
      </div>
      <div className="menu-list">
        {BRUNCH_ITEMS.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <div className="addons-box">
        <div className="addons-box-title">Extras · zu jedem Brunchgericht</div>
        <div className="addons-grid">
          {BRUNCH_ADDONS.map(a => (
            <div key={a.name} className="addon-row">
              <span className="addon-name">{a.name}</span>
              <span className="addon-price">+ {a.price} €</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
