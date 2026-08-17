import { useState } from 'react';
import Nav from './components/Nav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FloatingBookBtn from './components/FloatingBookBtn';

const BASE = import.meta.env.BASE_URL;

export default function KartePage() {
  const [bookOpen, setBookOpen] = useState(false);
  return (
    <>
      <Nav onBook={() => setBookOpen(true)} page="karte" />
      <main>
        <header className="karte-header">
          <a href={BASE} className="karte-back">← Startseite</a>
          <h1 className="karte-title">Die <em>Karte</em></h1>
          <p className="karte-sub">Alles, was bei uns auf den Tisch kommt.</p>
        </header>
        <MenuSection showTitle={false} />
      </main>
      <ReservationModal open={bookOpen} onClose={() => setBookOpen(false)} />
      <FloatingBookBtn onBook={() => setBookOpen(true)} />
      <Footer />
    </>
  );
}
