import { BRUNCH_MENU_CARD, BRUNCH_ITEMS, BRUNCH_ADDONS } from '../data';
import { availableNow } from '../season';
import MenuItem from './MenuItem';
import AddonBlock from './AddonBlock';

export default function BrunchSection() {
  const items = availableNow(BRUNCH_ITEMS);
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
        {items.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <AddonBlock title="Extras · zu jedem Brunchgericht" items={BRUNCH_ADDONS} />
    </>
  );
}
