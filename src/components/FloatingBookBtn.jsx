import { useState, useEffect } from 'react';

export default function FloatingBookBtn({ onBook }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const target = document.querySelector('.hero-ctas');
    if (!target) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(target);
    return () => obs.disconnect();
  }, []);
  return (
    <button
      className={`fab-book${visible ? ' fab-book--visible' : ''}`}
      onClick={onBook}
      aria-label="Tisch reservieren"
    >
      <span className="fab-book-icon">♥</span>
      <span className="fab-book-label">Tisch reservieren</span>
    </button>
  );
}
