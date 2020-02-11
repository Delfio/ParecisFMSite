import React, { useState, useEffect } from 'react';
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'
import api from '../../../services/api';
// import { Container } from './styles';
import Selected from '../Programa/Selected'
import { toast } from 'react-toastify';

const schemas = Yup.object().shape({
  email: Yup.string().email('Insira um email válido').required('Insira um e-mail'),
  name: Yup.string().required('Insira um nome'),
  password: Yup.string().required('Insira uma senha'),
  cpf: Yup.string().required('Insira o CPF do usuário')
    .min(11, 'Quantidade Inválida')
    .max(11, 'Somente Números'),
  cidade: Yup.string(),
  telefone: Yup.string().min(8,'Minimo de 8 dígitos').max(11, 'Máximo de 11 dígitos'),
  radio: Yup.number().required('Selecione uma rádio para este usuário')
})


export default function CadastrarUsuarios() {

  const [locutor, setLocutor] = useState(false);

  useEffect(() => {
    loadRadios();
  }, [])

  async function handleNewUser(data, { resetForm }){
    try {
      await api.post('users', {
        ...data,
        locutor: locutor,
        radio_id: data.radio
      })
      toast.success("Usuario cadastrado com sucesso")
      resetForm();
    } catch (err) {
      toast.error('Ocorreu um erro, verifique seus dados')
    }
  }

  const radios = []

  async function loadRadios(){
    try {

      const response = await api.get('principal')

      const { data } = response;

      data.map(el => radios.push({id: el.id, title: el.name}))

    } catch(err){

    }
  }
 
  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 35}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h4 className="grey-text">Cadastre Usuários e Locutores</h4>
          <Form schema={schemas} style={{color: 'red'}} onSubmit={handleNewUser}>
            <div className="row">
              <div className="input-field col l6 s6">
                <Input
                  name="email"
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="name">E-mail</label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="password"
                  id="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="name">Senha</label>
              </div>
              <div className="input-field col l12 s12">
                <Input
                  name="name"
                  id="name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Nome do usuario</label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="cpf"
                  id="nome"
                  type="number"
                  className="validate"
                />
                <label htmlFor="name">CPF Apenas Números</label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="cidade"
                  id="cidade"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Cidade do usúario</label>
              </div>
              <div className="input-field col l6 s12">
                <Input
                  name="telefone"
                  id="telefone"
                  type="number"
                  className="validate"
                />
                <label htmlFor="name">Telefone</label>
              </div>
              <div className="input-field col l6 s12">
                <Selected 
                  name="radio" 
                  label="Selecione a radio" 
                  options={radios}
                />
              </div>
              <div className="col s12">
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
              <div className="col s12">
            <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
              <i className="material-icons right">send</i>
            </button>
          </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
