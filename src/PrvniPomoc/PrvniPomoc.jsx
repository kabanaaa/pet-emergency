import React from 'react';
import './style.css';
import { Alert, Accordion } from 'react-bootstrap';

const PrvniPomoc = () => {
  return (
    <div className="container">
      <h1>PRVNÍ POMOC</h1>
      <div>
        <Alert>
          <p className="textPrvniPomoc">
            Jaké jsou obecné rady, kterými se můžete řídit?
          </p>
          <p>
            V telefonu mějte uložený kontakt na nonstop veterinu nebo mějte
            přístup k datům a využijte tuto aplikaci.
          </p>
          <p>
            Zavolejte na veterinární pohotovost, veterinární záchrannou službu
            či ošetřujícímu veterináři.
          </p>
          <p>Řiďte se pokyny veterináře.</p>
          <p>Případně využijte obsah domácí lékárničky pro vašeho mazlíčka.</p>
          <p>Pokud se s veterinářem domluvíte, převezte zvíře na veterinu.</p>
          <p>
            První pomoc bude vždy rozdílná. Záleží na druhu zvířete, které
            zachraňuje a také situaci, ve které se nacházíte.
          </p>
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
          <Accordion.Header>Křečové stavy </Accordion.Header>
          <Accordion.Body>
            <p>
              Křečové stavy mohou být vyvolány různými spouštěči. Při záchvatu
              zvíře nedržte, nesnažte se zabránit křečím. Naopak se snažte
              odstranit věci, o které by si zvíře mohlo ublížit. Kontaktujte
              veterináře.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
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

        <Accordion.Item eventKey="2">
          <Accordion.Header>Pokousání</Accordion.Header>
          <Accordion.Body>
            <p>
              Nejprve zvíře důkladně prohlédněte a co nejdříve navštivte
              veterináře. Kontaktujte také majitele utočícího zvířete a ověřte s
              ním, zda je zvíře očkováné (chtějte vidět doklad o očkování).
              Pokud útočící zvíře očkované není, informujte o tom svého
              veterináře při ošetření pokousání.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Popálení</Accordion.Header>
          <Accordion.Body>
            <p>
              Popáleniny bývají způsobeny sluncem, teplem, elektrickým proudem
              či chemicky. Odstraňte zdroj, který způsobuje popálení. Sledujte
              základní životní funkce a kontaktujte veterináře. Můžete aplikovat
              vlhké obklady a pravidelně je měnit.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Přehřátí </Accordion.Header>
          <Accordion.Body>
            <p>
              Nejlépe je přehřátí předcházet - nevystavovat zvíře vysokým
              teplotám, zvýšit příjem tekutin u zvířete, nenechávat zvíře v
              zavřeném autě ani na pár minut. Zchlaďte zvíře zábalem do mokrého
              ručníku na max. 10 minut. Kontaktujte veterináře.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Zlomenina</Accordion.Header>
          <Accordion.Body>
            <p>
              Zlomneniny mohou být otevřené a nebo zavřené, bez konzultace s
              veterinářem je neošetřujte. Proto kontaktujte veterináře a
              dohodněte se na ošetření.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PrvniPomoc;
