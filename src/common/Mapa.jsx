import React from 'react';
import { useEffect } from 'react';
import './style.css';
import * as ReactDOMServer from 'react-dom/server';

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function createMarkerBody(stanice) {
  return (
    <div>
      <div className="polozkaKarty">
        <strong>Adresa:</strong>
        {stanice.adresa.split(',').map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
      <div className="polozkaKarty">
        <img
          className="kontakt"
          src="img/telephone.svg"
          alt="sluchatko telefonu"
        />
        <a className="odkazMapa" href={`tel:${stanice.telefon}`}>
          {stanice.telefon}
        </a>
      </div>
      <div className="polozkaKarty">
        <img className="kontakt" src="img/web.svg" alt="znacka pro web" />
        <a className="odkazMapa" href={stanice.web} target="_blank">
          {stanice.web}
        </a>
      </div>
      <div className="polozkaKarty">
        <strong> Otevírací doba:</strong>
        {stanice.oteviraciDoba.split(',').map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
      {stanice.pojistovna !== 'null' && (
        <div className="polozkaKarty">
          <strong> Pojišťovna: </strong>
          {stanice.pojistovna}
        </div>
      )}
      {stanice.poznamky !== 'null' && (
        <div className="polozkaKarty">
          <strong> Poznámky: </strong>
          {stanice.poznamky}
        </div>
      )}
      {isMobile ? 'Ukaž na počítači' : 'Ukaž na mobilu'}
      <button href="https://mapy.cz/zakladni?x=14.5045000&y=50.0804000&z=11">
        Ukaž mi trasu
      </button>
    </div>
  );
}

function createMarker(stanice, index) {
  var staniceCoords = SMap.Coords.fromWGS84(stanice.GPS);

  var znacka = JAK.mel('div');
  var obrazek = JAK.mel('img', {
    src: '/img/tlapkaDoMapy_pruhledna2.png',
  });
  znacka.appendChild(obrazek);

  var card = new SMap.Card();
  card.getHeader().innerHTML = `<strong>${stanice.jmeno}</strong>`;
  card.getBody().innerHTML = ReactDOMServer.renderToString(
    createMarkerBody(stanice),
  );

  var options = {
    title: stanice.jmeno,
    url: znacka,
  };
  var marker = new SMap.Marker(staniceCoords, 'myMarker' + index, options);
  marker.decorate(SMap.Marker.Feature.Card, card);
  return marker;
}

const Mapa = ({ stanices }) => {
  useEffect(() => {
    var center = SMap.Coords.fromWGS84(14.41, 50.08);
    var mapa = new SMap(JAK.gel('mapa'), center, 10);
    mapa.addDefaultLayer(SMap.DEF_BASE).enable();
    mapa.addDefaultControls();
    var layer = new SMap.Layer.Marker();
    mapa.addLayer(layer);
    layer.enable();
    let index = 0;
    for (const stanice of stanices) {
      const marker = createMarker(stanice, index++);
      layer.addMarker(marker);
    }
  }, []);

  return <div id="mapa"></div>;
};

export default Mapa;
