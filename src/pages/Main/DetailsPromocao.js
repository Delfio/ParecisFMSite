import React, { useEffect, useState } from 'react';
import Menu from '../../components/MenuDefault/MenuPageExtra'
import api from '../../services/api';
import M from 'materialize-css/dist/js/materialize.min.js';
import { parseISO, format } from 'date-fns';

import facebookButton from '../../assets/iconFace.svg'
import instaButton from '../../assets/iconInsta.svg'
import whatsButton from '../../assets/iconWhats.svg'

import pt from 'date-fns/locale/pt';

// import { Container } from './styles';

export default function DetailsPromocao(props) {
  const {id} = props.match.params;

  const [promocao, setPromocao] = useState({});

  const [date, setDate]= useState();

  // const data = new Date(data_id)
        
  // const dateFormated = format(
  //   data,
  //   "'Dia' dd 'de' MMMM', às ' HH:mm'h'",
  //   { locale: pt }
  // );

  useEffect(() => {
    loadPromocao();
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems, {});
  }, [props]);

  async function loadPromocao(){
    const response = await api.get(`promocaoAtt/${id}`);

    setPromocao(response.data[0]);
    const date = response.data.map(el => {
      return el.createdAt
    });

    const x = String(date);

    const aa = parseISO(x)
    setDate(format(
      aa,
      "'Dia' dd 'de' MMMM'",
      { locale: pt }
    ))
  }

  return (
    <>
      <Menu />
      <div className="row">
        <div className="container">
          <div style={{marginTop: 55}} className="col s12">
            <h1 className="grey-text" style={{
              fontSize: '2rem', 
              // color: 'grey',
              marginLeft: 0, 
              borderBottom: 'solid 1px rgba(0,0,0,0.2)'}}>
            <span>
              <i style={{color: '#f9ab00'}} className="material-icons">play_arrow</i>
            </span> 
              Promoção: 
              <span style={{fontWeight: 700, marginLeft: 5}}>
                 {promocao.nome}
              </span>
            </h1>
            <center>
              <img 
                title="expandir" 
                style={{maxHeight: 500}} 
                alt="promocaoImage" 
                className="responsive-img materialboxed hoverable" 
                src={promocao.imagem? promocao.imagem.url: null} 
              />
              <label className="left" style={{fontSize: 20, marginLeft: 13}} htmlFor="img">
                {date? date : null}
              </label>
            </center>
            <div className="col s12">
              {promocao.descricao}

              {promocao.link ? (
                <div style={{marginTop: 15}} className="col s12 center">
                  <a href={promocao.link}> Confira mais em </a>
                </div>
              ) : null}
            </div>
            <div style={{marginTop: 10}} className="col s12">
              <h5>#Participe</h5>
              <ul className="center-align">
                <li className={promocao.whatsapp? `col s4`: 'hide'}>
                  <a target="_blank" href={promocao.whatsapp? promocao.radio.whatsapp : null}>
                    <img style={{width: '100%', maxWidth: 50}} src={whatsButton} alt=""/>
                  </a>
                </li>
                <li className={promocao.facebook? `col s4`: 'hide'}>
                  <a target="_blank" href={promocao.facebook? promocao.radio.facebook : null}>
                    <img style={{width: '100%', maxWidth: 50}} src={facebookButton} alt=""/>
                  </a>
                </li>
                <li className={promocao.instagram? `col s4`: 'hide'}>
                  <a target="_blank" href={promocao.instagram? promocao.radio.instagram : null}>
                    <img style={{width: '100%', maxWidth: 50}} src={instaButton} alt=""/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
