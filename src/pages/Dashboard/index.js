import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tokenExpirado } from '../../store/modules/user/actions';
import {toast} from 'react-toastify';

import api from "../../services/api";

function TentandoDashboard() {
  const [date, setdate] = useState(new Date());
  const [request, setRequest] = useState([{}]);
  const { name, radio_id,  } = useSelector(state => state.user.profile);

  const dispatch = useDispatch()

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  async function loadNotifications() {
    try {
      const response = await api.get(`notifications/${radio_id}?data=${date}`);
      const { data } = response;
      setRequest(data);
    } catch (err) {
      toast.error("Token expirado, favor faça loguin novamente!");
      return dispatch(tokenExpirado())
    }
  }
  return (
    <main>
      <div className="container">
        <div className="row">
          <div
            style={{ marginTop: 26 }}
            className="col s12 m8 offset-m1 xl12 offset-xl1 center"
          >
            <h2
              style={{ fontWeight: "300" }}
              className="red-text"
            >{`Bem vindo ${name}`}</h2>
            <div className="left-align">
              <h6> * Este é seu painel de configuração da sua rádio</h6>
              <h6> * Adicione e altere conteúdos referentes a sua rádio</h6>
              <h6> * Quaisquer dúvidas entre em contato com o suporte</h6>
              <br />
              <p className="red-text">Ultimos pedidos</p>
              <table>
                <thead>
                  <tr>
                    <th>Dia</th>
                    <th>Hora</th>
                    <th>Pedido</th>
                  </tr>
                </thead>

                <tbody>
                  {request
                    ? request.map(el => (
                        <tr key={el._id ? el._id : 112224}>
                          <td>{el.dia}</td>
                          <td>{el.hora}</td>
                          <td>{el.content}</td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default memo(TentandoDashboard);