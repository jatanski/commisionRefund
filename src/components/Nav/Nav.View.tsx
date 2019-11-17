import React from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';

type ViewProps = {
  navClasses: string;
};

const View = ({ navClasses }: ViewProps) => {
  return (
    <section className={navClasses}>
      <a href="#header">
        <div className="menu__logo">
          <Logo></Logo>
        </div>
      </a>
      <nav className="nav">
        <ul className="nav__wrap">
          <li className="nav__item">
            <a className="nav__item__link" href="#forWho">
              Dla kogo?
            </a>{' '}
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#aboutUs">
              Czym się zajmujemy?
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#practice">
              Jak to wygląda w praktyce?
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#faq">
              FAQ
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link nav__item__link--noborder" href="#contact">
              Kontakt
            </a>
          </li>
          <a className="aaa" href="#contact">
            <li className="nav__item nav__item--analize">
              <FontAwesomeIcon className="nav__item__icon" icon={faSearchDollar} />
              <p className="nav__item__text">Darmowa Analiza</p>
            </li>
          </a>
        </ul>
      </nav>
    </section>
  );
};

export default View;
