import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';

// import { Container } from './styles';

export default function AllUsers() {
  const [locutores, setLocutores] = useState([]);

  useEffect(() => {
    loadAdms();
  }, [])

  async function loadAdms(){
    try {
      const response = await api.get('users');

      const {data} = response;
      
      setLocutores(data.locutores)
    } catch(err) {
      toast.error('Ocorreu um erro, atualize a página')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h4 className="grey-text"> Todos os Usuarios </h4>
          <table>
            <thead>
              <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Radio</th>
                  <th>Locutor</th>
              </tr>
            </thead>

            <tbody>
              {locutores.length >= 1 ? locutores.map(el => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.radio.name}</td>
                  <td>{el.locutor ? "Sim" : "Não"}</td>
              </tr>
              )): null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
