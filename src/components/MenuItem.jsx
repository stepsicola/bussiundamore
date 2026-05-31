export default function MenuItem({ item, i }) {
  return (
    <div className="menu-item" style={{ animation: `fadeUp .4s ${i * 0.03}s both` }}>
      <div className="menu-item-top">
        <div className="menu-item-name">{item.name}</div>
        <div className="menu-item-price">
          {item.price} €
          {item.priceNote && <span className="menu-item-price-note">{item.priceNote}</span>}
        </div>
      </div>
      {item.desc && <div className="menu-item-desc">{item.desc}</div>}
      {item.addons && (
        <div className="spargel-inline-extras">
          {item.addons.map(a => (
            <div key={a.name} className="spargel-inline-extra-row">
              <span>+ {a.name}</span>
              <span className="beilagen-price">+ {a.price} €</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
