/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';
import View from './Nav.View';

const Nav = () => {
  const [navClasses, setNavClasses] = useState('menu');

  const getScrollPosition = () => {
    scrollY > 0 ? setNavClasses('menu menu--scroll') : setNavClasses('menu');
  };

  useEffect(() => utilClass.addMethodsToScrollEvent([getScrollPosition]));

  return <View navClasses={navClasses}></View>;
};

export default Nav;
