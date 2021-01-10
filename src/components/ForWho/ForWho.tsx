import React, { useState, useEffect, FC } from 'react';
import utilClass from '../../utilClass';
import Clients from './ForWho.utils/ForWho.Clients';
import About from './ForWho.utils/ForWho.About';
import Commision from './ForWho.utils/ForWho.Commision';
import './forWho.scss';

const ForWho: FC = () => {
  const [showAboutClasses, setShowAboutClass] = useState('forWho__about');
  const [showClientsClasses, setShowClientsClass] = useState('forWho__clientsWrap');
  const [showCommisionClasses, setShowCommisionClass] = useState('forWho__commisionWrap');

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showForWho]);

    return () => {
      utilClass.removeMethod(showForWho);
    };
  });

  function showForWho() {
    scrollY >= 200 ? setShowAboutClass('forWho__about showElement') : setShowAboutClass('forWho__about');
    scrollY >= 400 ? setShowClientsClass('forWho__clients showElement') : setShowClientsClass('forWho__clients');
    scrollY >= 1200
      ? setShowCommisionClass('forWho__commision showElement')
      : setShowCommisionClass('forWho__commision');
  }

  return (
    <section id="forWho" className="forWho">
      <div className="forWho__wrap">
        <About className={showAboutClasses}></About>
        <Clients className={showClientsClasses}></Clients>
        <Commision className={showCommisionClasses}></Commision>
      </div>
    </section>
  );
};

export default ForWho;
