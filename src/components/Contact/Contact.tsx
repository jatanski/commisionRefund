import React from 'react';
import Info from './Contact.Utils/Contact.Info';
import Form from './Contact.Utils/Contact.Form';
import Footer from './Contact.Utils/Contact.Footer';

import './contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Info></Info>
      <Form></Form>
      <Footer></Footer>
    </section>
  );
};
export default Contact;
