import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Highlights from './components/Highlights';
import Story from './components/Story';
import HoursSection from './components/HoursSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FloatingBookBtn from './components/FloatingBookBtn';

export default function App() {
  const [bookOpen, setBookOpen] = useState(false);
  return (
    <>
      <Nav onBook={() => setBookOpen(true)} />
      <main>
        <Hero onBook={() => setBookOpen(true)} />
        <Marquee />
        <Highlights />
        <Story />
        <HoursSection onBook={() => setBookOpen(true)} />
        <Gallery />
      </main>
      <Footer />
      <ReservationModal open={bookOpen} onClose={() => setBookOpen(false)} />
      <FloatingBookBtn onBook={() => setBookOpen(true)} />
    </>
  );
}
