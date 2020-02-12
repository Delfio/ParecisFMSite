import React, {useEffect, useState} from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

import { Programacao, UlProgramacao } from './styles';

import api from '../../services/api';

export default function ProgramacaoSemanal({id: RadioID}) {

  const [programacao, setProgramacao] = useState([])

  useEffect(() => {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      numVisible: 3,
      indicators: true,
      dist: 50,
    });

  }, []);

  useEffect(() => {
    async function loadPromotion(){
      const response = await api.get(`programaEmExibicao/${RadioID}`);

      const {data} = response;
      setProgramacao(data);
    }
    loadPromotion();
    
  }, [RadioID])

  return (
    <div style={{marginBottom: 0}} className="row">
      <Programacao id="programacao" className="col s12 center">
        <div className="container center">
          <h5 style={{fontWeight: 500, marginTop: 35, fontSize: 35}}>PROGRAMAÇÃO</h5>
        </div>

        <div className="row">
          <div className="container">
            {programacao.length >=1 ? programacao.map(el => (
              !el.obs ? (
                <div key={el.id} className="col s12 l4">
                <UlProgramacao className="col s12">
                  <div className="col s12">
                    <p className="left red-text" style={{fontWeight: 800, fontSize: 18}}>{el.nome.toUpperCase()}</p>
                  </div>
                  {el.programa? el.programa.map(el => (
                  <li key={el.id} className="col l12 m12 left-align">
                    <p><span> {el.horario} </span> - {el.programa? el.programa.nome : null}</p>
                  </li>
                  )): null}
                </UlProgramacao>
              </div>
            ): null
              )
            ): null}
          </div>
         <div className="col s12">
          <div className="container">
              <div style={{marginLeft: '2%'}} className="left">
                <h5 style={{marginBottom: -10}}>Observação: </h5>
                {programacao.length >=1 ? programacao.map(el => (
                  el.obs ? (
                    <div key={el.id} className="col s12">
                      <p className="red-text" style={{fontWeight: 800, fontSize: 18}}>AS {el.nome.toUpperCase()}</p>
                      {el.programa? el.programa.map(el => (
                        <h5 key={el.id}><span> {el.horario} </span> - {el.programa? el.programa.nome : null}</h5>
                      )): null}
                    </div>
                  ) : null
                )): null}
              </div>
          </div>
         </div>
        </div>
      </Programacao>
    </div>
  );
}
