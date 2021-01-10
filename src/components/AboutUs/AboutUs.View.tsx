import React, { FC } from 'react';
import './aboutUs.scss';

interface AboutUsViewProps {
  titleClass: string;
  descClass: string;
  numberOfMoney: number;
}

const AboutUsView: FC<AboutUsViewProps> = ({ titleClass, descClass, numberOfMoney }) => {
  const moneyDescClass = `${descClass} about__main--desc-money`;
  const underlineDescClass = `${descClass} underline`;

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

export default AboutUsView;
