import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function ListarRadios() {
  const [radios, setRadios] = useState([]);


  useEffect(() => {
    loadRadios()
  }, [])

  async function loadRadios() {
    try {
      const response = await api.get('principal');
      setRadios(response.data);

    } catch(err) {

    }
  };

  async function handlDelete(data){

  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h4>Todas as rádios</h4>
        <table>
          <thead>
              <tr>
                  <th>Nome</th>
                  <th>Link</th>
                  <th>Cidade</th>
                  <th>Icone</th>
                  <th>Atualizar</th>
                  <th>Imagens</th>
                  <th>Deletar</th>
              </tr>
            </thead>

            <tbody>
              {radios.map(el => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.link}</td>
                  <td>{el.cidade ? el.cidade.nome : 'Não relacionado'}</td>
                  <td>
                    <div className="col s12">
                      <img style={{maxHeight: 80}} src={el.icon? el.icon.url : null} alt="icone"/>
                    </div>
                  </td>
                  <td>
                    <Link to={`/sobre/${el.id}`}>
                      Atualizar
                    </Link>
                  </td>
                  <td>
                    <Link to={`/cadBanner/${el.id}`}>
                      Imagens
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handlDelete(el.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
