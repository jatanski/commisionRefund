/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div className="contact__info">
      <div className="contact__info__wrap">
        <h2 className="contact__info--title">Odzyskaj swoją prowizje</h2>
        <div className="contact__info--adress">
          <p className="adress__text">Konduktorska 4/23</p>
          <p className="adress__text">Wrocław 20-130</p>
        </div>
        <div className="contact__info--telAndMail">
          <p className="telAndMail__tel">
            <span className="bold">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            727-907-299
          </p>
          <p className="telAndMail__mail">
            <span className="bold">
              <FontAwesomeIcon icon={faAt} />
            </span>
            kontakt@odzyskajswojaprowizje.pl
          </p>
        </div>
        <div className="contact__info--social">
          <a target="_blank" href="https://www.facebook.com/odzyskamytwojaprowizje/">
            <div className="social__element">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
          </a>
          <a target="_blank" href="">
            <div className="social__element">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </a>
          <a target="_blank" href="">
            <div className="social__element">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Info;
