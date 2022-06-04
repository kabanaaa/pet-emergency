import React from 'react';
import Mapa from '../common/Mapa';
import { praha } from '../data/Praha.js';
import { brno } from '../data/Brno.js';
import { ceskeBudejovice } from '../data/CeskeBudejovice.js';
import { liberec } from '../data/Liberec.js';
import { ostrava } from '../data/Ostrava.js';
import { plzen } from '../data/Plzen.js';

const Home = () => {
  let allStanices = Array.prototype.concat.apply(
    [],
    [praha, brno, ceskeBudejovice, liberec, ostrava, plzen],
  );
  return (
    <div className="container">
      <Mapa stanices={allStanices} />
    </div>
  );
};

export default Home;
