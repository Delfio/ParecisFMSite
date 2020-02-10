import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import bannerSite from '../../assets/MARY_GONÇALVES_MG_1343.JPG'
import facebook from '../../assets/iconFace.svg'
import instagram from '../../assets/iconInsta.svg'
import wahts from '../../assets/iconWhats.svg'

import history from '../../services/history'

import { DivLocutor, DivInfosLocutor, DivInfos, Button } from './styles';

export default function ProgramacaoAtual(props) {

  const [play, setPlay] = useState(false);
  const [programacaoAtual, setProgramacaoAtual] = useState({})
  const [facebookLink, setFacebook] = useState(props.facebook)
  const [whats, setWhats] = useState(props.facebook)
  const [insta, setInsta] = useState(props.instagram)
  const [cidade, setCidade] = useState(props.cidade)
  const [link, setLink] = useState(props.link)
  const [name, setName] = useState(props.name)
  
  useEffect(() => {
    setProgramacaoAtual(props.programacao[0])
    setFacebook(props.facebook)
    setWhats(props.whats)
    setInsta(props.instagram)
    setCidade(props.cidade)
    setLink(props.link)
    setName(props.name)
  }, [props])

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

  function verStream(){
    history.push('/streamOnline')
  }
  
  return (
    <div style={{marginTop: -5}} className="row grey darken-4">
      <audio id="playerAudio" src={link? `${link}`: null}></audio>
      <div style={{flex: 1, display: 'block', padding: 0}} className="col s12">
        <DivLocutor 
          bg={
            programacaoAtual ? 
            programacaoAtual.locutor ? 
            programacaoAtual.locutor.avatar? 
            programacaoAtual.locutor.avatar.url :
            null :
            null :
            null
          } 
          className="col s12 m12 l6" 
        />
        <DivInfosLocutor className="col l6 m12 s12">
          <div className="container">
            <h4 className="hide-on-small-only">AO VIVO</h4>
            <h4 className="hide-on-med-and-up">AO VIVO</h4>
            {/* <p className="white-text hide-on-small-only" 
            style={{marginLeft: 5, fontSize: 20}}>{name ? String(name) : null} <br/>
              - <span className="yellow-text" style={{fontSize: 15}}>{cidade? String(cidade): null}</span>
            </p> */}
          </div>
          <p style={{marginTop: -15, fontSize: 20}} className="center white-text">
            {name ? String(name) : null}
            <span> - {cidade? String(cidade): null} </span>
          </p>
          <DivInfos style={{display: 'block', marginTop: 25}} className="col s12">
            <div style={{display: 'flex',justifyContent: 'space-around'}} className="col s12 l12">
              <Button style={{backgroundColor: '#ff9933'}} title={play? 'Pausar' : 'Play'} className="btn left btn-large  hide-on-small-only" onClick={playAudio}>
                OUÇA
                <i className="material-icons right">{play? 'pause' : 'play_arrow'}</i>
              </Button>

              {/* Mobile */}
              {/* <Button style={{backgroundColor: '#ff9933'}} title={play? 'Pausar' : 'Play'} className="btn left btn-large  hide-on-med-and-up" onClick={playAudio}>
                  <i className="material-icons center">{play? 'pause' : 'play_arrow'}</i>
                </Button> */}
              {/* Mobile */}

              {/* <Link style={{color: 'white'}} to="/streamOnline"> */}
                <Button onClick={verStream} style={{backgroundColor: '#01579b'}} className="btn right btn-large">
                    VEJA
                  <i className="material-icons left">live_tv</i>
                </Button>

            </div>
            <div style={{display: 'block'}} className="col s12">
              <h3 style={{fontSize: '3rem'}} className="white-text center-align">
                {programacaoAtual ? programacaoAtual.programa? String(programacaoAtual.programa.nome): null: 'A SUA RÁDIO' }
              </h3>
              <h5 style={{padding: 0, marginTop: -10}} className="center-align white-text">
                <span style={{fontWeight: 700, color: '#ffc107'}}>
                  {programacaoAtual ? programacaoAtual.locutor? String(programacaoAtual.locutor.name): null: 'SEI LÁ' }
                </span> 
              </h5>
            </div>
            <div className="row">
              <div style={{marginTop: '0'}} className="col s12">
                <ul>
                  <li className="col s4">
                    <a target="_blank" href={whats ? whats : null}>
                      <img style={{width: '100%', maxWidth: 50}} src={wahts} alt=""/>
                    </a>
                  </li>
                  <li className="col s4">
                    <a target="_blank" href={facebook? facebookLink : null}>
                      <img style={{width: '100%', maxWidth: 50}} src={facebook} alt=""/>
                    </a>
                  </li>
                  <li className="col s4">
                    <a target="_blank" href={insta ? insta: null}>
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
