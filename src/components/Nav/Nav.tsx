import React, { useState, useEffect, FC } from 'react';
import utilClass from '../../utilClass';
import NavView from './Nav.View';

const Nav: FC = () => {
  const [navClasses, setNavClasses] = useState('menu');

  useEffect(() => utilClass.addMethodsToScrollEvent([getScrollPosition]));

  function getScrollPosition() {
    scrollY > 0 ? setNavClasses('menu menu--scroll') : setNavClasses('menu');
  }

  return <NavView navClassName={navClasses}></NavView>;
};

export default Nav;
