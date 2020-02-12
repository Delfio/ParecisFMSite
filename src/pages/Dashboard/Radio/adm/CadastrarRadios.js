import React, { useEffect } from 'react';
import * as Yup from 'yup'
import { Form, Input } from '@rocketseat/unform'
import api from '../../../../services/api';
// import { Container } from './styles';
import Selected from '../../Programa/Selected'
import { toast } from 'react-toastify';

const schemas = Yup.object().shape({
  name: Yup.string().required('Insira um nome para a rádio'),
  link: Yup.string().url('Formato inválido').required('Insira o link da stream'),
  facebook: Yup.string().url('Formato inválido').required('Insira um facebook'),
  instagram: Yup.string().url('Formato inválido').required('Insira um instagram'),
  whatsapp: Yup.string().url('Formato inválido').required('Insira um link para o whatsapp'),
  cidade: Yup.string('Selecione a cidade').required('Selecione a cidade')
})

export default function CadastrarRadios() {

  useEffect(() => {
    loadCitys();
  }, [])

  const citys = [];

  async function loadCitys() {
    try {
      const response = await api.get('cidades')

      const {data} = response;
      data.map(el => citys.push({id: el.id, title: el.nome}))
    } catch(err){

    }
  };

  async function handleNewRadio(data){
    try {
      await api.post('radio', {
        name: data.name,
        cidade: parseInt(data.cidade),
        facebook: data.facebook,
        instagram: data.instagram,
        whatsapp: data.whatsapp,
        link: data.link
      });

      toast.success('Radio cadastrada com sucesso')
    } catch(err) {
      toast.error('Ocorreu um erro ao cadastrar')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <Form style={{color: 'red'}} schema={schemas} onSubmit={handleNewRadio}>
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Cadastre novas rádios</h5>
            </div>
            <div className="row">
              <div className="input-field col l6 s6">
                <Input
                  name="name"
                  id="name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Nome da rádio* </label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="link"
                  id="link"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Link do stream* </label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="facebook"
                  id="facebook"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Link do facebook</label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="instagram"
                  id="instagram"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Link do instagram</label>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="whatsapp"
                  id="whatsapp"
                  type="text"
                  className="validate"
                />
                <label htmlFor="name">Link do whatsapp</label>
              </div>
              <div className="input-field col l6 s6">
                <Selected 
                  name="cidade" 
                  label="Selecione a cidade *" 
                  options={citys}
                />
              </div>
              <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
