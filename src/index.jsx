import React from 'react';
import { App } from 'App';
import './style.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <p>Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
); */

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="lekarnicka" element={<Lekarnicka />} />
        <Route path="prvnipomoc" element={<PrvniPomoc />} />
        <Route path="zvirevtisni" element={<ZvireVtisni />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

/* createRoot(document.querySelector('#app')).render(<App />); */
