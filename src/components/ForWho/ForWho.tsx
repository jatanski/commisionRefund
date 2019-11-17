import React from 'react';
import Clients from './ForWho.utils/ForWho.Clients';
import About from './ForWho.utils/ForWho.About';
import Commision from './ForWho.utils/ForWho.Commision';

import './forWho.scss';

const View = () => {
  return (
    <section id="forWho" className="forWho">
      <About></About>
      <Clients></Clients>
      <Commision></Commision>
    </section>
  );
};

export default View;
