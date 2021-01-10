import React, { useState, useEffect, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CollapseProps } from './FAQ.types';

const Collapse: FC<CollapseProps> = ({ collapse, isClosedCollapse }) => {
  const { buttonText, desc1, desc2, desc3 } = collapse;
  const startButtonClass = 'faq__questions__element--title';
  const startContentClass = 'faq__questions__element--desc';

  const [buttonClass, setButtonClass] = useState(startButtonClass);
  const [contentClass, setContentClass] = useState(startContentClass);
  const [iconState, setIconState] = useState(false);

  useEffect(() => {
    if (isClosedCollapse) {
      setButtonClass(startButtonClass);
      setContentClass(startContentClass);
      setIconState(false);
    }
  });

  const toggleCollapse = () => {
    buttonClass === startButtonClass ? setButtonClass(`${startButtonClass} active`) : setButtonClass(startButtonClass);

    contentClass === startContentClass
      ? setContentClass(`${startContentClass} openCollapse`)
      : setContentClass(startContentClass);

    setIconState(!iconState);
  };

  return (
    <div onClick={toggleCollapse} className="faq__questions__element">
      <div className={buttonClass}>
        <p className="title__text"> {buttonText}</p>
        {iconState ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}
      </div>
      <div className={contentClass}>
        <p className="desc__element">{desc1}</p>
        <p className="desc__element">{desc2}</p>
        <p className="desc__element">{desc3}</p>
      </div>
    </div>
  );
};

export default Collapse;
