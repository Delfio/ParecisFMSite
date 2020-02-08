import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import api from '../../../services/api';
import { toast } from 'react-toastify';
// import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Favor insira um nome'),
  link: Yup.string().url('Insira uma URL válida').required('Favor insira um link')
})

export default function CadastrarPromocoes(props) {
  const profile = useSelector(state => state.user.profile);
  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    loadPromotions();
  }, []);

  async function loadPromotions() {
    const response = await api.get(`promocao/${profile.radio_id}`);
    setPromotions(response.data);
  }

  async function handleCadastrarPromotion(data){
    const response = await api.post(`/promocao/${profile.radio_id}`, {
      ...data
    });
    const promocaoCadastrada = response.data;
    toast.success('Promoção cadastrada com sucesso')
    await props.history.push(`/cadImgPromotion/${promocaoCadastrada.id}`);

  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <Form style={{color: 'red'}} schema={schema} onSubmit={handleCadastrarPromotion}>
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Cadastre uma nova promoção</h5>
            </div>
            <div className="input-field col l6 s6">
              <Input
                name="nome"
                id="name"
                type="text"
                className="validate"
              />
              <label htmlFor="name">Nome</label>
            </div>
            <div className="input-field col l6 s6">
              <Input
                name="link"
                id="link"
                type="text"
                className="validate"
              />
              <label htmlFor="name">Link</label>

            </div>
            <div className="col s12">
              <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                <i className="material-icons right">send</i>
              </button>
            </div>
          </Form>

          <div className="row">
            <div className="col s12">
            <br/>
            <hr/>
            <h4>Promoções já cadastradas</h4>
            <ul className="row">
              {promotions.map(el => (
                <li key={el.id} className="col s12">
                  <div className="col s6">
                    <img src={el.url} alt="imgPromotion"/>
                  </div>
                </li>
              ))}
              
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
