import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import ForWho from '../components/ForWho/ForWho';

import '../scss/global.scss';

// import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <Nav></Nav>
    <Header></Header>
    <ForWho></ForWho>
  </>
);

export default IndexPage;
