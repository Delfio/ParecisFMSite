import React from 'react';

import bannerSite from '../../assets/MARY_GONÇALVES_MG_1343.JPG'

import { DivLocutor, DivInfosLocutor, DivInfos } from './styles';

export default function ProgramacaoAtual() {
  return (
    <div style={{marginTop: -5}} className="row grey darken-4">
      <div style={{flex: 1, display: 'block', padding: 0}} className="col s12">
        <DivLocutor bg={bannerSite} className="col s12 m12 l6" />
        <DivInfosLocutor className="col l6 m12 s12">
          <div className="container">
            <i style={{fontWeight: 200, color: '#ff9b00'}} class="medium material-icons hide-on-small-only">play_circle_outline</i>
            <h4>Ao Vivo |</h4>
            <p className="white-text" style={{marginLeft: 5, fontSize: 20}}> 98.1 Parecis FM</p>
          </div>
          <DivInfos style={{display: 'block'}} className="container center">
            <h4 className="white-text">Fala Comunidade</h4>
            <p className="white-text">Com Susane Vieira de Souza</p>
          </DivInfos>
        </DivInfosLocutor>
      </div>
    </div>
  );
}
