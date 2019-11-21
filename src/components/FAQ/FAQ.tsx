/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import Collapse from './FAQ.Collapse';
import collapseData from './collapse.utils';

import './FAQ.scss';

const FAQ = () => {
  const [faqClass, setFaqClass] = useState('faq');
  const [closeAllCollapses, setCloseCollapses] = useState(false);

  const showFAQ = () => {
    let openHeight = 4300;

    if (screen.height <= 900) openHeight = 3700;

    if (screen.height <= 768) openHeight = 3200;

    scrollY >= openHeight ? setFaqClass('faq showElement') : setFaqClass('faq');
  };

  const closeCollapse = () => {
    let closeHeight = 5400;

    if (screen.height <= 900) closeHeight = 4600;

    if (screen.height <= 768) closeHeight = 4000;

    scrollY >= closeHeight ? setCloseCollapses(true) : setCloseCollapses(false);
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showFAQ, closeCollapse]);

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
            <Collapse key={i} collapse={collapse} closeCollapse={closeAllCollapses}></Collapse>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
