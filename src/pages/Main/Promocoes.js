import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { Container } from './styles';

export default function Promocoes(props) {

  const {id} = props;
  const [conteudo, setConteudo] = useState([]);

  useEffect(() => {
    async function loadPromocoes(){
      const response = await api.get(`/promocao/${id}`);
      const {data} = response;

      if(!data){
        setConteudo(false);
      }
      setConteudo(data);

    }
    loadPromocoes();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: conteudo.length <= 2 ? 1 : conteudo.length === 3 ? 2: conteudo.length > 3 ? 3 : 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="row grey lighten-5">
      <div id="promocoes" className={`container`}>
        <h4 style={{fontWeight: 900, padding: 15}} className="center-align grey-text">Promoções</h4>
        {conteudo? (
          <Slider className="col s12" {...settings}>
            {conteudo.map(el => (
              <a key={el.id} href={`/promocao/${el.id}`}>
                <div  className="col s3 center-align">
                  <img style={{maxWidth: 300}} src={el.imagem ? el.imagem.url : null} className="responsive-img" alt="imgPromocao"/>
                </div>
              </a>
            ))}
          </Slider>
        ): null}
      </div>
    </div>
  );
}
