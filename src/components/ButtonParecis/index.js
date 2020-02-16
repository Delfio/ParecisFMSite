import React from 'react';

import { Container } from './styles';
import MicrofonePng from '../../assets/MicrofoneParecisFM.png'

export default function ButtonParecis() {
  return (
    <Container className="container hide-on-small-only">
      <div className="col s12">
        <img style={{width: '80%', marginLeft: 25}} src={MicrofonePng} alt="Microfone Parecis"/>
      </div>
    </Container>
  );
}
