import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform'
// import { Container } from './styles';

import Selected from '../Programa/Selected'

export default function Informations() {
  const profile = useSelector(state => state.user.profile);
  const [radio, setRadio] = useState({})

  useEffect(() => {
    loadInfosRadio();
    loadCidades()
  }, []);

  async function loadInfosRadio() {
    try {
      const response = await api.get(`radio/${profile.radio_id}`);
      
      setRadio(response.data);
    } catch (err){

    }
  }

  const cidades = []

  async function loadCidades() {
    const response = await api.get('/cidades');
    const {data} = response;
    data.map(el => cidades.push({id: el.id, title: el.nome}));
    try {

    } catch (err){
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 50}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h3>Rádio: {radio.name} </h3>
          <br/>
          <div className="row">
            <Form initialData={radio}>
              <div className="col s12 hide-on-small-only">
                <h5 className="grey-text">Atualize os campos abaixo</h5>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="name"
                  id="name"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="link"
                  id="link"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="row">
                <div className="col s6">
                  <Selected 
                    name="cidades" 
                    label="Selecione a Cidade para atualizar" 
                    options={cidades}
                  />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
