import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

import Selected from '../Programa/Selected'

export default function AddCity() {

  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    loadCitys();
  }, []);

  useEffect(() => {
    pushEstados();
  }, [cidades])

  const estadosParaSelected = []

  async function pushEstados() {
    const response = await api.get('estados');
    const {data} = response;

    data.map(el => estadosParaSelected.push({id: el.id, title: el.nome}))
  }
  async function loadCitys() {
    try {
      const response = await api.get('cidades');
      setCidades(response.data);
      
    } catch(err){
      toast.error('Houve um erro, atualize a página')
    }
  }

  async function handleNewCity(data, { resetForm }){
    try {
      await api.post(`cidades`,{
        ...data
      });

      toast.success("Estado cadastrado com sucesso")
      resetForm();
      loadCitys()
    } catch(err){
      toast.error('Houve um erro ao cadastrar, confira seus dados')
    }
  };

  async function handlDelete(data){
    try {
      await api.delete(`cidades/${data}`);

      toast.success('Estado deletado com sucesso');
      loadCitys()
    } catch(err){
      toast.error('Houve um erro!')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <Form onSubmit={handleNewCity}>
            <div className="row">
              <h4 className="grey-text"> Cadastro de Cidades </h4>
              <div className="input-field col l8 s8">
                <Input
                  name="nome"
                  id="nome"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Nome da cidade</label>
              </div>
              <div className="input-field col l4 s4">
                <Selected 
                  name="estado" 
                  label="Selecione o estado" 
                  options={estadosParaSelected}
                />
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
            <h4>Cidades já cadastradas</h4>
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
                {cidades.length >=1 ? cidades.map(el => (
                  <tr key={el.id}>
                    <td>{el.nome}</td>
                    <td>{el.estado? el.estado.uf : null}</td>
                    <td>{el.createdAt}</td>
                    <td>
                      <Link to={`/attCitys/${el.id}`}>
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

