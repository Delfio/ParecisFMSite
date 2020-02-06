import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';]
import {connect, disconnect, subscribeToNewRequestMusic} from '../../services/socket';


export default function TentandoDashboard() {

  const [conteudo, setConteudo] = useState([]);

  const {radio_id, name, locutor} = useSelector(state => state.user.profile);

  function stupWebSocket() {
    disconnect();
    connect(radio_id);
  }

  useEffect(() => {
    stupWebSocket();

    subscribeToNewRequestMusic(request => setConteudo([...conteudo, request]))
  }, [])

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m1 xl12 offset-xl1">
            <h3 className="red-text">{`Bem vindo ${name}`}</h3>
            <h6> * Este é seu painel de configuração da sua rádio</h6>
            <h6> * Adicione e altere conteúdos referentes a sua rádio</h6>
            <h6> * Quaisquer dúvidas entre em contato com o suporte</h6>
          </div>
        </div>
      </div>
    </main>
  );
}
