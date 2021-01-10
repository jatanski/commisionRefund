import React, { FC } from 'react';
import Info from './Contact.Utils/Contact.Info';
import Form from './Contact.Utils/Contact.Form';
import ContactFooter from './Contact.Utils/Contact.Footer';
import './contact.scss';

interface ContactViewProps {
  className: string;
}

const ContactView: FC<ContactViewProps> = ({ className }) => (
  <section id="contact" className={className}>
    <Info></Info>
    <Form></Form>
    <ContactFooter></ContactFooter>
  </section>
);

export default ContactView;
