import { GETRAENKE_ITEMS } from '../data';
import MenuItem from './MenuItem';

export default function GetraenkeSection() {
  return (
    <div className="menu-list">
      {GETRAENKE_ITEMS.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
    </div>
  );
}
