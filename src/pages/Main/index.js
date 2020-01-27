import React from 'react';

import Banner from './BannerTop';
import Form from './Form';
import MaisPedidas from './AsMaisPedidas';
import Promocoes from './Promocoes';

import Radio from '../../components/RadioMobile';
import Menu from '../../components/MenuDefault';
import Footer from '../../components/Footer';
import ButtonParecis from '../../components/ButtonParecis';

import Programacao from './Programacao';

// import { Container } from './styles';

export default function Main() {

  return (
    <>
    <Menu />
    <ButtonParecis />
    <Banner />
    <Radio />
    <Form/>
    <MaisPedidas />
    <Promocoes />
    <Programacao />
    <Footer />
    </>
  );
}
