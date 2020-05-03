import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import api from "../../../services/api";
import { Link } from "react-router-dom";

import { tokenExpirado } from '../../../store/modules/user/actions';
// import { Container } from './styles';

export default function Table({update}) {
  const [programations, setProgramations] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadProgramacaoReferent();
  }, []);

  // useEffect(() => {
  //   loadProgramacaoReferent();
  // }, [update])

  async function loadProgramacaoReferent() {
    const response = await api.get("programacaos");
    if(response.status === 406){
      dispatch(tokenExpirado());
    }
    setProgramations(response.data);
  }

  async function handlDelete(data) {
    try {
      await api.delete(`programacaos/${data}`);
      const response = await api.get("programacaos");
      setProgramations(response.data);
      toast.success("Programação deletada com sucess");
    } catch (err) {
      toast.error("Listagem vázia");
    }
  }

  return (
    <div className="row">
      <h5>Programações já cadastradas</h5>
      <table>
        <thead>
          <tr>
            <th>Programa</th>
            <th>Horarios</th>
            <th>Dia</th>
            <th>Deletar</th>
            <th>Atualizar</th>
          </tr>
        </thead>

        <tbody>
          {programations.map(el => (
            <tr key={el.id}>
              <td>{el.programa ? el.programa.nome : null}</td>
              <td>{el.horario}</td>
              <td>{el.dia ? el.dia.nome : null}</td>
              <td>
                <button
                  style={{ zIndex: 10 }}
                  onClick={() => handlDelete(el.id)}
                  className="btn-floating waves-effect waves-light red"
                >
                  <i className="material-icons">delete</i>
                </button>
              </td>
              <td>
                <Link to={`attProgramacao/${el.id}`}> Atualizar </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
