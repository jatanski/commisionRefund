import React from 'react';
import '../scss/pages/reklama1.scss';
import Img from '../components/reklama/img1';

const Reklama = () => {
  return (
    <section className="reklama">
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
};

export default Reklama;
