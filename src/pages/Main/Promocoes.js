import React, {useEffect, useState} from 'react';

import api from '../../services/api';

// import { Container } from './styles';

export default function Promocoes(props) {

  const {id} = props;
  const [conteudo, setConteudo] = useState(false);
  const [promocoes1, setPromocoes1] = useState({});
  const [promocoes2, setPromocoes2] = useState({});
  const [promocoes3, setPromocoes3] = useState({});

  useEffect(() => {
    async function loadPromocoes(){
      const response = await api.get(`/promocao/${id}`);
      const {data} = response;

      if(data.length >= 1){
        setConteudo(true)
      }
      setPromocoes1(data[0])
      setPromocoes2(data[1])
      setPromocoes3(data[2])
    }
    loadPromocoes();
  }, [])

  return (
    <div className="row grey lighten-5">
      <div id="promocoes" className={`container`}>
        <h4 style={{fontWeight: 900, padding: 15}} className="center-align grey-text">Promoções</h4>
        <div style={{boxShadow: '0 2px 15px rgba(54, 13, 8, 0.2)', marginBottom: 25, background: 'rgba(230,230,230,0.1)'}} className="carousel">
          <div className="carousel-item center">
            <img 
            alt="imgPromocao1"
              src={conteudo ? promocoes1 ? promocoes1.url : null : null}/>
            <a target="_blank" href={conteudo ? promocoes1.promocao ? promocoes1.promocao.link : null : null} style={{borderRadius: 7}} className="btn waves-effect waves-light red" type="submit" name="action">
              Ver Mais
            </a>
          </div>
          <div className="carousel-item center">
            <img 
            alt="imgPromocao2"
              src={promocoes2 ? promocoes2.url : null}/>
            <a target="_blank" href={conteudo? promocoes2.promocao ? promocoes2.promocao.link : null : null} style={{borderRadius: 7}} className="btn waves-effect waves-light red" type="submit" name="action">
              Ver Mais
            </a>
          </div>
          <div className="carousel-item center">
            <img 
            alt="imgPromocao3"
              src={promocoes3 ? promocoes3.url : null}/>
            <a target="_blank" href={conteudo? promocoes3.promocao ? promocoes3.promocao.link : null: null} style={{borderRadius: 7}} className="btn waves-effect waves-light red" type="submit" name="action">
              Ver Mais
            </a>
          </div>
          <ul className="indicators"><li className="indicator-item red"></li><li className="indicator-item red"></li><li className="indicator-item red"></li></ul>
        </div>
      

      </div>
    </div>
  );
}
