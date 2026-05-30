import { Fragment } from 'react';

const ITEMS = [
  "Cornetti aus eigener Backstube",
  "Eier vom Hof Pohl",
  "Hafermilch ohne Aufpreis",
  "Hausgerösteter Espresso",
  "Burrata aus Apulien",
  "Hundefreundlich",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <Fragment key={i}><span>{t}</span><span className="sep">✻</span></Fragment>
        ))}
      </div>
    </div>
  );
}
