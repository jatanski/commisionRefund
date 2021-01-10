import React, { FC } from 'react';
import { FAQViewProps } from './FAQ.types';
import Collapse from './FAQ.Collapse';
import collapseData from './collapse.infos';
import './FAQ.scss';

const FAQView: FC<FAQViewProps> = ({ faqClassName, isClosedAllCollapses }) => (
  <section id="faq" className={faqClassName}>
    <div className="faq__wrap">
      <h2 className="faq__title">Najczęściej zadawane pytania:</h2>
      <div className="faq__questions">
        {collapseData.map((collapse, i) => (
          <Collapse key={i} collapse={collapse} isClosedCollapse={isClosedAllCollapses}></Collapse>
        ))}
      </div>
    </div>
  </section>
);

export default FAQView;
