import React from 'react';
import { useSelector } from 'react-redux';

import Canvas from './Notifications'

export default function TentandoDashboard() {

  const {name} = useSelector(state => state.user.profile);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div style={{marginTop: 26}} className="col s12 m8 offset-m1 xl12 offset-xl1 center">
            <h2 style={{fontWeight: '300'}} className="red-text">{`Bem vindo ${name}`}</h2>
            <div className="left-align">
              <h6> * Este é seu painel de configuração da sua rádio</h6>
              <h6> * Adicione e altere conteúdos referentes a sua rádio</h6>
              <h6> * Quaisquer dúvidas entre em contato com o suporte</h6>
            </div>
            <Canvas />
          </div>
        </div>
      </div>
    </main>
  );
}
