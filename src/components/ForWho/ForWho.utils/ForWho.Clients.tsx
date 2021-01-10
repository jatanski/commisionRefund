import React, { FC } from 'react';
import { ForWhoClientProps, ForWhoElementProps } from '../forWho.types';
import ForWhoClient from './ForWho.client';
const IconCoins = require('../../../images/clients-icons/coins.png');
const IconConversation = require('../../../images/clients-icons/conversation.png');
const IconFile = require('../../../images/clients-icons/file.png');
const IconMoney = require('../../../images/clients-icons/get-money.png');
const IconTrouble = require('../../../images/clients-icons/problem.png');
const IconCash = require('../../../images/clients-icons/cash.png');

const clientsInfo: Array<ForWhoClientProps> = [
  { icon: IconMoney, imageAltText: 'symbol pieniędzy', text: 'Zaciągnęły kredyt gotówkowy po 1 stycznia 2012 roku.' },
  {
    icon: IconCoins,
    imageAltText: 'monety',
    text: 'Następnie dokonały spłaty przed terminem, konsolidacji kredytów lub przeniosły kredyt do innego banku..',
  },
  {
    icon: IconFile,
    imageAltText: 'umowa',
    text: 'Posiadają umowę kredytową, umowę konsolidacyjną lub dokument potwierdzający wcześniejszą spłatę.',
  },
  { icon: IconCash, imageAltText: 'gotówka', text: 'Potrzebują dodatkowego zastrzyku gotówki.' },
  {
    icon: IconTrouble,
    imageAltText: 'problemy',
    text: 'Nie wiedzą jednak czy i w jakiej wysokości należy im się zwrot prowizji bankowej.',
  },
  {
    icon: IconConversation,
    imageAltText: 'rozmowa',
    text: 'Ponadto nie maja czasu i głowy na bieganie po bankach i innych instytucjach, by szukać wyjaśnienia.',
  },
];

const Clients: FC<ForWhoElementProps> = ({ className }) => (
  <div className={className}>
    <h2 className="forWho__clients--title">Pomagamy osobom które:</h2>
    <ul className="clients__list">
      {clientsInfo.map(({ icon, text, imageAltText }) => (
        <ForWhoClient key={icon} icon={icon} text={text} imageAltText={imageAltText} />
      ))}
    </ul>
  </div>
);

export default Clients;
