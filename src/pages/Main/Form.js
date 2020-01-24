import React from 'react';

import logoSuaMusica from '../../assets/pecaSuaMusica.svg'

import { Container, Img, DivForm, Input, Button } from './styles';

import { Form, Input as RocketInput } from '@rocketseat/unform';

export default function PecaSuaMusica() {

  async function handleSubmit(data){
    console.log(data)
  }

  return (
    <div className="col s12 grey lighten-5">
      <div className="row">
        <Container style={{display: 'flex', alignItems: 'center'}} className="container">
          <div className="col l3">
            <div className="col s12">
              <Img className="responsive-img" src={logoSuaMusica} alt="Sua Musica"/>
            </div>
          </div>
          <DivForm className="col l9">
            <h4 className="red-text">Peça sua Música</h4>
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col s6">
                  <label htmlFor="artista">Artista</label>
                  <Input id="artista" placeholder="Luan Santana" type="text" name="artista"/>
                </div>
                <div className="col s6">
                  <label htmlFor="musica">Musica</label>
                  <Input id="musica" placeholder="Meteoro da Paixão" type="text" name="musica"/>
                </div>
                <div className="col s10">
                  <label htmlFor="seunome">Seu Nome</label>
                  <Input id="seunome" placeholder="João Henrrique" type="text" name="nome"/>
                </div>
                <div className="col s2">
                  <label htmlFor="idade">Sua Idade</label>
                  <Input id="idade" placeholder="22" type="number" name="idade"/>
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
  );
}
