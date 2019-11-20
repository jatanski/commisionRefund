/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import View from './AboutUs.View';

const AboutUs = () => {
  const [titleClass, setTitleClass] = useState('about__main--title');
  const [descClass, setDescClass] = useState('about__main--desc');

  const showAbout = () => {
    // @ts-ignore
    const forWhoHeight = document.querySelector('.forWho').offsetHeight;

    scrollY >= forWhoHeight ? setTitleClass('about__main--title showElement') : setTitleClass('about__main--title');

    scrollY >= forWhoHeight + 300 ? setDescClass('about__main--desc showElement') : setDescClass('about__main--desc');
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showAbout]);
  });

  return <View titleClass={titleClass} descClass={descClass}></View>;
};

export default AboutUs;
