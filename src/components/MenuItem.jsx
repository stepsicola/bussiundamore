export function DietBadge({ diet }) {
  if (!diet) return null;
  const short = diet === 'vegan' ? 'VG' : 'V';
  return (
    <span className={`diet-badge diet-${diet}`} title={diet}>
      <span aria-hidden="true">{short}</span>
      <span className="sr-only">{diet}</span>
    </span>
  );
}

export default function MenuItem({ item, i }) {
  return (
    <div className="menu-item" style={{ animation: `fadeUp .4s ${i * 0.03}s both` }}>
      <div className="menu-item-top">
        <div className="menu-item-name">
          {item.name}
          <DietBadge diet={item.diet} />
        </div>
        <div className="menu-item-price">
          {item.price} €
          {item.priceNote && <span className="menu-item-price-note">{item.priceNote}</span>}
        </div>
      </div>
      {item.desc && <div className="menu-item-desc">{item.desc}</div>}
      {item.addons && (
        <div className="item-addons">
          {item.addons.map(a => (
            <div key={a.name} className="item-addon-row">
              <span>+ {a.name}</span>
              <span className="item-addon-price">+ {a.price} €</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
