import React from 'react';
import Info from './Contact.Utils/Contact.Info';
import Form from './Contact.Utils/Contact.Form';

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
