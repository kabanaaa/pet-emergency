import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const ZvireVtisni = () => (
  <div className="container">
    <h1 className="NadpisyH1">ZVÍŘE V TÍSNI</h1>
    <div>
      <div className="textZvireVTisni">
        <p>
          Český svaz ochránců přírody má{' '}
          <a href="https://play.google.com/store/apps/details?id=cz.uhk.fim.zvirevnouzi">
            mobilní aplikaci
          </a>
          , která Vám pomůže, když ve městě nebo v přírodě najdete zraněné nebo
          opuštěné zvíře. Aplikace pomocí gps pozice vyhledá záchrannou stanici,
          v jejíž působnosti se právě nacházíte a nabídne Vám rovnou do stanice
          zavolat, poslat gps souřadnice místa nálezu, nebo Vás naviguje, pokus
          se domluvíte na osobním předání zvířete. Můžete zaslat do stanice
          fotografii zvířete.
        </p>
        <p>
          Dispečink záchranných stanic:{' '}
          <a href="tel:+420774155155">774 155 155</a>
        </p>
      </div>
      <Alert>
        <h2>SEDMERO PRO ZVÍŘE V NOUZI</h2>
        <p className="textDesatero">
          Pokud najdete zvíře, přesvědčte se zda pomoc skutečně potřebuje,
          například jestli je opuštěné.
        </p>
        <p className="textDesatero">
          Nedotýkejte se a neodebírejte zvířata včetně mláďat, pokud nejsou
          prokazatelně osiřelá, zraněná nebo uvízlá.
        </p>
        <p className="textDesatero">
          Dospělá zvířata patří do rukou odborníků z důvodu nakažení přenosnou
          nemocí. Dodržujte hygienu!
        </p>
        <p className="textDesatero">
          Při kontaktování odborníků popište místo, vzhled a projevy zraněného
          zvířete, oni Vám poradí.
        </p>
        <p className="textDesatero">
          Ptačí mládě, které potřebuje pomoc, poznáte především podle toho, že
          ještě není opeřené, sedí na zemi a píská. <br /> Ptáčata, která jsou
          již opeřená, ale ještě neumějí létat, nepotřebují pomoc.
        </p>
        <p className="textDesatero">
          Pokud potkáte ve dne ježka, je možné, že potřebuje pomoc. Jde o noční
          zvíře, které ve dne spí. Ježek se dále může obtížně pohybovat, je
          malátný a nestočí se do klubíčka.
        </p>
        <p className="textDesatero">
          K vodní hladině přimrzne pouze zraněné zvíře. Zkuste ho nejprve vhodně
          vyplašit, pokud se snaží vzlétnout a nemůže, volejte pomoc.
        </p>
      </Alert>
    </div>
  </div>
);

export default ZvireVtisni;
