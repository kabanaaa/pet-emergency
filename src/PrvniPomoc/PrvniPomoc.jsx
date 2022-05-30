import React from 'react';
import { useState } from 'react';
import './style.css';

const PrvniPomoc = () => {
  const [isOn, setIsOn] = useState(true);
  let zmenaTridy = !isOn ? 'div' : 'div div--schovat';

  const [isOn1, setIsOn1] = useState(true);
  let zmenaTridy1 = !isOn1 ? 'div' : 'div div--schovat1';

  const [isOn2, setIsOn2] = useState(true);
  let zmenaTridy2 = !isOn2 ? 'div' : 'div div--schovat2';

  const [isOn3, setIsOn3] = useState(true);
  let zmenaTridy3 = !isOn3 ? 'div' : 'div div--schovat3';

  const [isOn4, setIsOn4] = useState(true);
  let zmenaTridy4 = !isOn4 ? 'div' : 'div div--schovat4';

  const [isOn5, setIsOn5] = useState(true);
  let zmenaTridy5 = !isOn5 ? 'div' : 'div div--schovat5';

  const [isOn6, setIsOn6] = useState(true);
  let zmenaTridy6 = !isOn6 ? 'div' : 'div div--schovat6';

  const [isOn7, setIsOn7] = useState(true);
  let zmenaTridy7 = !isOn7 ? 'div' : 'div div--schovat7';

  const [isOn8, setIsOn8] = useState(true);
  let zmenaTridy8 = !isOn8 ? 'div' : 'div div--schovat8';

  return (
    <div className="container">
      <h1>PRVNÍ POMOC</h1>
      <div>
        <div className="textPrvniPomoc">
          První pomoc bude vždy rozdílná. Záleží na druhu zvířete, které
          zachraňuje a také situaci, ve které se nacházíte.
        </div>
        <div className="obalPrvniPomoc">
          <div className="textPrvniPomoc">
            Jaké jsou obecné rady, kterými se můžete řídit?
          </div>
          <div>
            V telefonu mějte uložený kontakt na nonstop veterinu nebo mít
            přístup k datům a využít tuto aplikaci.
          </div>
          <div>
            Zavolejte na veterinární pohotovost, veterinární záchrannou službu
            či ošetřujícímu veterináři.
          </div>
          <div>Řiďte se pokyny veterináře.</div>
          <div>
            Případně využijte obsah domácí lékárničky pro vašeho mazlíčka.
          </div>
          <div>
            Pokud se s veterinářem domluvíte, převezte zvíře na veterinu
          </div>
        </div>
      </div>
      <div className="texPrvniPomoc">
        <div className="texPrvniPomoc-volej">
          VŽDY VOLEJTE VETERINÁŘE A DOMLUVTE S NÍM POSTUP V DANÉ SITUACI!
        </div>
        <div className="texPrvniPomoc2">
          JAKÉ SITUACE MOHOU NASTAT A CO JE MOŽNÉ DĚLAT?
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
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn1(!isOn1)}>
        <h2>Popálení</h2>
        <div className={zmenaTridy1}>
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
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn2(!isOn2)}>
        <h2>Pokousání</h2>
        <div className={zmenaTridy2}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odio corrupti molestiae, ducimus exercitationem mollitia praesentium
            neque dolorum hic rem ab, voluptate aspernatur ipsum ratione debitis
            excepturi dolorem, amet vitae.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn3(!isOn3)}>
        <h2>Otrava</h2>
        <div className={zmenaTridy3}>
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
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn4(!isOn4)}>
        <h2>Zlomenina</h2>
        <div className={zmenaTridy4}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi architecto quaerat. Unde voluptas delectus amet ratione
            laborum et, accusantium quod libero sunt labore, cupiditate ab
            officia aperiam sit optio. ČR.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn5(!isOn5)}>
        <h2>Dušení nebo dávení kostí či jiným předmětem</h2>
        <div className={zmenaTridy5}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi architecto quaerat. Unde voluptas delectus amet ratione
            laborum et, accusantium quod libero sunt labore, cupiditate ab
            officia aperiam sit optio. ČR.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn6(!isOn6)}>
        <h2>Tonutí</h2>
        <div className={zmenaTridy6}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi architecto quaerat. Unde voluptas delectus amet ratione
            laborum et, accusantium quod libero sunt labore, cupiditate ab
            officia aperiam sit optio. ČR.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn7(!isOn7)}>
        <h2>Úraz nehoda</h2>
        <div className={zmenaTridy7}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            excepturi architecto quaerat. Unde voluptas delectus amet ratione
            laborum et, accusantium quod libero sunt labore, cupiditate ab
            officia aperiam sit optio. ČR.
          </div>
        </div>
      </div>
      <div className="nadpisyPrvniPomoc" onClick={() => setIsOn8(!isOn8)}>
        <h2>Křečové stavy</h2>
        <div className={zmenaTridy8}>
          <div>
            Křečové stavy mohou být vyvolány různými spouštěči. Při záchvatu
            zvíře nedržte, nesnažte se zabránit křečím. Naopak se snažte
            odstranit věci, o které by si zvíře mohlo ublížit. Kontaktujte
            veterináře.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrvniPomoc;
