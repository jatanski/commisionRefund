/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import View from './Practice.View';

import './practice.scss';

const Practice = () => {
  const [titleClass, setTitleClass] = useState('practice__title');
  const [elementClass, setElementClass] = useState('practice__main__element');

  const showAbout = () => {
    console.log(scrollY);

    scrollY >= 3100 ? setTitleClass('practice__title showElement') : setTitleClass('practice__title');

    scrollY >= 3300
      ? setElementClass('practice__main__element showElement')
      : setElementClass('practice__main__element');
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showAbout]);
  });
  return <View titleClass={titleClass} elementClass={elementClass}></View>;
};

export default Practice;
