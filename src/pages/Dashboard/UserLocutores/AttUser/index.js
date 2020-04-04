import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { toast } from 'react-toastify';
import {Form, Input} from '@rocketseat/unform';
import Selected from '../../Programa/Selected';

// import { Container } from './styles';

export default function AttUser(props) {
  const {id} = props.match.params;
  const [user, setUser] = useState({});
  const [locutor, setLocutor] = useState(false);

  useEffect(() =>{
    loadUser(id);
  }, [props]);

  async function loadUser(id) {
    try {
      const response = await api.get(`/users/${id}`);

      setUser(response.data);
      setLocutor(response.data.locutor)
    } catch (err) {
      toast.error('Algo deu errado, por favor atualize a página ou logue novamente!')
    }
  }

  async function handleUpdateUser(data){
    try {
      const response = await api.put(`users/1`, {
        cfp_request: user.cpf,
        email: data.email,
        name: data.name,
        cidade: data.cidade,
        telefone: data.telefone,
        cpf: data.cpf !== user.cpf ? data.cpf : user.cpf,
        locutor: locutor
      });
      toast.success('Usuario alterado com sucesso!');

      await loadUser(response.data.id);
    } catch (err) {
      toast.error('algo deu errado!');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h4 className="grey-text"> Atualizar Usuário </h4>
          <div style={{marginTop: 35}}>
            <Form initialData={user} onSubmit={handleUpdateUser}>
              <div style={{marginTop: 35}} className="input-field col s6">
                <Input placeholder="Nome do usuário" id="first_name" name="name" type="text" className="validate" />
                <label htmlFor="first_name">Nome do usúario</label>
              </div>
              <div style={{marginTop: 35}} className="input-field col s6">
                <Input placeholder="Email do usuário" id="email" name="email" type="text" className="validate" />
                <label htmlFor="email">Email do usuário</label>
              </div>

              <div style={{marginTop: 35}} className="input-field col s6">
                <Input placeholder="Telefone do usuário" id="telefone" name="telefone" type="text" className="validate" />
                <label htmlFor="telefone">Telefone do usuário</label>
              </div>
              <div style={{marginTop: 35}} className="input-field col s6">
                <Input placeholder="Cidade" id="cidade" name="cidade" type="text" className="validate" />
                <label htmlFor="cidade">Cidade</label>
              </div>
              <div style={{marginTop: 35}} className="input-field col s6">
                <Input placeholder="cpf" id="cpf" name="cpf" type="text" className="validate" />
                <label htmlFor="cpf">CPF do usuário</label>
              </div>
              <div style={{marginTop: 55}} className="input-field col s6">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: 15,
                  }}
                  className="col s3">
                  <label>
                    <Input
                      value="1"
                      name="whats3"
                      id="whats"
                      type="checkbox"
                      className="validate"
                      checked={locutor === true}
                      onChange={e => locutor=== true ? setLocutor(false): setLocutor(true)}
                    />
                    <span className="blue-text">Locutor</span>
                  </label>
                </div>
              </div>
              
              <button 
                style={{zIndex: 0, marginTop: 30}} 
                className="btn waves-effect waves-light"
                type="submit" name="action"
                  >Atualizar
                <i className="material-icons right">send</i>
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
