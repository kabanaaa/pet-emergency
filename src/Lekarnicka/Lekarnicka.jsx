import React from 'react';
import './style.css';

function creastLekarnickaLi(text, index) {
  return (
    <li key={index}>
      <img className="kriz" src="/img/kriz_pruhledne.svg" alt="krizek" /> {text}
    </li>
  );
}
const Lekarnicka = () => {
  const lekarnickaList = [
    'Digitální teploměr s ohebnou špičkou',
    'Jednorázové rukavice',
    'Nůžky s kulatou špičkou',
    'Gázové čtverce',
    'Obvazová vata',
    'Obinadlo',
    'Náplast',
    'Adhezivní bandáž ',
    'Dezinfekce ',
    'Hemagel',
    'Pinzeta',
    'Injekční stříkačka 10 ml bez jehly',
    'Aplikátor tablet',
    'Odstraňovač klíšťat nebo pinzeta na klíšťata',
    'Roztok k čištění uší',
    'Oční a ušní kapky',
    'Psí balzám na tlapky',
    'Opalovací krém Menforsan (kočky, psi)',
    'Chladící podložka',
    'Tablety pro rychlé zastavení průjmu',
    'Pasty proti Trichobezoárům',
    'Probiotika',
    'Hřeben na blechy',
    'Entero zoo gel',
    'Gastrointestinální konzerva - při průjmu po 24 hodinovém půstu',
    'Peroxid vodíku - hodí se i v případě otravy, kdy umí u psa vyvolat zvracení, vždy konzultujte s veterinářem',
    'Černé uhlí / Enterogel - při otravě, když jsme nestihli vyvolat zvracení, vždy konzultujte s veterinářem',
    'Přípravek na odčervení',
    'Přípravek proti parazitům např. blechám, vnitřním parazitů',
    'Léky proti alergii např. vosí bodnutí',
    'Přípravky na zklidnění při stresové situaci',
    'Přípravky na podporu imunity',
  ];
  return (
    <div className="container">
      <h1 className="NadpisyH1">LÉKÁRNIČKA</h1>
      <div>
        <div className="textLekarnicka1">
          Obsah lékárničky pro vašeho mazlíčka by měl být přizpůsoben
          zdravotnímu stavu, věku mazlíčka, ale také specifikům daného mazlíčka.
        </div>
        <div className="textLekarnicka1">
          Co je prospěšné pro psa může být velmi rizikové pro kočku, z těchto
          důvodů nezaměňujte přípravky pro jednotlivá zvířata nebo s léky pro
          lidi.
        </div>
        <div className="textLekarnicka1">
          Pokud jsi nejste jisti, konzultujte obsah lékárničky nebo konkrétní
          situaci s ošetřujícím veterinářem.
        </div>
        <div className="textLekarnicka2">CO SE MŮŽE HODIT DO LÉKÁRNIČKY?</div>
        <div>
          <ul className="obsahLekarny">
            {lekarnickaList.map(creastLekarnickaLi)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lekarnicka;
