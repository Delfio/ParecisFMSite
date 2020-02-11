import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

// import { Container } from './styles';

export default function AttEstados(props) {

  const{id} = props.match.params;

  const [estado, setEstado] = useState({});

  useEffect(() => {

    loadEstado();
  } ,[])

  async function loadEstado() {
    try {

      const response = await api.get('estados');
      const {data} = response;

      data.map(el => {
        if(el.id == id){
          setEstado(el)
        }
      })

    } catch(err) {

    }
  };

  async function handleUpdateEstado(data){
    try {

      await api.put(`estados/${id}`, {
        ...data
      });

      toast.success('Estado atualizado com sucesso')

    } catch(err) {
      toast.error('Ocorreu um erro!, confira seus dados')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
        <Form initialData={estado} onSubmit={handleUpdateEstado}>
            <div className="row">
              <h4 className="grey-text"> Atualização de Estados </h4>
              <div className="input-field col l8 s8">
                <Input
                  name="nome"
                  id="nome"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col l4 s4">
                <Input
                  name="uf"
                  id="uf"
                  type="text"
                  className="validate"
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
