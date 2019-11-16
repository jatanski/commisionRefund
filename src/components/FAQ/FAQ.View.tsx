import React from 'react';

import './FAQ.scss';

type ViewProps = {
  openCollapse: () => void;
};

const View = ({ openCollapse }: ViewProps) => {
  return (
    <section className="faq">
      <h2 className="faq__title"></h2>
      <div className="faq__questions">
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
        <div className="faq__questions__element">
          <button onClick={openCollapse} className="faq__questions__element--title">
            Czy wasza usługa jest płatna?
          </button>
          <div className="content">
            Od naszych klientów nie pobieramy żadnych opłat. Usługa jest w 100% bezpłatna. Nasza firma zajmuje się
            wykupem wierzytelności, więc to klient otrzymuje od nas pieniądze. My następnie we własnym zakresie ubiegamy
            się o zwrot prowizji od banku.
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
