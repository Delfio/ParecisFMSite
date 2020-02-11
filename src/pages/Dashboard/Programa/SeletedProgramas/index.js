import React, { useEffect } from 'react';
import Selected from '../Selected'
import api from '../../../../services/api';
import { toast } from 'react-toastify';
// import { Container } from './styles';

export default function SelectProgramas(props) {


  useEffect(() => {
    loadTitles();
    loadProgramas();

  }, [loadProgramas, loadTitles, props])

  const titles = []
  const programas = []

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
    { id: '21:00', title: '21:00' },
    { id: '22:00', title: '22:00' },
    { id: '23:00', title: '23:00' },
  ]

  async function loadTitles() {
    try {
      const response = await api.get('titleProgramacaoExibicao');

      const {data} = response;
  
      data.map(el => titles.push({id: el.id, title: el.nome}));
    } catch (err){
      toast.error('Ocorreu um erro, tente novamente')
    }
  }

  async function loadProgramas() {
    try {
      const response = await api.get('programa');
      const {data} = response;

      data.map(el => programas.push({id: el.id, title: el.nome}));

    } catch (err){
      toast.error('Ocorreu um erro, tente novamente')

    }
  }

  return (
    <>
    <div style={{zIndex: 0}} className="col s6">
        <Selected 
          name="horario" 
          label="Selecione o Horario" 
          options={horas}
        />
    </div>
    <div style={{zIndex: 0}} className="col s6">
        <Selected 
          name="programa" 
          label="Selecione o programa" 
          options={programas}
        />
    </div>
    <div style={{zIndex: 0}} className="col s12">
        <Selected 
          name="title" 
          label="Selecione o Titulo" 
          options={titles}
        />
    </div>
    </>
  );
}
