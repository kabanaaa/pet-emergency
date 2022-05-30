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
  <div className="header">
    <h1 className="header__h1">PET EMERGENCY</h1>
    <nav>
      <Link to="/home">HOME</Link> | <Link to="/lekarnicka">LÉKÁRNIČKA</Link>|{' '}
      <Link to="/prvniPomoc">PRVNÍ POMOC</Link>|{' '}
      <Link to="/zvireVtisni">ZVÍŘE V TÍSNI</Link>
    </nav>
  </div>
);

const Footer = () => (
  <div className="footer">
    Závěrečný projekt - Czechitas, Digitální akademie: Web.
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
