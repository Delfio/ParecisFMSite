import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { Form, Input } from '@rocketseat/unform';
import {toast} from 'react-toastify';
import * as Yup from 'yup'

const schema = Yup.object().shape({
  nome: Yup.string().required('Favor Insira um nome para o programa')
})

export default function AtualziarPrograma(props) {
  const [programa, setPrograma] = useState();

  const { id } = props.match.params

  useEffect(() => {
    loagPromocao()
  }, []);

  async function loagPromocao() {
    try {
      const response = await api.get(`programa/${id}`);
      setPrograma(response.data);
      
    } catch(err) {
      toast.error('Aconteceu algo de errado')
    }
  }

  async function handleUpdatePrograma(data){
    try {
      await api.put(`programa/${id}`, data)
      props.history.push('/cadPrograma')
      toast.success('Atualizado com sucesso')
    } catch (err) {
      toast.error('Aconteceu algo de errado')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 150}} className="col s12 m12 offset-m1 xl12 offset-xl1 left-align">
          <h4> Atualizar Programa </h4>
          <div className="row">
            <Form initialData={programa} onSubmit={handleUpdatePrograma} style={{color: 'red'}} schema={schema} className="col s12">
              <div className="row">
                <div className="input-field col s12 m10 l12">
                  <Input name="nome" id="nome" type="text" className="validate" />
                </div>
                <div className="col s12">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Atualizar
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
