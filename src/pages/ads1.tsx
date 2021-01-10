import React from 'react';
import '../scss/pages/ads1.scss';
import Img from '../components/ads/img1';

const Ads = () => (
  <section className="ads">
    <div className="img">
      <Img></Img>
    </div>
    <div className="text">
      <p className="text__paraf">
        Odzyskaj pieniądze z wcześniej spłaconego lub <span className="bg-yellow">skonsolidowego</span> kredytu. Nawet
        12 000 zł!
      </p>
    </div>
    <div className="url">
      <p className="url__text">https://odzyskamytwojaprowizje.pl</p>
    </div>
  </section>
);

export default Ads;
