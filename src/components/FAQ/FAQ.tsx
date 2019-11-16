import React, { Component } from 'react';
import View from './FAQ.View';

class FAQ extends Component {
  openCollapse = () => {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  };

  render() {
    return <View openCollapse={this.openCollapse}></View>;
  }
}

export default FAQ;
