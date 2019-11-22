/* eslint-disable no-undef */
import React, { ChangeEvent, SyntheticEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

type FormProps = {
  showFalseName: boolean;
  showFalseEmail: boolean;
  showFalseAgreements: boolean;
  handleSubmit: (e: SyntheticEvent<HTMLButtonElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({
  showFalseAgreements,
  showFalseEmail,
  showFalseName,
  handleInputChange,
  handleSubmit,
  handleCheckboxInputChange,
}: FormProps) => {
  return (
    <div className="contact__form">
      <div className="contact__form__wrap">
        <h2 className="contact__form--title">Zamów darmową analizę</h2>
        <div className="contact__form--main">
          <form className="contactForm" action="post" name="contactForm">
            <div className="contactForm__inputWrap">
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Imię"
                id="formName"
                className="contactInput"
              />
              <label htmlFor="formName"></label>
            </div>
            <div className="contactForm__inputWrap">
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Nazwisko"
                id="formSurname"
                className="contactInput"
              />
              <label htmlFor="formSurname"></label>
            </div>
            <div className="contactForm__inputWrap">
              <input
                onChange={handleInputChange}
                type="email"
                placeholder="Adres e-mail"
                id="formEmail"
                className="contactInput"
              />
              <label htmlFor="formEmail"></label>
            </div>
            <div className="contactForm__inputWrap">
              <input
                onChange={handleInputChange}
                type="number"
                placeholder="Numer telefonu"
                id="formPhone"
                className="contactInput"
              />
              <label htmlFor="formPhone"></label>
            </div>
            {showFalseName ? <div className="contactForm__false falseName">Imię jest wymagane.</div> : null}
            {showFalseEmail ? <div className="contactForm__false falseEmail">Email jest wymagany.</div> : null}
            <div className="contactForm__inputWrap--checkbox">
              <input
                onChange={handleCheckboxInputChange}
                type="checkbox"
                id="inputPrivatePolicy"
                className="checkbox__input"
              />
              <label htmlFor="inputPrivatePolicy" className="checkbox__label">
                Oświadczam, iż zapoznałem się z{' '}
                <a
                  className="contactForm__link"
                  aria-label="Polityka Prywatności"
                  target="_blank"
                  href="/privatePolicy"
                >
                  polityką prywatności
                </a>{' '}
                serwisu oraz akceptuję jej postanowienia.
              </label>
            </div>
            <div className="contactForm__inputWrap--checkbox">
              <input onChange={handleCheckboxInputChange} type="checkbox" id="inputRODO" className="checkbox__input" />
              <label htmlFor="inputRODO" className="checkbox__label">
                Wyrażam zgodę na przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej w
                rozumieniu ustawy z dnia 18 lipca 2002 roku o świadczenie usług drogą elektroniczną (Dz.U.2017.1219
                t.j.) na podany adres e-mail na temat usług oferowanych przez Jakuba Tańskiego zamieszkałego Śmigiel,
                ul. Mierosławskiego 1 64-030. Zgoda jest dobrowolna i może być w każdej chwili wycofana, klikając w
                odpowiedni link na końcu wiadomości e-mail. Wycofanie zgody nie wpływa na zgodność z prawem
                przetwarzania, którego dokonano na podstawie zgody przez jej wycofaniem.
              </label>
            </div>
            {showFalseAgreements ? <div className="contactForm__false falseAgreement">Zgody są wymagane.</div> : null}
            <button onClick={handleSubmit} type="submit" className="contactForm__button">
              Zamów darmową analizę należnego Tobie zwrotu <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
