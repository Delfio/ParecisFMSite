import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Bg from '../../assets/imgRodape-parecis.png'

export default function Footer(props) {
  const [facebookLink, setFacebook] = useState(props.facebook)
  const [whats, setWhats] = useState(props.facebook)
  const [insta, setInsta] = useState(props.instagram)

  useEffect(() => {
    setFacebook(props.facebook)
    setWhats(props.whats)
    setInsta(props.instagram)
  }, [props])

  return (
    <div className="row">
      <Container id="contatos" bg={Bg} className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Empresa</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Contato</h5>
              <ul>
                <li><a target="_blank" className="grey-text text-lighten-3" href={facebookLink ? facebookLink : null}>Facebook</a></li>
                <li><a target="_blank" className="grey-text text-lighten-3" href={whats ? whats : null}>Whatsapp</a></li>
                <li><a target="_blank" className="grey-text text-lighten-3" href={insta? insta: null}>Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 Developed by
          <a title="Pefil" className="grey-text text-lighten-4 right" href="#!">Delfio Francisco</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
