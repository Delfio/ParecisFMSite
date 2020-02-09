import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Container } from './styles';

export default function Promocoes(props) {

  const {id} = props;
  const [conteudo, setConteudo] = useState([{}]);

  useEffect(() => {
    async function loadPromocoes(){
      const response = await api.get(`/promocao/${id}`);
      const {data} = response;
      setConteudo(data);

    }
    loadPromocoes();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="row grey lighten-5">
      <div id="promocoes" className={`container`}>
        <h4 style={{fontWeight: 900, padding: 15}} className="center-align grey-text">Promoções</h4>
        <Slider className="col s12" {...settings}>
          {conteudo.map(el => (
           <div className="col s3 center-align">
            <img style={{maxWidth: 300}} src={el.imagem ? el.imagem.url : null} className="responsive-img" alt="imgPromocao"/>
           </div>

          ))}
        </Slider>
      </div>
    </div>
  );
}
