import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import ForWho from '../components/ForWho/ForWho';
import About from '../components/AboutUs/AboutUs';
import Practice from '../components/Practice/Practice';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';

import '../scss/global.scss';

// import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <Nav />
    <Header />
    <ForWho />
    <About />
    <Practice />
    <FAQ />
    <Contact />
  </>
);

export default IndexPage;
