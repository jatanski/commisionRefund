import React, { useState, useEffect } from 'react';
import utilClass from '../../utilClass';
import './contact.scss';
import ContactView from './Contact.view';

const Contact = () => {
  const [contactClass, setContactClass] = useState('contact');

  useEffect(() => {
    utilClass.addMethodsToScrollEvent([showContact]);

    return () => {
      utilClass.removeMethod(showContact);
    };
  });

  const showContact = () => {
    let openHeight = 5400;

    if (screen.height <= 900) openHeight = 4600;
    if (screen.height <= 768) openHeight = 4000;
    scrollY >= openHeight ? setContactClass('contact showElement') : setContactClass('contact');
  };

  return <ContactView className={contactClass} />;
};
export default Contact;
