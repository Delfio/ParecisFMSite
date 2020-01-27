import React, {useEffect} from 'react';
import Logo from '../../assets/logoParecis.svg'
import M from 'materialize-css/dist/js/materialize.min.js';

import { Container, Div, DivInput } from './styles';


export default function Inicial(props) {

  useEffect(() => {
    var selecteds = document.querySelectorAll('select');
    M.FormSelect.init(selecteds, {});
  }, [])

  async function handlePage(event){

    const {value} = event.target;
    return (
      
      await props.history.push(`radio/${value}`)
    )
  }

  return (
    <Container>
      <div className="row">
        <div style={{displa: 'flex', justifyContent: 'center', alignItems: 'center'}} className="container">
          <Div className="col s12 center">
            <img src={Logo} alt="logo parecis"/>
            <h4 className="white-text">Selecione a sua rádio</h4>
              <div className="row">
                <DivInput className="col s12 l12">
                  <div className="input-field col s12 m6 l6 center-align">
                    <select defaultValue="0" onChange={handlePage} className="icons center">
                      <option value="default" defaultValue selected>Selecione sua cidade</option>
                      <option value="1" data-icon={Logo}>Porto Velho</option>
                      <option value="2" data-icon={Logo}>Ariquemes</option>
                      <option value="3" data-icon={Logo}>Rolim de Moura</option>
                    </select>
                  </div>
                </DivInput>
              </div>
          </Div>
        </div>
      </div>
    </Container>
  );
}
