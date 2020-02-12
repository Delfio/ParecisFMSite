import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Bg from '../../assets/imgRodape-parecis.png'
import { Link } from 'react-router-dom';

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
             <ul>
               <li>
                 <a style={{color: 'white'}} href="#suamusica">
                  Peça sua música
                 </a>
               </li>
               <li>
                 <a style={{color: 'white'}} href="#maispedidas">
                  As mais pedidas
                 </a>
               </li>
               <li>
                 <a style={{color: 'white'}} href="#promocoes">
                  Promoções
                 </a>
               </li>
               <li>
                 <a style={{color: 'white'}} href="#programacao">
                  Programações
                 </a>
               </li>
               <li>
                 <a style={{color: 'white'}} href="#contato">
                  Contatos
                 </a>
               </li>
             </ul>
            </div>
            <div className="col l4 offset-l2 s12 right-align">
              <h5 className="white-text">Contatos</h5>
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
          © 2020 Direitos reservados
          <a title="Pefil" className="grey-text text-lighten-4 right" href={facebookLink}>Parecis FM</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
