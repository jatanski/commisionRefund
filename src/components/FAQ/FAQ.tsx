/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import Collapse from './FAQ.Collapse';
import collapseData from './collapse.utils';

import './FAQ.scss';

const FAQ = () => {
  const [faqClass, setFaqClass] = useState('faq');

  const showFAQ = () => {
    let openHeight = 4300;

    if (screen.height <= 900) openHeight = 3700;

    if (screen.height <= 768) openHeight = 3200;

    scrollY >= openHeight ? setFaqClass('faq showElement') : setFaqClass('faq');
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showFAQ]);

    return () => {
      utilClass.removeMethod(showFAQ);
    };
  });

  return (
    <section id="faq" className={faqClass}>
      <div className="faq__wrap">
        <h2 className="faq__title">Najczęściej zadawane pytania:</h2>
        <div className="faq__questions">
          {collapseData.map((collapse, i) => (
            <Collapse key={i} collapse={collapse}></Collapse>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
