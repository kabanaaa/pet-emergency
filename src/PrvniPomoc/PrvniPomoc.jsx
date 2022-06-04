import React from 'react';
import './style.css';
import { Accordion } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const PrvniPomoc = () => {
  return (
    <div className="container">
      <h1>PRVNÍ POMOC</h1>
      <div>
        <p className="textPrvniPomoc">
          První pomoc bude vždy rozdílná. Záleží na druhu zvířete, které
          zachraňuje a také situaci, ve které se nacházíte.
        </p>
        <Alert>
          <p className="textPrvniPomoc">
            Jaké jsou obecné rady, kterými se můžete řídit?
          </p>
          <p>
            V telefonu mějte uložený kontakt na nonstop veterinu nebo mít
            přístup k datům a využít tuto aplikaci.
          </p>
          <p>
            Zavolejte na veterinární pohotovost, veterinární záchrannou službu
            či ošetřujícímu veterináři.
          </p>
          <p>Řiďte se pokyny veterináře.</p>
          <p>Případně využijte obsah domácí lékárničky pro vašeho mazlíčka.</p>
          <p>Pokud se s veterinářem domluvíte, převezte zvíře na veterinu</p>
        </Alert>
      </div>
      <div className="texPrvniPomoc">
        <div className="texPrvniPomoc-volej">
          VŽDY VOLEJTE VETERINÁŘE A DOMLUVTE S NÍM POSTUP V DANÉ SITUACI!
        </div>
        <div className="texPrvniPomoc2">
          JAKÉ SITUACE MOHOU NASTAT A CO JE MOŽNÉ DĚLAT?
        </div>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Přehřátí </Accordion.Header>
          <Accordion.Body>
            <p>
              Přehřátí může nastat v letním období. Nejlepší první pomocí u
              přehřátí je prevence - nevystavovat zvíře vysokým teplotám, zvýšit
              příjem tekutin u zvířete, nenechávat zvíře v zavřeném autě ani na
              pár minut.
            </p>
            <p>Zchlaďte zvíře zábalem do mokrého ručníku na max. 10 minut.</p>
            <p>Kontaktujte veterináře.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Popálení</Accordion.Header>
          <Accordion.Body>
            <p>
              Popáleniny mohou být způsobeny teplem či chemicky. Dochází k
              poškození kůže.
            </p>
            <p>Odstraňte zdroj tepla.</p>
            <p>
              Sledujte základní životní funkce, případě zahájíte resuscitaci
            </p>
            <p>
              Vhodné je aplikovat vlhké obklady a pravidelně je měnit. Rána
              způsobená chemickými popáleninami by měla být opláchnuta
              dostatečným množstvím studené asi 10 minut.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Pokousání</Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odio corrupti molestiae, ducimus exercitationem mollitia
              praesentium neque dolorum hic rem ab, voluptate aspernatur ipsum
              ratione debitis excepturi dolorem, amet vitae.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Otrava</Accordion.Header>
          <Accordion.Body>
            <p>
              Pokud je to možné zjistěte příčinu otravy. Tou může být např.
              pokojová květina, uštknutí hadem, čokoláda, nemrznoucí směs,
              čistící prostředky, řasa, pesticidy, jedy na hlodavce a mnoho
              dalšího. Vyvolejte zvracení nejlépe do dvou hodin od pozření za
              pomocí peroxidu vodíku. Tento bod nedělejte nikdy bez porady s
              veterinářem. Podejte černé uhlí. V případě otrávené návnady
              kontaktujte Policii ČR.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Zlomenina </Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              excepturi architecto quaerat. Unde voluptas delectus amet ratione
              laborum et, accusantium quod libero sunt labore, cupiditate ab
              officia aperiam sit optio. ČR.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Tonutí</Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              excepturi architecto quaerat. Unde voluptas delectus amet ratione
              laborum et, accusantium quod libero sunt labore, cupiditate ab
              officia aperiam sit optio. ČR.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Úraz nehoda</Accordion.Header>
          <Accordion.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              excepturi architecto quaerat. Unde voluptas delectus amet ratione
              laborum et, accusantium quod libero sunt labore, cupiditate ab
              officia aperiam sit optio. ČR.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Křečové stavy</Accordion.Header>
          <Accordion.Body>
            <p>
              Křečové stavy mohou být vyvolány různými spouštěči. Při záchvatu
              zvíře nedržte, nesnažte se zabránit křečím. Naopak se snažte
              odstranit věci, o které by si zvíře mohlo ublížit. Kontaktujte
              veterináře.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PrvniPomoc;
