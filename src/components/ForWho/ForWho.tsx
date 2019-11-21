/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import Clients from './ForWho.utils/ForWho.Clients';
import About from './ForWho.utils/ForWho.About';
import Commision from './ForWho.utils/ForWho.Commision';

import './forWho.scss';

export type Props = {
  classes: string;
};

const ForWho = () => {
  const [showAboutClasses, setShowAboutClass] = useState('forWho__about');
  const [showClientsClasses, setShowClientsClass] = useState('forWho__clientsWrap');
  const [showCommisionClasses, setShowCommisionClass] = useState('forWho__commisionWrap');

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showForWho]);

    return () => {
      utilClass.removeMethod(showForWho);
    };
  });

  const showForWho = () => {
    scrollY >= 200 ? setShowAboutClass('forWho__about showElement') : setShowAboutClass('forWho__about');

    scrollY >= 400 ? setShowClientsClass('forWho__clients showElement') : setShowClientsClass('forWho__clients');

    scrollY >= 1200
      ? setShowCommisionClass('forWho__commision showElement')
      : setShowCommisionClass('forWho__commision');
  };

  return (
    <section id="forWho" className="forWho">
      <div className="forWho__wrap">
        <About classes={showAboutClasses}></About>
        <Clients classes={showClientsClasses}></Clients>
        <Commision classes={showCommisionClasses}></Commision>
      </div>
    </section>
  );
};

export default ForWho;
