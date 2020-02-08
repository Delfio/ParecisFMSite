import React, {useEffect, useState} from 'react';
import { Form } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import * as Yup from 'yup'

import api from '../../../../services/api'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Selected from '../Selected';

const schema = Yup.object().shape({
  horarios: Yup.string(),
  dia: Yup.string(),
  locutor: Yup.string(),
  programa: Yup.string(),
})

export default function AtualizarProgramation(props) {
  const { id } = props.match.params
  // const [programations, setProgramations] = useState([])

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    loadLocutores();
    loadProgramas();
  }, []);

  const conteudo = []
  const programa = []
  
  async function loadLocutores(){
    const response = await api.get(`/locutores/${profile.radio_id}`)
    const {data} = response;
    
    data.map(el => conteudo.push({id: el.id, title: el.name}));
  };

  async function loadProgramas () {
    const response = await api.get('/programa');
    const {data} = response;

    data.map(el => programa.push({id: el.id, title: el.nome}));
  }

  const dias = [
    { id: 1, title: 'Domingo' },
    { id: 2, title: 'Segunda' },
    { id: 3, title: 'Terça' },
    { id: 4, title: 'Quarta' },
    { id: 5, title: 'Quinta' },
    { id: 6, title: 'Sexta' },
    { id: 7, title: 'Sábado' },
  ]

  const horas = [
    { id:'00:00', title: '00:00' },
    { id: '01:00', title: '01:00' },
    { id: '02:00', title: '02:00' },
    { id: '03:00', title: '03:00' },
    { id: '04:00', title: '04:00' },
    { id: '05:00', title: '05:00' },
    { id: '06:00', title: '06:00' },
    { id: '07:00', title: '07:00' },
    { id: '08:00', title: '08:00' },
    { id: '09:00', title: '09:00' },
    { id: '10:00', title: '10:00' },
    { id: '11:00', title: '11:00' },
    { id: '12:00', title: '12:00' },
    { id: '13:00', title: '13:00' },
    { id: '14:00', title: '14:00' },
    { id: '15:00', title: '15:00' },
    { id: '16:00', title: '16:00' },
    { id: '17:00', title: '17:00' },
    { id: '18:00', title: '18:00' },
    { id: '19:00', title: '19:00' },
    { id: '20:00', title: '20:00' },
    { id: '22:00', title: '22:00' },
    { id: '23:00', title: '23:00' },
    { id: '24:00', title: '24:00' },
  ]

  async function updateProgramation(data, { resetForm }){
    try {

      const { horarios } = data;
      const horaFormatada = horarios.join(',');
      const resplace = horaFormatada.replace(/[,]+/g, ' ');

      await api.put(`programacaos/${id}`, {
        ...data,
        horario: resplace
      });

      resetForm();
      toast.success('Programação Atualizada com sucesso')
    } catch(err){
      toast.error('Algo deu errado')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 50}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h3>Atualizar Programação</h3>

          <div className="row">
            <Form style={{color: 'red'}} schema={schema} onSubmit={updateProgramation}>
              <div className="row">
               <div className="col l6 s12">
                <Selected 
                    name="dia" 
                    label="Selecione o Dia" 
                    options={dias}
                  />
               </div>
               <div className="col l6 s12">
                <Selected 
                    name="horarios" 
                    label="Selecione os Horários" 
                    options={horas}
                    multiple={true}
                  />
               </div>
               <div className="col l6 s12">
                <Selected 
                    name="aaaa" 
                    label="Selecione o Locutor Principal" 
                    options={conteudo}
                  />
               </div>
               <div className="col l6 s12">
                <Selected 
                    name="programa_id" 
                    label="Selecione o nome do Programa" 
                    options={programa}
                  />
               </div>
              </div>
              <div style={{marginTop: '5%'}} className="col s12">
                <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
