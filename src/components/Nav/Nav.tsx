/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import View from './Nav.View';

const Nav = () => {
  const [navClasses, setNavClasses] = useState('menu');

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition);

    return window.removeEventListener('scroll', getScrollPosition);
  });

  const getScrollPosition = () => {
    scrollY > 100 ? setNavClasses('menu menu--scroll') : setNavClasses('menu');
  };

  return <View navClasses={navClasses}></View>;
};

export default Nav;
