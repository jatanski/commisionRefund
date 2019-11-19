/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import Collapse from './FAQ.Collapse';
import collapseData from './collapse.utils';

import './FAQ.scss';

const FAQ = () => {
  const [faqClass, setFaqClass] = useState('faq');

  const showFAQ = () => {
    console.log(scrollY);

    scrollY >= 4300 ? setFaqClass('faq showElement') : setFaqClass('faq');
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showFAQ]);
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
