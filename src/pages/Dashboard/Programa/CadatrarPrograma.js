import React, {useEffect, useState} from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import * as Yup from 'yup'

import api from '../../../services/api'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const schema = Yup.object().shape({
  nome: Yup.string().required('Favor Insira um nome para o programa')
})

const secret = process.env.REACT_APP_KEY_SECRET_KEY_WITH_A_AUTHENTICATION;

export default function CadastrarPrograma() {
  const [programas, setProgramas] = useState([]);
  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    loadProgramas()
  }, []);

  async function loadProgramas() {
   try {
    const response = await api.get('/programa');
    setProgramas(response.data)
   } catch (err) {
    toast.error('Aconteceu algo de errado')
   }
  }

  async function handleNewPrograma(data){
    try {
      const response = await api.post('/programa', {
        ...data
      });
  
      await setProgramas([...programas, response.data]);
      toast.success('Programa Cadastrado com sucesso')
    } catch (err) {
      toast.error('Aconteceu algo de errado')
    }
  }

  async function handlDelete(data){
    await api.delete(`/programa/${data}`);

    const response = await api.get('/programa');
    setProgramas(response.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 26}} className="col s12 m12 offset-m1 xl12 offset-xl1 left-align">
          <h3>Programas Disponíveis</h3>
          <br/>
            <table className="highlight">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Data de Criação</th>
                    <th>Criador</th>
                    <th className={profile.config === secret ? null : 'hide'}>Deletar</th>
                    <th className={profile.config === secret ? null : 'hide'}>Atualizar</th>
                </tr>
              </thead>

              <tbody>
                {programas.map(el => (
                  <tr key={el.id}>
                    <td>{el.nome}</td>
                    <td>{el.createdAt}</td>
                    <td>{el.criador ? el.criador.name : null}</td>
                    <td className={profile.config === secret ? null : 'hide'}>
                      <button onClick={() => handlDelete(el.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></button>
                    </td>
                    <td className={profile.config === secret ? null : 'hide'}>
                      <Link to={`attPrograma/${el.id}`}> Atualizar </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          <br/>
          <h4> Cadastrar um novo programa </h4>
          <div className="row">
            <Form onSubmit={handleNewPrograma} style={{color: 'red'}} schema={schema} className="col s12">
              <div className="row">
                <div className="input-field col s12 m10 l12">
                  <Input name="nome" id="nome" type="text" className="validate" />
                  <label htmlFor="nome">Nome do programa</label>
                </div>
                <div className="col s12">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        
      </div>
    </div>
  );
}
