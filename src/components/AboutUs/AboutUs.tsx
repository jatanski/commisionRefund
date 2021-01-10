import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';
import AboutUsView from './AboutUs.View';

const AboutUs = () => {
  const [titleClass, setTitleClass] = useState('about__main--title');
  const [descClass, setDescClass] = useState('about__main--desc');
  const [numberOfMoney, setNumberOfMoney] = useState(0);

  useEffect(() => addMoneyToCounter());
  function addMoneyToCounter() {
    if (descClass === 'about__main--desc showElement') {
      if (numberOfMoney < 12000) setNumberOfMoney(numberOfMoney + 10);
    }
  }

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showAbout]);

    return () => {
      utilClass.removeMethod(showAbout);
    };
  });

  function showAbout() {
    // @ts-ignore
    let forWhoHeight = document.querySelector('.forWho').offsetHeight;

    if (screen.width <= 450) forWhoHeight -= 1000;
    scrollY >= forWhoHeight ? setTitleClass('about__main--title showElement') : setTitleClass('about__main--title');
    scrollY >= forWhoHeight + 300 ? setDescClass('about__main--desc showElement') : setDescClass('about__main--desc');
  }

  return <AboutUsView titleClass={titleClass} descClass={descClass} numberOfMoney={numberOfMoney} />;
};

export default AboutUs;
