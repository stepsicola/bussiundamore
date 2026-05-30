import { useRef } from 'react';
import { GALLERY_ITEMS } from '../data';

export default function Gallery() {
  const reelRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.pageX, scrollLeft: reelRef.current.scrollLeft };
    reelRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    e.preventDefault();
    reelRef.current.scrollLeft = drag.current.scrollLeft - (e.pageX - drag.current.startX);
  };
  const onMouseUp = () => {
    drag.current.active = false;
    if (reelRef.current) reelRef.current.style.cursor = 'grab';
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-head" style={{ marginBottom: 0 }}>
        <h2 className="section-title">Bei <em>uns</em></h2>
        <a href="#" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--sage-dark)' }}>@bussi_und_amore ↗</a>
      </div>
      <div
        className="gallery-reel"
        ref={reelRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="gallery-reel-track">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="gallery-reel-item">
              <img src={item.src} alt={item.alt} loading="lazy" draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
