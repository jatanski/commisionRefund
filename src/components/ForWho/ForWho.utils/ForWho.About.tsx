import React, { FC } from 'react';
import { Props } from '../ForWho';

const About: FC<Props> = ({ className }) => (
  <div className={className}>
    <h2 className="forWho__about--title">Gwarancja</h2>
    <p className="forWho__about--desc">
      Jesteśmy jedyną kancelarią w kraju, która specjalizuje się w uzyskiwaniu
      <br />
      gwarantowanego zwrotu prowizji bankowej z kredytów konsumenckich w zaledwie kilka dni!
      <br />
      <br />
      Zaufało Nam ponad 1000 zadowolonych klientów z całej Polski. Dołącz do Nich już dziś!
    </p>
  </div>
);

export default About;
