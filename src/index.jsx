import React, { useState } from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import Home from './Home/Home.jsx';
import Hledani from './Hledani/Hledani.jsx';
import Lekarnicka from './Lekarnicka/Lekarnicka.jsx';
import PrvniPomoc from './PrvniPomoc/PrvniPomoc.jsx';
import ZvireVtisni from './ZvireVtisni/ZvireVtisni.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootswatch/dist/minty/bootstrap.min.css';


const App = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const Header = () => {
  const [expand, setExpand] = useState(false);
  const zavirani = () => {
    setExpand(false);
  };
  const lokation = useLocation();

  return (
    <div>
      <Navbar bg="primary" expand="lg" expanded={expand}>
        <Container>
          <Navbar.Brand as={Link} to="home">
            <img className="logo" src="./img/logo_pruhledne.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              if (expand === 'expanded') {
                setExpand(false);
              } else {
                setExpand('expanded');
              }
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={lokation.pathname} className="ms-auto">
              <Nav.Link
                eventKey="/hledani"
                as={Link}
                to="/hledani"
                onClick={zavirani}
              >
                HLEDÁNÍ
              </Nav.Link>
              <Nav.Link
                eventKey="/lekarnicka"
                as={Link}
                to="/lekarnicka"
                onClick={zavirani}
              >
                LÉKÁRNIČKA
              </Nav.Link>
              <Nav.Link
                eventKey="/prvniPomoc"
                as={Link}
                to="/prvniPomoc"
                onClick={zavirani}
              >
                PRVNÍ POMOC
              </Nav.Link>
              <Nav.Link
                eventKey="/zvireVtisni"
                as={Link}
                to="/zvireVtisni"
                onClick={zavirani}
              >
                ZVÍŘE V TÍSNI
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(
  <HashRouter>
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
  </HashRouter>,
);
