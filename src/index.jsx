import React from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Hledani from './Hledani/Hledani.jsx';
import Lekarnicka from './Lekarnicka/Lekarnicka.jsx';
import PrvniPomoc from './PrvniPomoc/PrvniPomoc.jsx';
import ZvireVtisni from './ZvireVtisni/ZvireVtisni.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootswatch/dist/minty/bootstrap.min.css';

const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const Header = () => (
  <div className="header">
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="home">
          <img className="logo" src="./img/logo_pruhledne.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/hledani">
              HLEDÁNÍ
            </Nav.Link>
            <Nav.Link as={Link} to="/lekarnicka">
              LÉKÁRNIČKA
            </Nav.Link>
            <Nav.Link as={Link} to="/prvniPomoc">
              PRVNÍ POMOC
            </Nav.Link>
            <Nav.Link as={Link} to="/zvireVtisni">
              ZVÍŘE V TÍSNI
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="hledani" element={<Hledani />} />
        <Route path="lekarnicka" element={<Lekarnicka />} />
        <Route path="prvnipomoc" element={<PrvniPomoc />} />
        <Route path="zvirevtisni" element={<ZvireVtisni />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
