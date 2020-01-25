import React from 'react';

import Header from '../../../components/MenuDefault'
import Footer from '../../../components/Footer'
import Button from '../../../components/ButtonParecis'

import { Wrapper } from './styles';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
      <Header />
      <Button />
      {children}
      <Footer />
    </Wrapper>
  );
}
