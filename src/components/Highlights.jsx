import { HIGHLIGHT_ITEMS } from '../data';
import { availableNow } from '../season';
import { KARTE_URL } from './Nav';
import MenuItem from './MenuItem';

export default function Highlights() {
  const items = availableNow(HIGHLIGHT_ITEMS);
  return (
    <section className="section highlights" id="highlights">
      <div className="section-head">
        <h2 className="section-title">Ein paar <em>Lieblinge</em></h2>
      </div>
      <div className="menu-list">
        {items.map((item, i) => <MenuItem key={item.name} item={item} i={i} />)}
      </div>
      <div className="highlights-cta">
        <a href={KARTE_URL} className="btn btn-primary">Ganze Karte ansehen →</a>
      </div>
    </section>
  );
}
