import React from 'react';

// import Footer from '../../../components/Footer'
// import Button from '../../../components/ButtonParecis'

import { Wrapper } from './styles';

export default function DefaultLayout({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
