import React, { useState } from 'react';

import Logo from '../../assets/logoParecis.svg'

import { Container, Button } from './styles';

export default function MenuDefault() {

  const [play, setPlay] = useState(false);

  function playAudio(){
    var x = document.getElementById("player");
    if(!play){
      x.play()
      setPlay(true)
    }else{
      x.pause()
      setPlay(false)
    }

  }

  return (
    <Container>
      <div className="nav-wrapper">
        <audio id="player" src="http://live.hunter.fm/live"></audio>
        <div className="container">
          <a href="#" className="brand-logo">
            <div className="col s12">
              <img className="responsive-img" style={{width: '100%', height: '100%', maxWidth: '80px', maxHeight: '150px', marginTop: 5}} src={Logo} alt=""/>
            </div>
          </a>
        </div>
        <ul style={{marginRight: '4.5em'}} id="nav-mobile" className="right hide-on-med-and-down">
          <li style={{marginRight: '1.5rem'}}>
            <Button className="btn waves-effect waves-light" onClick={playAudio}>
              AO VIVO
              <i className="material-icons right">{play? 'pause' : 'play_arrow'}</i>
            </Button>
          </li>
          <li style={{marginRight: '0.5em'}}><a href="sass.html">PEÇA SUA MÚSICA</a></li>
          <li style={{marginRight: '0.5em'}}><a href="badges.html">AS MAIS PEDIDAS</a></li>
          <li style={{marginRight: '0.5em'}}><a href="collapsible.html">PROMOÇÕES</a></li>
          <li style={{marginRight: '0.5em'}}><a href="collapsible.html">PROGRAMAÇÃO</a></li>
          <li><a href="collapsible.html">CONTATOS</a></li>
        </ul>
      </div>
    </Container>
  );
}
