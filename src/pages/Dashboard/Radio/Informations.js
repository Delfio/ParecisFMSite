import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup'
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform'
import { toast } from 'react-toastify';
// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Favor insira um nome'),
  link: Yup.string().url('Insira uma URL válida').required('Favor insira um link')
})

export default function Informations() {
  const profile = useSelector(state => state.user.profile);
  const [radio, setRadio] = useState({});

  const [banner1, setBanner1] = useState([])
  const [banner2, setBanner2] = useState([])

  const [contato, setContato] = useState([]);

  const [icon, setIcon] = useState({});

  useEffect(() => {
    loadInfosRadio();
  }, []);

  async function loadInfosRadio() {
    try {
      const response = await api.get(`radio/${profile.radio_id}`);
      
      setRadio(response.data);
      setBanner1(response.data.banner1)
      setBanner2(response.data.banner2)
      setIcon(response.data.icon)
      setContato(response.data.contato)
    } catch (err){

    }
  }

  async function handleUpdateInfoRadio(data){
    try {
       await api.put(`/radio/${profile.radio_id}`, {
        ...data
       })
       toast.success('Atualizado com sucesso')
    } catch (err) {
      toast.error('Algo deu errado')

    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 50}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h3>Rádio: {radio.name} </h3>
          <br/>
          <div className="row">
            <Form style={{color: 'red'}} schema={schema} onSubmit={handleUpdateInfoRadio} initialData={radio}>
              <div className="col s12 hide-on-small-only">
                <h5 className="grey-text">Atualize os campos abaixo</h5>
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="name"
                  id="name"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="input-field col l6 s6">
                <Input
                  name="link"
                  id="link"
                  type="text"
                  className="validate"
                />
              </div>
              <div className="col s12">
                <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Atualizar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </Form>
            <div className="center">
              <h5>Banner Destktop</h5>
              {banner1? banner1.map(el => (
                <div key={el.id} className="col s12 l12 m10 center">
                  <img className="responsive-img" alt="banner1" src={el.url ? el.url : null} />
                </div>
              )) : null}
              <div className="row">
                <div className="col s12 m12 l12">
                  <hr/>
                </div>
              </div>
              <br/>
              <h5>Banner Mobile</h5>
              {banner2? banner2.map(el => (
                <div key={el.id} className="col s10 l12 m10">
                  <img className="responsive-img" alt="banner2" src={el.url ? el.url : null} />
                </div>
              )) :null}
            </div>
            <br/>
            <div className="row">
              <h5 className="center">Icone</h5>
              <div className="col s10 l12 m10">
                <img style={{maxHeight: 150}} className="responsive-img" src={icon ? icon.url : null} alt="Icone"/>
              </div>
            </div>
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
                      {contato? contato.map(el => (
                        <tr key={el.id}>
                          <td>{el.link}</td>
                          <td>{el.createdAt}</td>
                          <td>{el.tipo == 1 ? 'Facebook'
                            : el.tipo == 2 ? 'Instagram'
                            : el.tipo == 3 ? 'Outro'
                            : null
                          }</td>
                        </tr>
                      )): null}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
