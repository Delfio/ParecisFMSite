import React from 'react';

import Banner from './BannerTop';
import Form from './Form';
import MaisPedidas from './AsMaisPedidas';
import Promocoes from './Promocoes';

import Programacao from './Programacao';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
    <Banner />
    <Form/>
    <MaisPedidas />
    <Promocoes />
    <Programacao />
    </>
  );
}
