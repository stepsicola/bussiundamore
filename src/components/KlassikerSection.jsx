import { KLASSIKER_ITEMS, BEILAGEN_ITEMS } from '../data';
import { availableNow } from '../season';
import MenuItem from './MenuItem';
import AddonBlock from './AddonBlock';

export default function KlassikerSection() {
  const items = availableNow(KLASSIKER_ITEMS);
  return (
    <>
      <div className="menu-list">
        {items.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <AddonBlock title="Beilagen" items={BEILAGEN_ITEMS} plus={false} />
    </>
  );
}
