import React from 'react';
import Collapse from './FAQ.Collapse';
import collapseData from './collapse.utils';

import './FAQ.scss';

const View = () => {
  return (
    <section className="faq">
      <h2 className="faq__title">Najczęściej zadawane pytania:</h2>
      <div className="faq__questions">
        {collapseData.map((collapse, i) => (
          <Collapse key={i} collapse={collapse}></Collapse>
        ))}
      </div>
    </section>
  );
};

export default View;
