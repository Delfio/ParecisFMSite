import React from 'react';

import Banner from './BannerTop';
import Form from './Form';
import MaisPedidas from './AsMaisPedidas';
import Promocoes from './Promocoes';

import Radio from '../../components/RadioMobile';

import Programacao from './Programacao';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
    <Banner />
    <Radio />
    <Form/>
    <MaisPedidas />
    <Promocoes />
    <Programacao />
    </>
  );
}
