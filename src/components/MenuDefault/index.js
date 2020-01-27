import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/logoParecis.svg'
import M from 'materialize-css/dist/js/materialize.min.js';

import { Container, Button } from './styles';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
});

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
    <>
    <Container>
      <div className="nav-wrapper">
        <audio id="player" src="http://live.hunter.fm/live"></audio>
        <div className="container">
          <a href="/" className="brand-logo">
            <div className="col s12">
              <img className="responsive-img" style={{width: '100%', height: '100%', maxWidth: '80px', maxHeight: '150px', marginTop: 6}} src={Logo} alt=""/>
            </div>
          </a>
        </div>
        <ul style={{marginRight: '4.5em'}} id="nav-mobile" className="right hide-on-med-and-down">
          <li style={{marginRight: '1.5rem'}}>
            <Button title={play? 'Pausar' : 'Play'} className="btn waves-effect waves-light" onClick={playAudio}>
              AO VIVO
              <i className="material-icons right">{play? 'pause' : 'play_arrow'}</i>
            </Button>
          </li>
          <li style={{marginRight: '0.5em'}}><a href="#suamusica">PEÇA SUA MÚSICA</a></li>
          <li style={{marginRight: '0.5em'}}><a href="#maispedidas">AS MAIS PEDIDAS</a></li>
          <li style={{marginRight: '0.5em'}}><a href="#promocoes">PROMOÇÕES</a></li>
          <li style={{marginRight: '0.5em'}}><a href="#programacao">PROGRAMAÇÃO</a></li>
          <li><a href="#contatos">CONTATOS</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </Container>
    <ul id="slide-out" className="sidenav">
      <li>
        <div className="user-view">
          <div className="background red darken-4">
            
          </div>
          <a href="#user"><img style={{maxHeight: 150}} src={Logo} /></a>
          <a href="#name"><span className="white-text name">ParecisFM</span></a>
          <a href="#email"><span className="white-text email">parecisfm@gmail.com</span></a>
        </div>
      </li>
      <li>
        <a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a>
      </li>
      <li>
        <a href="#!">Second Link</a>
      </li>
      <li><div className="divider"></div>
    </li>
      <li>
        <a className="subheader">Subheader</a>
      </li>
      <li>
        <a className="waves-effect" href="#!">Third Link With Waves</a>
      </li>
    </ul>
    </>
  );
}
