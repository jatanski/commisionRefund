import React, { useState, useEffect, FC } from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';

interface NavViewProps {
  navClassName: string;
}

const NavView: FC<NavViewProps> = ({ navClassName }) => {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    screen.width <= 800 ? setShowButton(false) : setShowButton(true);
  });

  return (
    <section className={navClassName}>
      <a aria-label="Przejdź do góry strony" href="#header">
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
          {showButton ? (
            <li className="superLi">
              <a className="aaa" href="#contact">
                <div className="nav__item nav__item--analize">
                  <FontAwesomeIcon className="nav__item__icon" icon={faSearchDollar} />
                  <p className="nav__item__text">Darmowa Analiza</p>
                </div>
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </section>
  );
};

export default NavView;
