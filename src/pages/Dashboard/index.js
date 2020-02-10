import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api'

export default function TentandoDashboard() {
  const [date, setdate] = useState(new Date());
  const [request, setRequest] = useState([{}])
  const {name, radio_id} = useSelector(state => state.user.profile);


  useEffect(() => {
    loadNotifications()
  }, [loadNotifications])

  async function loadNotifications(){
    const response = await api.get(`notifications/${radio_id}?data=${date}`);
    const {data} = response;
    setRequest(data);
  }

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
              <br/>
              <p className="red-text">Ultimos pedidos</p>
                <table>
                  <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Artista</th>
                        <th>Música</th>
                        <th>Programa</th>
                    </tr>
                  </thead>
                
                  <tbody>
                    {request? request.map(el =>(
                      <tr key={el.id? el.id : 112224}>
                        <td>{el.nome}</td>
                        <td>{el.telefone}</td>
                        <td>{el.artista}</td>
                        <td>{el.musica}</td>
                        <td>{el.programacao? el.programacao.programa.nome : null}</td>
                    </tr>
                    )): null}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
