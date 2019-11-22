import React from 'react';
import { Props } from '../ForWho';

// @ts-ignore
import IconCash from '../../../images/clients-icons/cash.png';
// @ts-ignore
import IconCoins from '../../../images/clients-icons/coins.png';
// @ts-ignore
import IconConversation from '../../../images/clients-icons/conversation.png';
// @ts-ignore
import IconFile from '../../../images/clients-icons/file.png';
// @ts-ignore
import IconMoney from '../../../images/clients-icons/get-money.png';
// @ts-ignore
import IconTrouble from '../../../images/clients-icons/problem.png';

const Clients = ({ classes }: Props) => {
  return (
    <div className={classes}>
      <h2 className="forWho__clients--title">Pomagamy osobom które:</h2>
      <ul className="clients__list">
        <li className="clients__element">
          <div className="clients__element--img">
            <img src={IconMoney} alt="symbol pieniędzy" />
          </div>
          <p className="clients__element--text">Zaciągnęły kredyt gotówkowy po 1 stycznia 2012 roku.</p>
        </li>
        <li className="clients__element">
          <div className="clients__element--img">
            <img src={IconCoins} alt="monety" />
          </div>
          <p className="clients__element--text">
            Następnie dokonały spłaty przed terminem, konsolidacji kredytów lub przeniosły kredyt do innego banku.
          </p>
        </li>
        <li className="clients__element">
          <div className="clients__element--img">
            <img src={IconFile} alt="umowa" />
          </div>
          <p className="clients__element--text">
            Posiadają umowę kredytową, umowę konsolidacyjną lub dokument potwierdzający wcześniejszą spłatę.
          </p>
        </li>
        <li className="clients__element">
          <div className="clients__element--img">
            <img src={IconCash} alt="gotówka" />
          </div>
          <p className="clients__element--text">Potrzebują dodatkowego zastrzyku gotówki.</p>
        </li>
        <li className="clients__element">
          <div className="clients__element--img">
            <img src={IconTrouble} alt="problemy" />
          </div>
          <p className="clients__element--text">
            Nie wiedzą jednak czy i w jakiej wysokości należy im się zwrot prowizji bankowej.
          </p>
        </li>
        <li className="clients__element">
          <div className="clients__element--img">
            <img src={IconConversation} alt="rozmowa" />
          </div>
          <p className="clients__element--text">
            Ponadto nie maja czasu i głowy na bieganie po bankach i innych instytucjach, by szukać wyjaśnienia
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Clients;
