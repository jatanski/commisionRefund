import React, { useEffect, useState } from 'react';

import './aboutUs.scss';

type Props = {
  titleClass: string;
  descClass: string;
};

const View = ({ titleClass, descClass }: Props) => {
  const moneyDescClass = `${descClass} about__main--desc-money`;

  const underlineDescClass = `${descClass} underline`;

  const [numberOfMoney, setNumberOfMoney] = useState(0);

  useEffect(() => {
    if (descClass === 'about__main--desc showElement') {
      if (numberOfMoney < 12000) setNumberOfMoney(numberOfMoney + 10);
    }
  });

  return (
    <section className="about">
      <div className="about__image"></div>
      <div className="about__main">
        <h2 id="aboutUs" className={titleClass}>
          Czym się zajmujemy?
        </h2>
        <p className={descClass}>
          Nasza firma zajmuje się <span className="bold">odzyskiwaniem prowizji bankowych</span> z kredytów
          konsumenckich. <br /> Oferta dotyczy
          <span className="underline"> odkupienia praw do rozliczeń finansowych </span> umów kredytów/pożyczek.
        </p>
        <p className={descClass}>
          Dzięki takiemu rozwiązaniu klient otrzymuje pieniądze na swoje konto
          <span className="bold"> do 7 dni od pierwszego kontaktu</span> z nami, <br /> bez konieczności czekania wielu
          miesięcy, a nawet lat na rozstrzygnięcie sprawy w sądzie.
        </p>
        <p className={moneyDescClass}>
          <span className="numbers">{numberOfMoney}</span> PLN
        </p>
        <p className={underlineDescClass}> Nawet taką kwotę wypłacimy Ci w 24h.</p>
        <a href="#contact">
          <button className="about__main--button">Zamów darmową analizę Twojego zwrotu</button>
        </a>
      </div>
    </section>
  );
};

export default View;
