import React, {useState} from 'react';

// import api from '../../services/api'

// import {toast} from 'react-toastify';

import { SectionIMG, Ul, OuvirButton } from './styles';
import { Link } from 'react-router-dom';

export default function AsMaisPedidas({top3, id: RadioID}) {
  const infos = top3;

  // const [date, setDate] = useState(new Date());

  // async function handleMussic(id) {
  //   try {
  //     const response = await api.post(`/musica/${RadioID}/${id}`, {
  //       data_id: date
  //     })
  //     toast.success('Seu pedido foi enviado com sucesso')
  //   } catch (err) {
  //     toast.error('Ocorreu um problema!')
  //     console.log(err)
  //   }
  // };

  return (
    <div className="row">
      <div id="maispedidas" className="container">
        <h4 style={{fontWeight: 900}} className="center-align grey-text">AS MAIS PEDIDAS - TOP 3</h4>
        <Ul className="col s12">
          {infos.map(el => (
            <li key={el.id} className="col l4 s12 center-align">
            <SectionIMG
              bg={el.image? el.image.url : null}
              >
               <div className="row">
                <h5 className="white-text">{el.artista}</h5>
                <p>{el.musica}</p>
               </div>
              </SectionIMG>
              <Link to={`/top3/${el.id}/escutar/${RadioID}`}>
                <OuvirButton
                  className="btn waves-effect waves-light red darken-3"
                  type="submit"
                  name="action"
                    >Ouvir
                </OuvirButton>
              </Link>
          </li>
          ))}
        </Ul>
      </div>
    </div>
  );
}
