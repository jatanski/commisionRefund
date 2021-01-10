import React from 'react';
import '../scss/pages/ads3.scss';
import Img from '../components/ads/img1';

const Ads = () => (
  <section className="ads3">
    <div className="img">
      <Img></Img>
    </div>
    <div className="text">
      <p className="text__paraf">
        Odzyskujemy pieniądze z wcześniej spłaconych i <span className="bg-yellow">skonsolidowanych</span> kredytów.
        Nawet 12 000 zł w 5 dni od kontaktu!
      </p>
    </div>
    <div className="url">
      <p className="url__text">https://odzyskamytwojaprowizje.pl</p>
    </div>
  </section>
);

export default Ads;
