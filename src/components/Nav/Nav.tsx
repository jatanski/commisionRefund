/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import View from './Nav.View';

const Nav = () => {
  const [navClasses, setNavClasses] = useState('menu');

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition);

    // return document.body.removeEventListener('scroll', getScrollPosition);
  });

  const getScrollPosition = () => {
    console.log('jo');
    scrollY > 0 ? setNavClasses('menu menu--scroll') : setNavClasses('menu');
  };

  return <View navClasses={navClasses}></View>;
};

export default Nav;
