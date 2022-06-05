import React from 'react';
import { useEffect } from 'react';
import './style.css';
import * as ReactDOMServer from 'react-dom/server';
import { Button } from 'react-bootstrap';

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function createMarkerBody(stanice, staniceCoords) {
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
      {isMobile() ? (
        <a href={`geo:${staniceCoords.y},${staniceCoords.x}`}>Ukaž mi trasu</a>
      ) : (
        <a
          href={`https://mapy.cz/zakladni?q=${staniceCoords.y},${staniceCoords.x}&z=11`}
          target="_blank"
        >
          <Button className="mt-3">Ukaž mi trasu</Button>
        </a>
      )}
    </div>
  );
}

function createMarker(stanice, index) {
  var staniceCoords = SMap.Coords.fromWGS84(stanice.GPS);

  let cestaKObrazku = '/img/tlapkaDoMapy_pruhledna2.png';
  if (stanice.type === 'Nonstop') {
    cestaKObrazku = '/img/tlapkaDoMapyZelena_pruhledna.png';
  }

  var znacka = JAK.mel('div');
  var obrazek = JAK.mel('img', { src: cestaKObrazku });
  znacka.appendChild(obrazek);

  var card = new SMap.Card();
  card.getHeader().innerHTML = `<strong>${stanice.jmeno}</strong>`;
  card.getBody().innerHTML = ReactDOMServer.renderToString(
    createMarkerBody(stanice, staniceCoords),
  );

  var options = {
    title: stanice.jmeno,
    url: znacka,
  };
  var marker = new SMap.Marker(staniceCoords, 'myMarker' + index, options);
  marker.decorate(SMap.Marker.Feature.Card, card);
  return marker;
}

const Mapa = ({ stanices, lokace }) => {
  useEffect(() => {
    var center = SMap.Coords.fromWGS84(lokace.x, lokace.y);
    var mapa = new SMap(JAK.gel('mapa'), center, 15);
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
