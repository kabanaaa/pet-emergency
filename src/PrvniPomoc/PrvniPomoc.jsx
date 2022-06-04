import React from 'react';
import { useState } from 'react';
import './style.css';
import PrvniPomocBlok from './PrvniPomocBlok';

const PrvniPomoc = () => {
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
      <PrvniPomocBlok nadpis="Přehřátí">
        <div>
          Přehřátí může nastat v letním období. Nejlepší první pomocí u přehřátí
          je prevence - nevystavovat zvíře vysokým teplotám, zvýšit příjem
          tekutin u zvířete, nenechávat zvíře v zavřeném autě ani na pár minut.
        </div>
        <div>Zchlaďte zvíře zábalem do mokrého ručníku na max. 10 minut.</div>
        <div>Kontaktujte veterináře.</div>
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Popálení">
        <div>
          Popáleniny mohou být způsobeny teplem či chemicky. Dochází k poškození
          kůže.
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
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Pokousání">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          odio corrupti molestiae, ducimus exercitationem mollitia praesentium
          neque dolorum hic rem ab, voluptate aspernatur ipsum ratione debitis
          excepturi dolorem, amet vitae.
        </div>
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Otrava">
        <div>
          Pokud je to možné zjistěte příčinu otravy. Tou může být např. pokojová
          květina, uštknutí hadem, čokoláda, nemrznoucí směs, čistící
          prostředky, řasa, pesticidy, jedy na hlodavce a mnoho dalšího.
          Vyvolejte zvracení nejlépe do dvou hodin od pozření za pomocí peroxidu
          vodíku. Tento bod nedělejte nikdy bez porady s veterinářem. Podejte
          černé uhlí. V případě otrávené návnady kontaktujte Policii ČR.
        </div>
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Zlomenina">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi architecto quaerat. Unde voluptas delectus amet ratione
          laborum et, accusantium quod libero sunt labore, cupiditate ab officia
          aperiam sit optio. ČR.
        </div>
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Tonutí">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi architecto quaerat. Unde voluptas delectus amet ratione
          laborum et, accusantium quod libero sunt labore, cupiditate ab officia
          aperiam sit optio. ČR.
        </div>
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Úraz nehoda">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi architecto quaerat. Unde voluptas delectus amet ratione
          laborum et, accusantium quod libero sunt labore, cupiditate ab officia
          aperiam sit optio. ČR.
        </div>
      </PrvniPomocBlok>

      <PrvniPomocBlok nadpis="Křečové stavy">
        <div>
          Křečové stavy mohou být vyvolány různými spouštěči. Při záchvatu zvíře
          nedržte, nesnažte se zabránit křečím. Naopak se snažte odstranit věci,
          o které by si zvíře mohlo ublížit. Kontaktujte veterináře.
        </div>
      </PrvniPomocBlok>
    </div>
  );
};

export default PrvniPomoc;
