import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function TableExibicao({id, props}) {

  const [programas, setProgramas] = useState([]);


  useEffect(() => {
    loadProgramas();
  } ,[props])

  async function loadProgramas() {
    try {

      const response = await api.get(`programaEmExibicaoShows/${id}`);

      setProgramas(response.data);

    } catch (Err) {
      toast.error('Ocorreu um erro')
    }
  };

  async function handlDelete(data){
    try {

      await api.delete(`programaEmExibicao/${data}`);

      toast.success('Horário deletado com sucesso')
      loadProgramas()
    } catch(err) {
      toast.error('Houve um erro ao deletar o horário')

    }
  }

  return (
    <>
    <h4 className="grey-text center"> Horários já cadastrados </h4>
    <table className="centered">
        <thead>
          <tr>
              <th>Horário</th>
              <th>Nome do programa</th>
              <th>Deletar</th>
          </tr>
        </thead>

        <tbody>
          {programas.map(el => (
            <tr key={el.id}>
              <td>{el.horario}</td>
              <td>{el.programa? el.programa.nome: null}</td>
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
