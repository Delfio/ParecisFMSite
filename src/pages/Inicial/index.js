import React, {useEffect, useState} from 'react';
import Logo from '../../assets/logoParecis.png'
import M from 'materialize-css/dist/js/materialize.min.js';

import { Container, Div, DivInput, Li } from './styles';

import api from '../../services/api'

export default function Inicial(props) {

  const [radio, setRadio] = useState([]);

  useEffect(() => {

    async function loadSeila(){
      const response = await api.get('/principal');

      const {data} = response;

      setRadio(data);
    }
    loadSeila();
    async function loadSelect(){
      var elems = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elems, {});
    };
    loadSelect()
  }, [])

  // async function handlePage(event){

  //   const {value} = event.target;
  //   return (
      
  //     await props.history.push(`radio/${value}`)
  //   )
  // }

  return (
    <Container>
      <div className="row">
        <div style={{displa: 'flex', justifyContent: 'center', alignItems: 'center'}} className="container">
          <Div className="col s12 center">
            <img src={Logo} alt="logo parecis"/>
            <h4 className="white-text">Selecione a sua rádio</h4>
              <div className="row">
                <DivInput className="col s12 l12">
                  <button className='dropdown-trigger btn' data-target='dropdown1'>Escolha aqui a sua radio preferida</button>
                  <ul style={{borderRadius: 7}} id='dropdown1' className='dropdown-content'>
                    {radio.map(el => (
                      <div key={el.id}>
                        <a href={`/radio/${el.id}`}>
                          <Li className="col 12">
                            <p>{el.name}</p>
                            <div style={{paddingTop: 8, backgroundColor: 'rgba(0,0,0, 0)'}} className="col s3">
                              <img src={el.icon ? el.icon.url : Logo} alt=""/>
                            </div>
                          </Li>
                          <li className="divider" tabIndex="-1"></li>
                        </a>
                      </div>
                    ))}
                  </ul>
                </DivInput>
              </div>
          </Div>
        </div>
      </div>
    </Container>
  );
}