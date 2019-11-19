/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';

import Info from './Contact.Utils/Contact.Info';
import Form from './Contact.Utils/COntact.Form';
import Footer from './Contact.Utils/Contact.Footer';

import './contact.scss';

const Contact = () => {
  const [contactClass, setContactClass] = useState('contact');

  const showContact = () => {
    console.log(scrollY);

    scrollY >= 5400 ? setContactClass('contact showElement') : setContactClass('contact');
  };

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showContact]);
  });

  return (
    <section id="contact" className={contactClass}>
      <Info></Info>
      <Form></Form>
      <Footer></Footer>
    </section>
  );
};
export default Contact;
