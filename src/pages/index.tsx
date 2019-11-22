import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import ForWho from '../components/ForWho/ForWho';
import About from '../components/AboutUs/AboutUs';
import Practice from '../components/Practice/Practice';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import SEO from '../components/seo';

import '../scss/global.scss';

const IndexPage = () => (
  <>
    <SEO title="Odzyskaj swoją prowizję" />
    <div className="wrapper">
      <Nav />
      <Header />
      <ForWho />
      <About />
      <Practice />
      <FAQ />
      <Contact />
    </div>
  </>
);

export default IndexPage;
