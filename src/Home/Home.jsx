import { Alert } from 'react-bootstrap';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import { Row, Col, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div>
        <p className="textKlik">Vítejte na stránkách PetEmergency,</p>
        <p className="textKlik2">
          pokud hledáte veterinární pohotovost můžete začít hledat zde:
        </p>

        <Button className="buttonKlik d-flex align-items-center justify-content-center">
          <Link to="/hledani">
            <img
              className="ikonaKlik"
              src="./img/tlapka_pruhledna.png"
              alt="obrázek tlapky v kroužku"
            />
          </Link>
        </Button>
      </div>
      <Alert className="pouceniAlert">
        <Container>
          <Row>
            <Col sm={8}>
              <p>
                Veškeré informace uvedené na těchto stránkách slouží k základní
                orientci, pokud se Vašemu zvířeti něco děje, volejte ihned
                veterináře!
                <br />
                Než vyjedete na vybranou veterinární pohotovost, doporučujeme
                tam nejdříve zavolat a domluvit se na příjezdu a případném
                přijetí zvířete k ošetření.
              </p>
            </Col>
            <Col
              sm={4}
              className="d-flex align-items-center justify-content-end"
            >
              <a href="mailto:banackakaterina@gmail.com,Sarka7091@gmail.com">
                <Button className="mt-1">
                  Našli jste nesrovnalost? <br /> Napište nám.
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </Alert>
    </>
  );
};

export default Home;
