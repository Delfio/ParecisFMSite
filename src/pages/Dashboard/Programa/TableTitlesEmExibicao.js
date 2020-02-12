import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function TableTitles({id, props}) {

  const [tituloes, setTitles] = useState([]);


  useEffect(() => {
    loadTitles();
  } ,[props])

  async function loadTitles() {
    try {

      const response = await api.get(`titleProgramacaoExibicao`);

      setTitles(response.data);

    } catch (Err) {
      toast.error('Ocorreu um erro')
    }
  };

  async function handlDelete(data){
    try{
      await api.delete(`titleProgramacaoExibicao/${data}`);
      
      toast.success('Titulo deletado com sucesso')
      loadTitles()
    } catch(err) {
      toast.error('Houve um erro ao deletar o titulo')

    }
  }

  return (
    <>
    <h4 className="grey-text center"> Titulos já cadastrados </h4>
    <table className="centered">
        <thead>
          <tr>
              <th>Nome</th>
              <th>Especial</th>
              <th>Data de cadastro</th>
              <th>Atualizar</th>
              <th>Deletar</th>
          </tr>
        </thead>

        <tbody>
          {tituloes.map(el => (
            <tr key={el.id}>
              <td>{el.nome}</td>
              <td>{el.obs? 'SIM': 'NÃO'}</td>
              <td>{el.createdAt}</td>
              <td>
                <Link to={`attTitle/${el.id}`}>
                  Atualizar
                </Link>
              </td>
              <td>
                <button onClick={() => handlDelete(el.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

