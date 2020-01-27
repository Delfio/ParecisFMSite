import React from 'react';

import { Programacao, UlProgramacao } from './styles';

export default function ProgramacaoSemanal() {
  return (
    <div style={{marginBottom: 0}} className="row">
      <Programacao id="programacao" className="col s12 center">
        <div className="container center">
          <h5 style={{fontWeight: 700, marginTop: 35}}>PROGRAMAÇÃO</h5>
        </div>
        <div className="row">
          <div className="col s12 l6">
            <UlProgramacao className="col s12">
              <div className="col s12">
                <p className="left" style={{fontWeight: 800,}}>SEGUNDA À SEXTA</p>
              </div>
              <li className="col l3 m4 left-align">
                <p style={{fontWeight: 700}}>ARENA 98</p>
                <p>Locutor: Luan Mala</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 05h às 07h</p>
              </li>
              <li className="col l3 m4 left-align">
                <p style={{fontWeight: 700}}>MANDA BALA</p>
                <p>Locutor: Flávio Dantas</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 10h às 12h</p>
              </li>
              <li className="col l3 m4 left-align">
                <p style={{fontWeight: 700}}>BATIDÃO SERTANEJO</p>
                <p>Locutor: Flávio Dantas</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 10h às 12h</p>
              </li>
              <li className="col l3 m4 left-align">
                <p style={{fontWeight: 700}}>LOVE NIGHT</p>
                <p>Locutor: Flávio Dantas</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 10h às 12h</p>
              </li>
              <li className="col l4 m4 left-align">
                <p style={{fontWeight: 700}}>BOM DIA 98</p>
                <p>Locutor: Flávio Dantas</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 10h às 12h</p>
              </li>
              <li className="col l4 m4 left-align">
                <p style={{fontWeight: 700}}>TRÂNSITO LIVRE</p>
                <p>Locutor: Flávio Dantas</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 10h às 12h</p>
              </li>
              <li className="col l4 m4 left-align">
                <p style={{fontWeight: 700}}>MANDA BALA 2º EDIÇÃO</p>
                <p>Locutor: Flávio Dantas</p>
                <p>De Segunda à Sexta</p>
                <p>Horário: 10h às 12h</p>
              </li>
            </UlProgramacao>
          </div>
          <div className="col s12 l3">
            <UlProgramacao className="col s12">
              <div className="col s12">
                <p className="left" style={{fontWeight: 800,}}>SÁBADO</p>
              </div>
              <li className="col l12 m12 left-align">
                <h6 style={{fontWeight: 700}}>RONDO RUAL - 05h às 07h</h6>
                <h6 style={{fontWeight: 700}}>JORNAL DA MANHÃ/Jh6 - 07h às 08H</h6>
                <h6 style={{fontWeight: 700}}>MANDA BALA 1º EDIÇÃO - 08h às 12h</h6>
                <h6 style={{fontWeight: 700}}>60 MINUTOS DE MÚSICA - 12h às 13h</h6>
                <h6 style={{fontWeight: 700}}>MANDA BALA 2º EDIÇÃO - 13h às 16h</h6>
                <h6 style={{fontWeight: 700}}>BATIDÃO SERTANEJO - 16h às 18h</h6>
                <h6 style={{fontWeight: 700}}>FLASH BACK - 18h às 20h</h6>
                <h6 style={{fontWeight: 700}}>FÃ CLUBE - 20h às 22h</h6>
                <h6 style={{fontWeight: 400}}>120 MINUTOS DE MÚSICA - 22h às 00h</h6>
              </li>
            </UlProgramacao>
          </div>
          <div className="col s12 l3">
            <UlProgramacao style={{borderRight: 'none'}} className="col s12">
              <div className="col s12">
                <p className="left" style={{fontWeight: 800,}}>DOMINGO</p>
              </div>
              <li className="col l12 m12 left-align">
                <h6 style={{fontWeight: 700}}>RONDO RUAL - 05h às 07h</h6>
                <h6 style={{fontWeight: 700}}>JORNAL DA MANHÃ/Jh6 - 07h às 08H</h6>
                <h6 style={{fontWeight: 700}}>MANDA BALA 1º EDIÇÃO - 08h às 12h</h6>
                <h6 style={{fontWeight: 700}}>60 MINUTOS DE MÚSICA - 12h às 13h</h6>
                <h6 style={{fontWeight: 700}}>MANDA BALA 2º EDIÇÃO - 13h às 16h</h6>
                <h6 style={{fontWeight: 700}}>BATIDÃO SERTANEJO - 16h às 18h</h6>
                <h6 style={{fontWeight: 700}}>FLASH BACK - 18h às 20h</h6>
                <h6 style={{fontWeight: 700}}>FÃ CLUBE - 20h às 22h</h6>
                <h6 style={{fontWeight: 400}}>120 MINUTOS DE MÚSICA - 22h às 00h</h6>
              </li>
            </UlProgramacao>
          </div>
        </div>
      </Programacao>
    </div>
  );
}
