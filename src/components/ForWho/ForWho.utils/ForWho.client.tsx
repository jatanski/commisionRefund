import React, { FC } from 'react';
import { ForWhoClientProps } from '../forWho.types';

const ForWhoClient: FC<ForWhoClientProps> = ({ icon, text, imageAltText }) => (
  <li className="clients__element">
    <div className="clients__element--img">
      <img src={icon} alt={imageAltText} />
    </div>
    <p className="clients__element--text">{text}</p>
  </li>
);

export default ForWhoClient;
