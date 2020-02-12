
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import logoSuaMusica from '../../assets/pecaSuaMusica.svg'

import { Container, Img, DivForm, Input, Button } from './styles';

import { Form, Input as RocketInput } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import api from '../../services/api'

const schema = Yup.object().shape({
  artista: Yup.string().required('Favor Insira um artista'),
  musica: Yup.string().required('Favor insira a música desejada'),
  nome: Yup.string().required('Insira seu nome'),
  idade: Yup.string().required('Idade Obrigatória'),
  genero: Yup.number(),
  telefone: Yup.string().required('Insira seu telefone').min(9, 'Minimo de 9 números').max(13, 'Máximo de 13 Números')

})

export default function PecaSuaMusica({id}) {

  const[tipo, setTipo] = useState('feminino');

  async function handleSubmit(data){
    try {
      await api.post(`/musica/${id}`, {
        nome: data.nome,
        idade: data.idade,
        telefone: data.telefone,
        musica: data.musica,
        artista: data.artista,
        genero: tipo,
        data: new Date()
      });
      toast.success('Seu pedido foi enviado com sucesso!')
    } catch (err) {
      toast.error('Ocorreu um erro')
    }
  }

  return (
    <div className="row">
      <div className="col s12 grey lighten-3">
        <div id="suamusica" className="row">
          <Container style={{display: 'flex', alignItems: 'center'}} className="container">
            <div className="col l3 hide-on-small-only">
              <div className="col s12">
                <Img className="responsive-img" src={logoSuaMusica} alt="Sua Musica"/>
              </div>
            </div>
            <DivForm className="col l9 s12">
              <h4 className="red-text">Peça sua Música</h4>
              <Form style={{color: 'red'}} schema={schema} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col s6">
                    <label htmlFor="artista">Artista</label>
                    <Input id="artista" placeholder="Luan Santana" type="text" name="artista"/>
                  </div>
                  <div className="col s6">
                    <label htmlFor="musica">Musica</label>
                    <Input id="musica" placeholder="Meteoro da Paixão" type="text" name="musica"/>
                  </div>
                  <div style={{marginTop: 5}} className="col s12 l10">
                    <label htmlFor="seunome">Seu Nome</label>
                    <Input id="seunome" placeholder="João Henrrique" type="text" name="nome"/>
                  </div>
                  <div style={{marginTop: 5}} className="col l2 s3">
                    <label htmlFor="idade">Sua Idade</label>
                    <Input id="idade" placeholder="22" type="number" name="idade"/>
                  </div>

                  <div className="col l6 m10 s9">
                    <label htmlFor="telefone">Seu Telefone</label>
                    <Input id="telefone" placeholder="69 91234-5678" type="number" name="telefone"/>
                  </div>

                  <div style={{marginTop:5}} className="col l6 s9">
                    <h6 className="grey-text" style={{fontWeight: 900}}>GÊNERO</h6>
                    <div 
                      style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                      className="col s4">
                      <label>
                      <RocketInput
                        value="2"
                        name="sexo1" 
                        id="destaque" 
                        type="radio" 
                        className="validate" 
                        checked={tipo === 'feminino' ? true : false} 
                        onChange={e => setTipo('feminino')}
                        />
                        <span style={{fontWeight: 900}} className="grey-text">Feminino</span>
                      </label>
                      <label>
                      <RocketInput
                        value="1"
                        name="sexo2" 
                        id="destaque" 
                        type="radio" 
                        className="validate" 
                        checked={tipo === 'masculino' ? true : false} 
                        onChange={e => setTipo('masculino')}
                        />
                        <span style={{fontWeight: 900}} className="grey-text">Masculino</span>
                      </label>
                    </div>
                  </div>

                  <div className="col s12">
                    <Button className="btn waves-effect red-light red darken-4" type="submit" name="action">Enviar
                      <i className="material-icons right">cloud_upload</i>
                    </Button>
                  </div>
                </div>
              </Form>
            </DivForm>
          </Container>
        </div>
      </div>
    </div>
  );
}
