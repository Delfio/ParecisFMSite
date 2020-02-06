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
import {connect, disconnect} from '../../services/socket';

// import { Container } from './styles';

export default function Main(props) {
  const { id } = props.match.params;
  const [date, setDate] = useState(new Date())
  //banner
  const [banner1, setBanner1] = useState([]);
  const [banner2, setBanner2] = useState([]);
  //link
  const[link, setLink] = useState({});
  //top3
  const[top3, setTop3] = useState([]);
  //todas as programações
  const[allProgramacao, setAllProgramacao] = useState([]);

  function stupWebSocket() {
    connect();
  }

  useEffect(() => {
    async function loadDados() {
      try {
        const response = await api.get(`/principal/${id}`, {
          params: {data: date}
        })
    
        const {data} = response;
  
        data.map(el => {
          setBanner1(el.banner1)
          setBanner2(el.banner2)
          setLink(el.link)
          setTop3(el.top3)
          setAllProgramacao(el.allprogramacao)
        })
      } catch (err) {
        console.log(err.message)
      }
    }
    loadDados();
    stupWebSocket();
  }, []);

  return (
    <>
      <Menu link={link} />
      <ButtonParecis />
      <Banner banner1={banner1} banner2={banner2} />
      <Radio link={link}/>
      <ProgramacaoAtual />
      <Form id={id}/>
      <MaisPedidas top3={top3} id={id} />
      <Promocoes id={id} />
      <Programacao id={id} />
      <Footer />
    </>
  );
}
