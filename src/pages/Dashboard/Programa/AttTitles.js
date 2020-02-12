import React, { useState, useEffect } from 'react';

import {Form, Input} from '@rocketseat/unform';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import * as Yup from 'yup'

const schemaTitle = Yup.object().shape({
  nome: Yup.string().required('Insira um nome do titulo'),
})

// import { Container } from './styles';

export default function AttTitles(props) {

  const { id } = props.match.params;
  const [ title, setTitle ] = useState();
  const [ obs, setObs ] = useState(false);

  useEffect(() => {
    loadTtitle()
  }, [props])

  async function loadTtitle () {
    try {

      const response = await api.get("titleProgramacaoExibicao");

      const {data} = response;

      data.map(el => {
        if(el.id == id) {
          setObs(el.obs)
          setTitle(el)
        }
      })

    } catch (err) {
      toast.error('Houve um erro!')
    }
  };

  async function handleUpdataTitle(data){
    try {

      await api.put(`titleProgramacaoExibicao/${id}`,{
        ...data,
        obs: obs
      });

      toast.success('Titulo atualizado com sucesso')

    } catch(err) {
      toast.error('Houve um erro ao atualizar')
    }
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <div style={{marginTop: 55}} className="col s12">
            <Form initialData={title} style={{color: 'red'}} schema={schemaTitle} onSubmit={handleUpdataTitle}>
              <div className="row">
                <div className="col s12">
                  <h5 className="grey-text">Atualize o titulo</h5>
                </div>
                <div style={{marginTop: 35}} className="input-field col s12">
                  <Input placeholder="Segunda a Sexta" id="first_name" name="nome" type="text" className="validate" />
                  <label htmlFor="first_name">Titulo da Listagem</label>
                </div>
                <div style={{marginTop: -8, marginBottom: 15}} className="col s12">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: 15,
                    }}
                    className="col s3">
                    <label>
                      <Input
                        value="1"
                        name="destaque"
                        id="destaque"
                        type="checkbox"
                        className="validate"
                        checked={obs === true}
                        onChange={e =>  obs === false ? setObs(true) : setObs(false)}
                      />
                      <span className="blue-text">Horario Especial</span>
                    </label>
                  </div>
                </div>
                <span className="red-text">Cadastre um titulo para a listagem "Segunda a Sexta"</span>
                <p className="red-text">Para listagem especiais marque a opção "Horario Especial"</p>
                <div className="col s12 left-align">
                  <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
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
