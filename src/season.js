// Saisonfenster als [Monat, Tag], beide Grenzen inklusive.
// Fenster über den Jahreswechsel sind erlaubt (from > to), z.B. Wild im Okt–Jan.
export const SEASONS = {
  spargel: { from: [4, 15], to: [6, 24], label: "Mitte April bis 24. Juni" },
  rhabarber: { from: [4, 1], to: [6, 24], label: "April bis Juni" },
  baerlauch: { from: [3, 1], to: [5, 15], label: "März bis Mai" },
};

const stamp = (month, day) => month * 100 + day;

// Ohne season-Angabe ist ein Gericht ganzjährig verfügbar.
export function inSeason(key, date = new Date()) {
  if (!key) return true;
  const season = SEASONS[key];
  if (!season) return true;

  const today = stamp(date.getMonth() + 1, date.getDate());
  const from = stamp(...season.from);
  const to = stamp(...season.to);

  return from <= to
    ? today >= from && today <= to
    : today >= from || today <= to;
}

export const availableNow = (items, date) => items.filter(i => inSeason(i.season, date));
