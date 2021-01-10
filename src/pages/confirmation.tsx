import React, { FC } from 'react';
// @ts-ignore
import { FacebookProvider, Page } from 'react-facebook';
import SEO from '../components/seo';
import '../scss/pages/confirmation.scss';

const Confirmation: FC = () => (
  <>
    <SEO title="Potwierdzenie" />
    <section className="confirmation">
      <div className="confirmation__wrap">
        <div className="confirmation__info">
          <h1 className="confirmation__info--title">Dziękujemy za kontakt</h1>
          <p className="confirmation__info--text">
            Skontaktujemy się z Tobą w ciągu 24 godzin lub w najbliższy dzień roboczy. Podczas rozmowy przedstawimy
            wszystkie szczegóły i odpowiemy na ewentualne pytania!
          </p>
        </div>
        <div className="confirmation__facebook">
          <h2 className="confirmation__facebook--title">
            Jeżeli chcesz również zostać z nami w kontakcie i być na bieżąco to polecamy polubić naszą stronę na
            Facebooku:
          </h2>
          <div className="confirmation__facebook__wrap">
            <FacebookProvider appId="2534896983213589">
              <Page href="https://www.facebook.com/odzyskamytwojaprowizje" tabs="timeline" />
            </FacebookProvider>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Confirmation;
