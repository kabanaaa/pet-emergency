import React, { useEffect } from 'react';
import Mapa from '../common/Mapa';
import { praha } from '../data/Praha.js';
import { brno } from '../data/Brno.js';
import { ceskeBudejovice } from '../data/CeskeBudejovice.js';
import { liberec } from '../data/Liberec.js';
import { ostrava } from '../data/Ostrava.js';
import { plzen } from '../data/Plzen.js';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const Hledani = () => {
  let allStanices = Array.prototype.concat.apply(
    [],
    [praha, brno, ceskeBudejovice, liberec, ostrava, plzen],
  );

  const [lokace, setLokace] = useState(null);
  function geolocationSuccess(position) {
    const result = {
      x: position.coords.longitude,
      y: position.coords.latitude,
    };
    setLokace(result);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geolocationSuccess, () => {
      setLokace({ y: '50.0731317', x: '14.4947492' });
    });
  }, []);
  if (lokace === null) {
    return <div>Načítání lokace</div>;
  }
  console.log(lokace);
  return (
    <div>
      <Mapa stanices={allStanices} lokace={lokace} />
      <span className="vysvetlivky">
        <span className="me-2">
          <img
            className="me-1 tlapkaVysvetlivky"
            src="/img/tlapkaDoMapyZelena_pruhledna.png"
            alt="zelená tlapka"
          />
          Pohotovosti nonstop
        </span>
      </span>
    </div>
  );
};

export default Hledani;
