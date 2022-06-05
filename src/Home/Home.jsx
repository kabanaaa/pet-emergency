import React from 'react';

const Home = () => {
  <div>
    <p>
      Vítejte na stárnkách PetEmergency. Pokud hledáte veterinární pohotovost
      můžete začít hledat zde:
    </p>
    <a className="ikonaKlik" href="https://pet-emergency.netlify.app/hledani">
      <img src="./img/tlapka_pruhledna.png" alt="obrázek tlapky v kroužku" />
    </a>
  </div>;
  <div>
    <a href="mailto:banackakaterina@gmail.com,Sarka7091@gmail.com">
      <Button className="mt-1">Našli jste nesrovnalost, napište nám</Button>
    </a>
    <p>
      Veškeré informace uvedené na těchto stránkách slouží k základní orientci,
      pokud se Vašemu zvířeti něco děje, volejte ihned veterináře!
    </p>
    <p>
      Než vyjedete na vybranou veterinární pohotovost, doporučujeme tam nejdříve
      zavolat a domluvit se na příjezdu a případném přijetí zvířete k ošetření.
    </p>
  </div>;
};

export default Home;
