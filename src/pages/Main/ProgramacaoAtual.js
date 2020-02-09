import React, {useState} from 'react';
import { Redirect, Link } from 'react-router-dom';
import bannerSite from '../../assets/MARY_GONÇALVES_MG_1343.JPG'
import facebook from '../../assets/iconFace.svg'
import instagram from '../../assets/iconInsta.svg'
import wahts from '../../assets/iconWhats.svg'

import { DivLocutor, DivInfosLocutor, DivInfos, Button } from './styles';

export default function ProgramacaoAtual(props) {

  const [play, setPlay] = useState(false);
  
  function playAudio(){
    var x = document.getElementById("playerAudio");
    if(!play){
      x.play()
      setPlay(true)
    }else{
      x.pause()
      setPlay(false)
    }

  }

  function handlePageStream() {
    props.history.push('/')
  }
  
  return (
    <div style={{marginTop: -5}} className="row grey darken-4">
      <audio id="playerAudio" src="http://live.hunter.fm/live"></audio>
      <div style={{flex: 1, display: 'block', padding: 0}} className="col s12">
        <DivLocutor bg={bannerSite} className="col s12 m12 l6" />
        <DivInfosLocutor className="col l6 m12 s12">
          <div className="container">
            <h4 className="hide-on-small-only">AO VIVO |</h4>
            <h4 className="hide-on-med-and-up">AO VIVO</h4>
            <p className="white-text hide-on-small-only" style={{marginLeft: 5, fontSize: 20}}> 98.1 Parecis FM</p>
          </div>
          <DivInfos style={{display: 'block', marginTop: 25}} className="col s12">
            <div className="col s6 l6 hide-on-small-only">
              <Button style={{backgroundColor: '#ffc107'}} title={play? 'Pausar' : 'Play'} className="btn left btn-large" onClick={playAudio}>
                PLAY
                <i className="material-icons right">{play? 'pause' : 'play_arrow'}</i>
              </Button>
            </div>

            {/* Mobile */}
            <div className="col s4 hide-on-med-and-up">
              <Button style={{backgroundColor: '#ffc107'}} title={play? 'Pausar' : 'Play'} className="btn left btn-large" onClick={playAudio}>
                <i className="material-icons center">{play? 'pause' : 'play_arrow'}</i>
              </Button>
            </div>
            {/* Mobile */}
            <div className="col s8 m6 l6">
            <Link style={{color: 'white'}} to="/streamOnline">
                <Button style={{backgroundColor: '#01579b'}} className="btn right btn-large">
                    AO VIVO
                  <i className="material-icons left">live_tv</i>
                </Button>
              </Link>
            </div>
            <div style={{display: 'block'}} className="col s12">
              <h3 style={{fontSize: '3rem'}} className="white-text center-align">Sábado astral</h3>
              <h5 style={{padding: 0, marginTop: -10}} className="center-align white-text">Na voz de <span style={{fontWeight: 700, color: '#ffc107'}}>Mariane Ferreira</span> </h5>
            </div>
            <div className="row">
              <div style={{marginTop: '0'}} className="col s12">
                <ul>
                  <li className="col s4">
                    <a target="_blank" href="https://facebook.com/delfio.francisco.del">
                      <img style={{width: '100%', maxWidth: 50}} src={wahts} alt=""/>
                    </a>
                  </li>
                  <li className="col s4">
                    <a target="_blank" href="https://facebook.com/delfio.francisco.del">
                      <img style={{width: '100%', maxWidth: 50}} src={facebook} alt=""/>
                    </a>
                  </li>
                  <li className="col s4">
                    <a target="_blank" href="https://facebook.com/delfio.francisco.del">
                      <img style={{width: '100%', maxWidth: 50}} src={instagram} alt=""/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </DivInfos>
        </DivInfosLocutor>
      </div>
    </div>
  );
}
