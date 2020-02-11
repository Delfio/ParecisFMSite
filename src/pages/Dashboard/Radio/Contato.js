import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup'
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform'
import { toast } from 'react-toastify';

// import { Container } from './styles';

const schema = Yup.object().shape({
  link: Yup.string().required('Favor insira um nome').url('Insira uma url Válida')
})

export default function Contatos() {
  const profile = useSelector(state => state.user.profile);
  const [tipo, setTipo] = useState(1);
  const [contato, setContatos] = useState([]);
  const [links, setLinks] = useState({})

  useEffect(() => {
    loadContatos();
    loadLinks();
  }, [])

  async function loadContatos(){
    const response = await api.get(`contato`);
    setContatos(response.data);
  }

  async function loadLinks(){
    try {

      const response = await api.get(`radio/${profile.radio_id}`);

      const{ facebook, instagram, whatsapp } = response.data;

      setLinks({facebook, instagram, whatsapp});

    } catch(err){

    }
  }

  async function handleCadastreContato(data){
    try {
       await api.post(`/contato/${profile.radio_id}`, {
        tipo: parseInt(tipo),
        link: data.link
       })
       toast.success('Cadatrado com sucesso')
  
       loadContatos();
    } catch (err) {
      toast.error('Algo deu errado')
  
    }
  }

  async function handleAttLinks(data){
    try {

      await api.put(`radio/${profile.radio_id}`, {
        ...data
      })
      toast.success('Links Atualizados com sucesso')
    } catch (err) {
      toast.error('Algo deu errado')
    }
  }

  return (
    <div className="container">
    <div className="row">
      <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
        <h4>Cadastre contatos promocionais e contatos normais</h4>
        <h6> * Contatos promocionais irão ser exibidos nas paginas de detalhamento das promoções</h6>
        <h6> * Contatos normais irão ser exibidos no rodapé referente da rádio</h6>
        <Form style={{color: 'red', marginTop: 20}} schema={schema} onSubmit={handleCadastreContato}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Cadastrar Contatos</h5>
          </div>
          <div className="input-field col l12 s12">
            <Input
              name="link"
              id="link"
              type="text"
              className="validate"
            />
            <label htmlFor="name">Link</label>
          </div>
            <div className="row">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="col s12"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3">
                <label>
                  <Input
                    value="1"
                    name="facebook1"
                    id="facebook"
                    type="radio"
                    className="validate"
                    checked={tipo == 1}
                    onChange={e => setTipo(1)}
                  />
                  <span className="blue-text">Facebook</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3">
                <label>
                  <Input
                    value="1"
                    name="instagram2"
                    id="instagram"
                    type="radio"
                    className="validate"
                    checked={tipo == 2}
                    onChange={e => setTipo(2)}
                  />
                  <span className="blue-text">Instagram</span>
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 15,
                }}
                className="col s3">
                <label>
                  <Input
                    value="1"
                    name="whats3"
                    id="whats"
                    type="radio"
                    className="validate"
                    checked={tipo == 3}
                    onChange={e => setTipo(3)}
                  />
                  <span className="blue-text">Whatsapp</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col s12">
            <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>
        <br/>
        <Form onSubmit={handleAttLinks} initialData={links}>
          <div style={{marginTop: 35}} className="row">
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Cadastrar links promocionais</h5>
            </div>
            <div className="input-field col l6 s12">
              <Input
                name="facebook"
                id="facebook"
                type="text"
                className="validate"
              />
              <span>Facebook</span>
            </div>
            <div className="input-field col l6 s12">
              <Input
                name="instagram"
                id="instagram"
                type="text"
                className="validate"
              />
              <span>Instagram</span>
            </div>
            <div className="input-field col l12 s12">
              <Input
                name="whatsapp"
                id="whats"
                type="text"
                className="validate"
              />
              <span>Whatsapp</span>
            </div>
            <div className="col s12">
            <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Atualizar
              <i className="material-icons right">send</i>
            </button>
          </div>
          </div>
        </Form>
        <div className="row">
          <div className="col s12 center">
          <h4>Contato</h4>
            <table>
              <thead>
                  <tr>
                    <th>Link</th>
                    <th>Data de cadasrto</th>
                    <th>Rede social</th>
                  </tr>
                </thead>

                <tbody>
                  {contato.map(el => (
                    <tr key={el.id}>
                      <td>{el.link}</td>
                      <td>{el.createdAt}</td>
                      <td>{el.tipo == 1 ? 'Facebook'
                        : el.tipo == 2 ? 'Instagram'
                        : el.tipo == 3 ? 'Outro'
                        : null
                      }</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
