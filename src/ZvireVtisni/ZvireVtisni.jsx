import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const ZvireVtisni = () => (
  <div className="container">
    <h1 className="NadpisyH1">ZVÍŘE V TÍSNI</h1>
    <div>
      <div className='textZvireVTisni'>
        <p>
          Český svaz ochránců přírody má <a href="https://play.google.com/store/search?q=zv%C3%AD%C5%99e%20v%20nouzi&c=apps">mobilní aplikaci</a>, která Vám pomůže když ve městě nebo v přírodě najdete zraněné nebo opuštěné zvíře. Aplikace pomocí gps pozice vyhledá záchrannou stanici, v jejíž působnosti se právě nacházíte a nabídne Vám rovnou do stanice zavolat, poslat gps souřadnice místa nálezu, nebo Vás naviguje, pokus se domluvíte na osobním předání zvířete. Můžete zaslat do stanice fotografii zvířete.
        </p>
        <p>

        </p>
        <p>
          Dispečink záchranných stanic: 774 155 155
        </p>
      </div><Alert>
        <h2>DESATERO ZVÍŘE V NOUZI</h2>
        <p>
          Najdete-li mládě, pak se přesvědčte zda pomoc skutečně potřebuje, zda je opuštěné.
        </p>
        <p>
          Nedotýkejte se a neodebírejte mláďata zajíců, srnčí, jelení, daní a mufloní zvěře, pokud nejsou prokazatelně osiřelá, zraněná nebo uvízlá.
        </p>
        <p>
          Dospělí jedinci patří do rukou odborníků, protože hrozí poranění zachránce či jeho nakažení vzteklinou. Zda nejde o chorobu přenosnou i na člověka pozná pouze odborník (veterinář)!  Dodržujte hygienu!
        </p>
        <p>
          Odborníkům popište místo, vzhled a projevy zraněného zvířete, oni Vám poradí.
        </p>
        <p>
          Chraňte své zdraví – pokud nevidíte zjevné poranění, může se jednat o onemocnění zvířete.
        </p>
        <p>
          Ochočená, uměle odchovaná zvířata nepatří do přírody, protože obvykle ztrácejí přirozenou plachost, a mohou být zabita predátorem nebo myslivcem jako podezřelá z nakažení vzteklinou.
        </p>
        <p>
          Ptačí mládě, které potřebuje pomoc, poznáte především podle toho, že ještě není opeřené, sedí na zemi a píská. Ptačího mláděte se můžete dotknout.
        </p>
        <p>
          Ptáčata, která jsou již opeřená, ale ještě neumějí létat, nepotřebují pomoc. Umístěte je na vyvýšené místo (větev, zídka, apod.), jejich rodiče je najdou a nakrmí.
        </p>
        <p>
          Ježek, který potřebuje pomoc, se obvykle obtížně pohybuje, je malátný, při dotyku rukou nenaježí bodliny, nestočí se do klubíčka.
        </p>
        <p>
          K vodní hladině přimrzne pouze zraněné zvíře. Zkuste ho nejprve vhodně vyplašit, pokud se snaží vzlétnout a nemůže, volejte pomoc.
        </p>
      </Alert>
    </div>
  </div >
);

export default ZvireVtisni;
