import React, {useEffect, useState} from 'react';

import Banner from './BannerTop';
import ProgramacaoAtual from './ProgramacaoAtual';
import Form from './Form';
import MaisPedidas from './AsMaisPedidas';
import Promocoes from './Promocoes';

import Radio from '../../components/RadioMobile';
import Menu from '../../components/MenuDefault';
import Footer from '../../components/Footer';
import ButtonParecis from '../../components/ButtonParecis';

import Programacao from './Programacao';

import api from '../../services/api';

// import { Container } from './styles';

export default function Main(props) {
  const { id } = props.match.params;
  const [date, setDate] = useState(new Date())
  //banner
  const [banner1, setBanner1] = useState([]);
  const [banner2, setBanner2] = useState([]);
  //links
  const[link, setLink] = useState({});
  const[facebook, setFacebook] = useState({});
  const[instagram, setInstagram] = useState({});
  const[whats, setWhats] = useState({});
  const[cidade, setCidade] = useState({});
  const[name, setName] = useState({});
  //top3
  const[top3, setTop3] = useState([]);
  //todas as programações
  const[programacao, setProgramacao] = useState([]);

  useEffect(() => {
    async function loadDados() {
      try {
        const response = await api.get(`/principal/${id}`, {
          params: {data: date}
        })
    
        const {data} = response;
  
        data.map(el => {
          setFacebook(el.facebook)
          setInstagram(el.instagram)
          setWhats(el.whatsapp)
          setName(el.name)
          setCidade(el.cidade ? el.cidade.nome : null)
          setBanner1(el.banner1)
          setBanner2(el.banner2)
          setLink(el.link)
          setTop3(el.top3)
          setProgramacao(el.programacao)
        })
      } catch (err) {
        console.log(err.message)
      }
    }
    loadDados();
  }, [date, id]);

  return (
    <>
      <Menu link={link} />
      <ButtonParecis />
      <Banner banner1={banner1} banner2={banner2} />
      <Radio link={link}/>
      <ProgramacaoAtual 
        link={link} 
        facebook={facebook} 
        instagram={instagram} 
        whats={whats}
        cidade={cidade}
        programacao={programacao}
        name={name}
      />
      <Form id={id}/>
      <MaisPedidas top3={top3} id={id} />
      <Promocoes id={id} />
      <Programacao id={id} />
      <Footer 
        facebook={facebook} 
        instagram={instagram} 
        whats={whats} 
      />
    </>
  );
}
