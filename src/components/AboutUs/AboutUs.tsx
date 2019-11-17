import React from 'react';

import './aboutUs.scss';

const View = () => {
  return (
    <section id="aboutUs" className="about">
      <div className="about__image"></div>
      <div className="about__main">
        <h2 className="about__main--title">Czym się zajmujemy?</h2>
        <p className="about__main--desc">
          Nasza firma zajmuje się <span className="bold">odzyskiwaniem prowizji bankowych</span> z kredytów
          konsumenckich. <br /> Oferta dotyczy
          <span className="underline">odkupienia praw do rozliczeń finansowych</span> umów kredytów/pożyczek.
        </p>
        <p className="about__main--desc">
          Dzięki takiemu rozwiązaniu klient otrzymuje pieniądze na swoje konto
          <span className="bold">do 7 dni od pierwszego kontaktu</span> z nami, <br /> bez konieczności czekania wielu
          miesięcy, a nawet lat na rozstrzygnięcie sprawy w sądzie.
        </p>
        <p className="about__main--desc about__main--desc-money">12 000 PLN</p>
        <p className="about__main--desc underline"> Nawet taką kwotę wypłacimy Ci w 24h</p>
        <button className="about__main--button">Zamów darmową analizę Twojego zwrotu</button>
      </div>
    </section>
  );
};

export default View;
