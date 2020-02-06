import React from 'react';

import { Container } from './styles';
import Microfone from '../../assets/MicrofonePARECISFM2.svg'

export default function ButtonParecis() {
  return (
    <Container className="container">
      <div className="col s12">
        <img src={Microfone} alt="Microfone Parecis"/>
      </div>
    </Container>
  );
}
