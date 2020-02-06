import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import Menu from '../../../components/MenuPainel'
// import Footer from '../../../components/Footer'
// import Button from '../../../components/ButtonParecis'

import { Wrapper } from './styles';

export default function AuthLayout({children}) {

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    var collapse = document.querySelectorAll('.collapsible')
    M.Sidenav.init(elems, {});
    M.Collapsible.init(collapse, {})
  }, [])

  return (
    <Wrapper className="container">
      <Menu />
      {children}
    </Wrapper>
  );
}
