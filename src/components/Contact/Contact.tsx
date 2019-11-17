import React from 'react';
import Info from './Contact.Info';
import Form from './Contact.Form';

import './contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Info></Info>
      <Form></Form>
    </section>
  );
};
export default Contact;
