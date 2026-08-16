import { Fragment, useRef, useEffect } from 'react';

const ITEMS = [
  "Milch von Brodowin",
  "Eier aus Weidehaltung",
  "Kaffee von Five Elephant",
  "Größtenteils regional",
  "Burrata aus Apulien",
  "Cornetti aus eigener Backstube",
];

const DURATION = 65; // seconds

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  const trackRef = useRef(null);
  const state = useRef({ dragging: false, startX: 0, capturedX: 0 });

  useEffect(() => {
    const track = trackRef.current;
    const container = track.parentElement;

    const getComputedX = () => {
      const matrix = new DOMMatrix(window.getComputedStyle(track).transform);
      return matrix.m41;
    };

    const getHalfWidth = () => track.scrollWidth / 2;

    const onDragStart = (clientX) => {
      state.current.dragging = true;
      state.current.startX = clientX;
      // Capture current animated position, then kill animation so inline transform wins
      const x = getComputedX();
      state.current.capturedX = x;
      track.style.animation = 'none';
      track.style.transform = `translateX(${x}px)`;
      container.style.cursor = 'grabbing';
    };

    const onDragMove = (clientX) => {
      if (!state.current.dragging) return;
      const delta = clientX - state.current.startX;
      track.style.transform = `translateX(${state.current.capturedX + delta}px)`;
    };

    const onDragEnd = (clientX) => {
      if (!state.current.dragging) return;
      state.current.dragging = false;
      container.style.cursor = '';

      const delta = clientX - state.current.startX;
      let finalX = state.current.capturedX + delta;
      const half = getHalfWidth();

      // Normalize into [-half, 0] so the loop is seamless
      finalX = ((finalX % half) - half) % half;

      const delay = -(finalX / -half) * DURATION;
      track.style.transform = '';
      track.style.animation = `scroll ${DURATION}s linear ${delay}s infinite`;
    };

    const onMouseDown = (e) => onDragStart(e.clientX);
    const onMouseMove = (e) => onDragMove(e.clientX);
    const onMouseUp = (e) => onDragEnd(e.clientX);
    const onTouchStart = (e) => onDragStart(e.touches[0].clientX);
    const onTouchMove = (e) => { e.preventDefault(); onDragMove(e.touches[0].clientX); };
    const onTouchEnd = (e) => onDragEnd(e.changedTouches[0].clientX);

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        {loop.map((t, i) => (
          <Fragment key={i}><span>{t}</span><span className="sep">✻</span></Fragment>
        ))}
      </div>
    </div>
  );
}
