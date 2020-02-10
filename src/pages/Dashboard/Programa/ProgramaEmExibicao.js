import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Form, Input} from '@rocketseat/unform';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import * as Yup from 'yup'

// import { Container } from './styles';
import CreateProgramaEmExibicao from './SeletedProgramas'

const schemaPrograma = Yup.object().shape({
  horario: Yup.string().required('Selecine um horario'),
  programa: Yup.string().required('Selecione um programa'),
  title: Yup.string().required('Selecione um titulo'),
})
const schemaTitle = Yup.object().shape({
  nome: Yup.string().required('Insira um nome do titulo'),
})


export default function ProgramaEmExibicao() {
  const profile = useSelector(state => state.user.profile);

  const [ programacoes, setProgramacoes ] = useState([]);
  const [tipo, setTipo] = useState(false)

  useEffect(() => {
    loadProgramacoes();
  }, [])

  async function handleNewTitle(data, { resetForm  }){
    try {
      await api.post(`titleProgramacaoExibicao`, {
        ...data,
        obs: tipo
      })
      loadProgramacoes();
      resetForm();
      toast.success('Titulo cadastrado com sucesso')
    } catch(err){

    }
  }

  async function handlenewProgramacao(data, { resetForm }){
    try {
      await api.post(`programaEmExibicao/${profile.radio_id}`, {
        horario: data.horario,
        title_id: data.title,
        programa_id: data.programa,
      })
      toast.success('Cadastrado realizado com sucesso')
      resetForm();

      loadProgramacoes();

    } catch (err) {
      toast.error('Houve uma falha')

    }
  }

  async function loadProgramacoes(){
    try {

      const response = await api.get(`programaEmExibicao/${profile.radio_id}`);

      setProgramacoes(response.data);

    } catch (err){
      toast.error('Houve uma falha ao carregar o sistema')

    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <div style={{marginTop: 35}} className="col s12">
            <h4>Programas em Exibição</h4>
            <p>Cadastre Programas para serem exibidos no rodapé do site</p>
            <p>Cadastre os Titulos e os programas conforme os Títulos</p>
            <p>Caso necessite que algum programa tenha uma listagem diferenciada, selecione o box "Diferente"</p>
            <div className="col s12">
              <Form style={{color: 'red'}} schema={schemaTitle} onSubmit={handleNewTitle}>
                <div className="row">
                  <div className="col s12">
                    <h5 className="grey-text">Cadastre um novo Titulo</h5>
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
                          checked={tipo === true}
                          onChange={e =>  tipo === false ? setTipo(true) : setTipo(false)}
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
            <br/>
            <div className="col s12">
              <Form style={{color: 'red'}} schema={schemaPrograma} onSubmit={handlenewProgramacao}>
                <div className="col s12">
                  <h5 className="grey-text">Cadastre uma nova Programação em exibição</h5>
                </div>
                <CreateProgramaEmExibicao props={programacoes} />
                <div style={{marginTop: 35}} className="col s12 left-align">
                  <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        
          <br/>
          <div className="col s12">
            <h5 className="grey-text center">Itens já cadastrados</h5>
            <ul className="col s12">
              {programacoes.map(el => (
                <li key={el.id} className="col l4 s12 m4">
                  <h5>{el.nome} : </h5>
                  <p className="red-text" style={{fontWeight: 900, marginTop: -10}}>{el.obs? 'Especial' : null}</p>
                  {el.programa.map(el => (
                    <p>{el.horario} : {el.programa ? el.programa.nome: null}</p>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
