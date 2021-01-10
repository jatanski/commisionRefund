import React, { useState, useEffect, FC } from 'react';
import utilClass from '../../utilClass';
import PracticeView from './Practice.View';
import './practice.scss';

const Practice: FC = () => {
  const [titleClass, setTitleClass] = useState('practice__title');
  const [elementClass, setElementClass] = useState('practice__main__element');

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showPractice]);

    return () => {
      utilClass.removeMethod(showPractice);
    };
  });

  function showPractice() {
    let openHeight = 3100;

    if (screen.height <= 900) openHeight = 2600;

    if (screen.height <= 768) openHeight = 2200;

    scrollY >= openHeight ? setTitleClass('practice__title showElement') : setTitleClass('practice__title');

    scrollY >= openHeight + 200
      ? setElementClass('practice__main__element showElement')
      : setElementClass('practice__main__element');
  }

  return <PracticeView titleClass={titleClass} elementClass={elementClass}></PracticeView>;
};

export default Practice;
