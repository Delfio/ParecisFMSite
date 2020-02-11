import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function AdicionarEstado() {

  const [estados, setEstados] = useState([]);

  useEffect(() => {
    loadEstados();
  }, [])

  async function loadEstados() {
    try {

      const response = await api.get('estados');
      setEstados(response.data);

    } catch(err){
      toast.error('Houve um erro, atualize a página')
    }
  }

  async function handleNewEstado(data, { resetForm }){
    try {
      await api.post(`estados`,{
        ...data
      });

      toast.success("Estado cadastrado com sucesso")
      resetForm();
      loadEstados()
    } catch(err){
      toast.error('Houve um erro ao cadastrar, confira seus dados')
    }
  };

  async function handlDelete(data){
    try {
      await api.delete(`estados/${data}`);

      toast.success('Estado deletado com sucesso');
      loadEstados()
    } catch(err){
      toast.error('Houve um erro!')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <Form onSubmit={handleNewEstado}>
            <div className="row">
              <h4 className="grey-text"> Cadastro de Estados </h4>
              <div className="input-field col l8 s8">
                <Input
                  name="nome"
                  id="nome"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Nome do Estado</label>
              </div>
              <div className="input-field col l4 s4">
                <Input
                  name="uf"
                  id="uf"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">UF do Estado</label>
              </div>
              <div className="col s12">
                <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </Form>
          <br/>
          <div className="row">
            <h4>Estados já cadastrados</h4>
            <table className="centered">
              <thead>
                <tr>
                    <th>Nome</th>
                    <th>UF</th>
                    <th>Data de cadastro</th>
                    <th>Atualizar</th>
                    <th>Deletar</th>
                </tr>
              </thead>

              <tbody>
                {estados.length >=1 ? estados.map(el => (
                  <tr key={el.id}>
                    <td>{el.nome}</td>
                    <td>{el.uf}</td>
                    <td>{el.createdAt}</td>
                    <td>
                      <Link to={`/attEstado/${el.id}`}>
                        Atualizar
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handlDelete(el.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></button>
                    </td>
                  </tr>
                )): null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
