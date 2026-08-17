import { SPARGEL_ITEMS, SPARGEL_EXTRAS } from '../data';
import { availableNow } from '../season';
import MenuItem from './MenuItem';
import AddonBlock from './AddonBlock';

export default function SpargelSection() {
  const items = availableNow(SPARGEL_ITEMS);
  return (
    <>
      <div className="menu-list">
        {items.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <AddonBlock title="Extras · zu jedem Spargelgericht" items={SPARGEL_EXTRAS} />
    </>
  );
}
