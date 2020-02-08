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
  const [contato, setContatos] = useState([])

  useEffect(() => {
    loadContatos()
  }, [])

  async function loadContatos(){
    const response = await api.get(`contato`);
    setContatos(response.data);
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

  return (
    <div className="container">
    <div className="row">
      <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
        <Form style={{color: 'red'}} schema={schema} onSubmit={handleCadastreContato}>
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
                    name="destaque"
                    id="destaque"
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
                    name="destaque"
                    id="destaque"
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
                    name="destaque"
                    id="destaque"
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
                      {console.log(contato)}
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
