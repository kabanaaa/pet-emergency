import React from 'react';
import Mapa from '../common/Mapa';
import { praha } from '../data/Praha.js';

const Home = () => (
  <div className="container">
    <Mapa stanices={praha} />
  </div>
);

export default Home;
