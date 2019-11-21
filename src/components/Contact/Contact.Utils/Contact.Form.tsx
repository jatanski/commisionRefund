import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  return (
    <div className="contact__form">
      <div className="contact__form__wrap">
        <h2 className="contact__form--title">Zamów darmową analizę</h2>
        <div className="contact__form--main">
          <form className="contactForm" action="post" name="contactForm">
            <div className="contactForm__inputWrap">
              <input type="text" placeholder="Imię" id="name" className="contactInput" />
              <label htmlFor="name"></label>
            </div>
            <div className="contactForm__inputWrap">
              <input type="text" placeholder="Nazwisko" id="surname" className="contactInput" />
              <label htmlFor="surname"></label>
            </div>
            <div className="contactForm__inputWrap">
              <input type="email" placeholder="Adres e-mail" id="email" className="contactInput" />
              <label htmlFor="email"></label>
            </div>
            <div className="contactForm__inputWrap">
              <input type="number" placeholder="Numer telefonu" id="phone" className="contactInput" />
              <label htmlFor="phone"></label>
            </div>
            <div className="contactForm__inputWrap--checkbox">
              <input type="checkbox" id="inputPrivatePolicy" className="checkbox__input" />
              <label htmlFor="inputPrivatePolicy" className="checkbox__label">
                Oświadczam, iż zapoznałem się z{' '}
                <a
                  aria-label="Polityka Prywatności"
                  target="_blank"
                  download
                  className="contactForm__link"
                  href="/Polityka_Prywatnosci.pdf"
                >
                  polityką prywatności
                </a>{' '}
                serwisu oraz akceptuję jej postanowienia.
              </label>
            </div>
            <div className="contactForm__inputWrap--checkbox">
              <input type="checkbox" id="inputRODO" className="checkbox__input" />
              <label htmlFor="inputRODO" className="checkbox__label">
                Wyrażam zgodę na przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej w
                rozumieniu ustawy z dnia 18 lipca 2002 roku o świadczenie usług drogą elektroniczną (Dz.U.2017.1219
                t.j.) na podany adres e-mail na temat usług oferowanych przez Jakuba Tańskiego zamieszkałego Śmigiel,
                ul. Mierosławskiego 1 64-030. Zgoda jest dobrowolna i może być w każdej chwili wycofana, klikając w
                odpowiedni link na końcu wiadomości e-mail. Wycofanie zgody nie wpływa na zgodność z prawem
                przetwarzania, którego dokonano na podstawie zgody przez jej wycofaniem.
              </label>
            </div>
            <button type="submit" className="contactForm__button">
              Zamów darmową analizę należnego Tobie zwrotu <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
