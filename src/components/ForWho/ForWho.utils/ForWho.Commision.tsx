import React, { FC } from 'react';
import { ForWhoElementProps } from '../forWho.types';

const Commision: FC<ForWhoElementProps> = ({ className: classes }) => (
  <div className={classes}>
    <h3 className="forWho__commision--title">Czym jest prowizja bankowa?</h3>
    <p className="forWho__commision--desc">
      <span className="bold">Prowizja to istotny </span>
      parametr przekładający się na całkowity koszt kredytu. Jest to opłata pobierana przez bank tytułem udzielenia
      finansowania. Ma ona charakter jednorazowy i jest wyliczana jako procent od przyznanej kwoty kredytu.
    </p>
    <p className="forWho__commision--desc">
      <span className="bold">Prowizje od kredytów i pożyczek gotówkowych </span>
      udzielanych przez banki są z roku na rok coraz wyższe.
      <br />
      Klientów nie powinno już dziwić, gdy prowizja dochodzi do kilkunastu, a w skrajnych przypadkach nawet{' '}
      <span className="bold">do 30%.</span>
    </p>
    <p className="forWho__commision--desc">
      Jeżeli spłacili Państwo kredyt przed czasem, skonsolidowali lub przenieśli do innego banku, to zgodnie ze
      stanowiskiem rzecznika finansowego i prezesa UOKiK, bank <span className="bold">powinien oddać Państwu</span> tę
      część prowizji, której klient nie spłacił w ratach.
    </p>
    <p className="forWho__commision--desc">
      Niestety <span className="bold">ponad 95% osób, nawet nie wie</span>
      , że ma do tego prawo,
      <br />
      a bank dobrowolnie nie zwróci takiej prowizji.
      <br />
      Klientowi zostaje jedynie droga sądowa.
    </p>
  </div>
);

export default Commision;
