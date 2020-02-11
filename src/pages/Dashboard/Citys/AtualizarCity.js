import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import Selected from '../Programa/Selected'

// import { Container } from './styles';

export default function AttCity(props) {

  const{id} = props.match.params;

  const [city, setCity] = useState({});

  useEffect(() => {

    loadEstado();
  } ,[]);

  useEffect(() => {
    pushEstados();
  }, [city])

  const estadosParaSelected = []

  async function pushEstados() {
    const response = await api.get('estados');
    const {data} = response;

    data.map(el => estadosParaSelected.push({id: el.id, title: el.nome}))
  }

  async function loadEstado() {
    try {

      const response = await api.get('cidades');
      const {data} = response;

      data.map(el => {
        if(el.id == id){
          setCity(el)
        }
      })

    } catch(err) {

    }
  };

  async function handleUpdateCity(data){
    try {

      await api.put(`cidades/${id}`, {
        ...data
      });

      toast.success('Cidade atualizada com sucesso')

    } catch(err) {
      toast.error('Ocorreu um erro!, confira seus dados')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
        <Form initialData={city} onSubmit={handleUpdateCity}>
            <div className="row">
              <h4 className="grey-text"> Atualizar Cidade </h4>
              <div className="input-field col l8 s8">
                <Input
                  name="nome"
                  id="nome"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col l4 s4">
                <Selected 
                  name="estado" 
                  label="Selecione o estado" 
                  options={estadosParaSelected}
                />
              </div>
              <div className="col s12">
                <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Atualizar
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
