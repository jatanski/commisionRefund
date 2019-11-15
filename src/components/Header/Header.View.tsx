import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const View = () => {
  return (
    <section className="header">
      <div className="header__main">
        <h2 className="header__main__text header__main__text--first">
          Czy Twój bank <br /> poinformował Cię, <br /> że należy Ci się{' '}
          <span className="header__main__text--important">zwrot prowizji</span> <br /> z kredytu gotówkowego?
        </h2>
        <p className="header__main__text header__main__text--second">
          Jeżeli spłaciłeś przed terminem, skonsolidowałeś lub przeniosłeś do innego banku swój kredyt to uzyskamy dla
          Ciebie gwarantowany zwrot prowizji!
        </p>
        <div className="header__main__text header__main__text--third">
          <h3 className="h3">Nawet 10 000 zł!</h3>
          <button className="header__button">Zamów darmową analizę</button>
        </div>
      </div>
      <div className="header__animationArrow">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </section>
  );
};

export default View;
