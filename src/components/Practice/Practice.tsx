/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import View from './Practice.View';

import './practice.scss';

const Practice = () => {
  const [titleClass, setTitleClass] = useState('practice__title');
  const [elementClass, setElementClass] = useState('practice__main__element');

  const showAbout = () => {
    let openHeight = 3100;

    console.log(scrollY);

    if (screen.height <= 900) openHeight = 2600;

    if (screen.height <= 768) openHeight = 2200;

    scrollY >= openHeight ? setTitleClass('practice__title showElement') : setTitleClass('practice__title');

    scrollY >= openHeight + 200
      ? setElementClass('practice__main__element showElement')
      : setElementClass('practice__main__element');
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showAbout]);
  });
  return <View titleClass={titleClass} elementClass={elementClass}></View>;
};

export default Practice;
