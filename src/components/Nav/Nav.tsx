/* eslint-disable no-undef */
import React, { Component } from 'react';
import View from './Nav.View';

class Nav extends Component {
  state = {
    navClasses: 'menu',
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.getScrollPosition);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.getScrollPosition);
  };

  getScrollPosition = () => {
    scrollY > 100 ? this.setState({ navClasses: 'menu menu--scroll' }) : this.setState({ navClasses: 'menu' });
  };
  render() {
    return <View navClasses={this.state.navClasses}></View>;
  }
}

export default Nav;
