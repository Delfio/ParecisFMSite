import React from 'react';
import Menu from '../../components/MenuDefault/MenuPageExtra'
// import { Container } from './styles';

export default function Stream() {
  return (
    <>
    <Menu />
    <div className="row">
      <div className="col s12">
        <div style={{marginTop: 45, display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="col s12 center">
          <h3 
          className="red-text hide-on-small-only"
          style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}
          >CÂMERA AO VIVO 
            <i className="medium material-icons">live_tv</i>
          </h3>

          {/* MOBILE */}
          <div className="row hide-on-med-and-up">
            <div style={{display: 'flex', justifyContent: 'center'}} className="col s12">
              <h5 
              className="red-text"
              style={{display: 'flex', 
              alignItems: 'initial', 
              justifyContent: 'center', 
              fontWeight: 500,
              fontSize: 28
              }}
              >CÂMERA AO VIVO 
                <i className="material-icons">live_tv</i>
              </h5>
            </div>
          </div>

          {/* MOBILE */}

          <a style={{marginTop: 25, marginLeft: 55, borderRadius: 15, backgroundColor: '#ff9933'}} 
            href="/" className="waves-effect waves-light btn hide-on-small-only">
            <i className="material-icons right">close</i>Voltar
          </a>
        </div>
        <div className="row hide-on-med-and-up center">
            <a style={{borderRadius: 15, backgroundColor: '#ff9933'}} 
              href="/" className="waves-effect waves-light btn">
              <i className="material-icons right">close</i>Voltar
            </a>
        </div>
        <div style={{padding: 0}} className="col s12 center-align">
          <div className="video-container">
            <iframe title="streamVideo" width="853" height="480" src="//player.crosshost.com.br/playerdev/flashvideo/420" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
