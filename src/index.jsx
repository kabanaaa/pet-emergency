import React from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Lekarnicka from './Lekarnicka/Lekarnicka.jsx';
import PrvniPomoc from './PrvniPomoc/PrvniPomoc.jsx';
import ZvireVtisni from './ZvireVtisni/ZvireVtisni.jsx';

const App = () => (
  <div className="container">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const Header = () => (
  <div>
    <h1>Pet Emergency</h1>
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/home">Home</Link> | <Link to="/lekarnicka">Lékárnička</Link>|{' '}
      <Link to="/prvniPomoc">První pomoc</Link>|{' '}
      <Link to="/zvireVtisni">Zvíře v tísni</Link>
    </nav>
  </div>
);

const Footer = () => (
  <div className="container">
    <p>Závěrečný projekt - Czechitas, Digitální akademie: Web.</p>
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="lekarnicka" element={<Lekarnicka />} />
        <Route path="prvnipomoc" element={<PrvniPomoc />} />
        <Route path="zvirevtisni" element={<ZvireVtisni />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
