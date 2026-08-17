import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import KartePage from './KartePage';
import './bussi.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KartePage />
  </StrictMode>
);
