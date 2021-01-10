import React, { FC } from 'react';
import './practice.scss';
const IconFile = require('../../images/practice-icons/file-1.png');
const IconSupport = require('../../images/practice-icons/support.png');
const IconNotepad = require('../../images/practice-icons/notepad-1.png');
const IconMoney = require('../../images/practice-icons/notes.png');

interface PraticeViewProps {
  titleClass: string;
  elementClass: string;
}

const PracticeView: FC<PraticeViewProps> = ({ titleClass, elementClass }) => {
  const leftElementClass = `${elementClass} element--left`;
  const rightElementClass = `${elementClass} element--right`;

  return (
    <section id="practice" className="practice">
      <h2 className={titleClass}>Jak wygląda cały proces?</h2>
      <div className="practice__main">
        <div className={leftElementClass}>
          <div className="element__image">
            <img src={IconNotepad} alt="" />
          </div>
          <div className="element__desc">
            <h3 className="element__desc--title">Wypełnij formularz kontaktowy</h3>
            <p className="element__desc--text">
              Skontaktuj się z nami za pomocą formularza kontaktowego, dostępnego na dole tej strony.
            </p>
          </div>
        </div>
        <div className={rightElementClass}>
          <div className="element__image">
            <img src={IconSupport} alt="" />
          </div>
          <div className="element__desc">
            <h3 className="element__desc--title">Rozmowa z naszym konsultantem</h3>
            <p className="element__desc--text">
              Na tym etapie będziemy potrzebowali informacji na temat kredytów, które posiadałeś. Nasz konsultant
              wyjaśni Ci dosłownie wszystko i odpowie na każde pytanie.
            </p>
          </div>
        </div>
        <div className={leftElementClass}>
          <div className="element__image">
            <img src={IconFile} alt="" />
          </div>
          <div className="element__desc">
            <h3 className="element__desc--title">Przesłanie dokumentów i analiza</h3>
            <p className="element__desc--text">
              Na podstawie przesłanych do nas drogą mailową dokumentów, nasi pracownicy dokonają dokładnej analizy oraz
              obliczą ile przysługuje Ci zwrotu.
              <span className="element__desc--text--extra">
                Jeszcze tego samego dnia poznasz ostateczną propozycję z wyceną!
              </span>
            </p>
          </div>
        </div>
        <div className={rightElementClass}>
          <div className="element__image">
            <img src={IconMoney} alt="" />
          </div>
          <div className="element__desc">
            <h3 className="element__desc--title">Podpisanie umowy i wypłata</h3>
            <p className="element__desc--text">
              <span className="element__desc--text--multitext">
                Po akceptacji kwoty odkupu wierzytelności, wygenerowane dokumenty wysyłamy do Ciebie na e-mail.
              </span>
              <span className="element__desc--text--multitext">
                Następnie dokumenty należy wydrukować i wysłać do nas pocztą. Gdy tylko otrzymamy podpisaną umowę,
                zlecamy wypłatę środków.
              </span>
              <span className="element__desc--text--multitext">
                Pieniądze trafiają do Ciebie w ciągu 24 godzin od momentu otrzymania podpisanych dokumentów.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeView;
