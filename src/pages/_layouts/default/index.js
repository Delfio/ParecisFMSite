import React from 'react';

import Header from '../../../components/MenuDefault'
import Footer from '../../../components/Footer'

import { Wrapper } from './styles';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
      <Header />
        {children}
      <Footer />
    </Wrapper>
  );
}
