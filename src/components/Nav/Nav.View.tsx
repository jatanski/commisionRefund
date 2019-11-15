import React from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';

type ViewProps = {
  navClasses: string;
};

const View = ({ navClasses }: ViewProps) => {
  return (
    <section className={navClasses}>
      <div className="menu__logo">
        <Image></Image>
      </div>
      <nav className="nav">
        <ul className="nav__wrap">
          <li className="nav__item">
            <a className="nav__item__link" href="">
              Dla kogo?
            </a>{' '}
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="">
              Czym się zajmujemy?
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="">
              Jak to wygląda w praktyce?
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="">
              FAQ
            </a>
          </li>
          <li className="nav__item nav__item">
            <a className="nav__item__link nav__item__link--noborder" href="">
              Kontakt
            </a>
          </li>
          <li className="nav__item nav__item--analize">
            <FontAwesomeIcon className="nav__item__icon" icon={faSearchDollar} />
            <a className="nav__item__link nav__item__link--noborder" href="">
              Darmowa Analiza
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default View;
