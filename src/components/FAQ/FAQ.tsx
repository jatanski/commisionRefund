import React, { useState, useEffect, FC } from 'react';
import utilClass from '../../utilClass';
import FAQView from './FAQ.view';

const FAQ: FC = () => {
  const [faqClassName, setFaqClassName] = useState('faq');
  const [isClosedAllCollapses, setIsClosedCollapses] = useState(false);

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showFAQ, closeCollapse]);

    return () => {
      utilClass.removeMethod(showFAQ);
    };
  });

  function showFAQ() {
    let openHeight = 4300;

    if (screen.height <= 900) openHeight = 3700;
    if (screen.height <= 768) openHeight = 3200;

    scrollY >= openHeight ? setFaqClassName('faq showElement') : setFaqClassName('faq');
  }

  const closeCollapse = () => {
    let closeHeight = 5400;

    if (screen.height <= 900) closeHeight = 4600;
    if (screen.height <= 768) closeHeight = 4000;
    scrollY >= closeHeight ? setIsClosedCollapses(true) : setIsClosedCollapses(false);
  };

  return <FAQView faqClassName={faqClassName} isClosedAllCollapses={isClosedAllCollapses} />;
};

export default FAQ;
