import React from 'react';
import { useState } from 'react';
import './style.css';

const PrvniPomoc = () => {
  const [isOn, setIsOn] = useState(true);
  let zmenaTridy = !isOn ? 'div' : 'div div--schovat';

  return (
    <div className="container">
      <h1>První pomoc</h1>
      <div>
        <div className="textPrvniPomoc">
          První pomoc bude vždy rozdílná. Záleží na druhu zvířete, které
          zachraňuje a také situaci, ve které se nacházíte.
        </div>
        <div className="obalPrvniPomoc">
          <div className="textPrvniPomoc1">
            Jaké jsou obecné rady, kterými se můžete řídit?
          </div>

          <ul>
            <li>
              V telefonu mějte uložený kontakt na nonstop veterinu nebo mít
              přístup k datům a využít tuto aplikaci.
            </li>
            <li>
              Zavolejte na veterinární pohotovost, veterinární záchrannou službu
              či ošetřujícímu veterináři.
            </li>
            <li>Řiďte se pokyny veterináře.</li>
            <li>
              Případně využijte obsah domácí lékárničky pro vašeho mazlíčka.
            </li>
            <li>
              Pokud se s veterinářem domluvíte, převezte zvíře na veterinu
            </li>
          </ul>
        </div>
      </div>
      <div className="texPrvniPomoc2">
        <div className="texPrvniPomoc2">
          Jaké konkrétní situace mohou nastat a co je možné dělat?
        </div>
        <div className="texPrvniPomoc2-volej">
          Vždy volejte veterináře a domluvte s ním postup v dané situaci
        </div>
      </div>
      <div>
        <div className="nadpisyPrvniPomoc" onClick={() => setIsOn(!isOn)}>
          <h2>Přehřátí</h2>
          <div className={zmenaTridy}>
            <div>
              Přehřátí může nastat v letním období. Nejlepší první pomocí u
              přehřátí je prevence - nevystavovat zvíře vysokým teplotám, zvýšit
              příjem tekutin u zvířete, nenechávat zvíře v zavřeném autě ani na
              pár minut.
            </div>
            <div>
              Zchlaďte zvíře zábalem do mokrého ručníku na max. 10 minut.
            </div>
            <div>Kontaktujte veterináře.</div>
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn(!isOn)}>
        <h2>Popálení</h2>
        <div className={zmenaTridy}>
          <div>
            Popáleniny mohou být způsobeny teplem či chemicky. Dochází k
            poškození kůže.
          </div>
          <div>Odstraňte zdroj tepla.</div>
          <div>
            Sledujte základní životní funkce, případě zahájíte resuscitaci
          </div>
          <div>
            Vhodné je aplikovat vlhké obklady a pravidelně je měnit. Rána
            způsobená chemickými popáleninami by měla být opláchnuta dostatečným
            množstvím studené asi 10 minut.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn(!isOn)}>
        <h2>Pokousání</h2>
        <div className={zmenaTridy}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odio corrupti molestiae, ducimus exercitationem mollitia praesentium
            neque dolorum hic rem ab, voluptate aspernatur ipsum ratione debitis
            excepturi dolorem, amet vitae.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn(!isOn)}>
        <h2>Otrava</h2>
        <div className={zmenaTridy}>
          <div>
            Pokud je to možné zjistěte příčinu otravy. Tou může být např.
            pokojová květina, uštknutí hadem, čokoláda, nemrznoucí směs, čistící
            prostředky, řasa, pesticidy, jedy na hlodavce a mnoho dalšího.
            Vyvolejte zvracení nejlépe do dvou hodin od pozření za pomocí
            peroxidu vodíku. Tento bod nedělejte nikdy bez porady s veterinářem.
            Podejte černé uhlí. V případě otrávené návnady kontaktujte Policii
            ČR.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrvniPomoc;
