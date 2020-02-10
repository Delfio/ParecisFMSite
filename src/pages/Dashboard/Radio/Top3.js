import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup'
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform'
import { toast } from 'react-toastify';

// import { Container } from './styles';

const schema = Yup.object().shape({
  artista: Yup.string().required('Favor insira um nome'),
  musica: Yup.string().required('Favor insira o nome da música'),
  link: Yup.string().url('Insira um link válido').required('Insira um link de incorporação')
})


export default function Top3(props) {
  const profile = useSelector(state => state.user.profile);
  const [top3, setTop3] = useState([])

  useEffect(() => {
    loadTop3()
  }, []);

  async function loadTop3() {
    const response = await api.get(`top3/${profile.radio_id}`);

    setTop3(response.data);
  }

  async function handleCadastrarTop3(data){
    try {
       const cadastrou = await api.post(`/top3/${profile.radio_id}`, {
        ...data
       })
       toast.success('Cadatrado com sucesso')

      const response = await api.get(`top3/${profile.radio_id}`);
      setTop3(response.data);

      const cadastrouID = cadastrou.data

      props.history.push(`uploadImageTop3/${cadastrouID.id}`)
    } catch (err) {
      toast.error('Algo deu errado')
  
    }
  };

  async function handlDelete(data){
    try {
      await api.delete(`/top3/${data}`);

      loadTop3();
    } catch (err) {

    }
  }

  return (
    <div className="container">
    <div className="row">
      <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
        <Form style={{color: 'red'}} schema={schema} onSubmit={handleCadastrarTop3}>
          <div className="col s12 hide-on-small-only">
            <h5 className="grey-text">Cadastre novos TOP3</h5>
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="artista"
              id="artista"
              type="text"
              className="validate"
            />
            <label htmlFor="name">Nome do artista</label>
          </div>
          <div className="input-field col l6 s6">
            <Input
              name="musica"
              id="musica"
              type="text"
              className="validate"
            />
            <label htmlFor="name">Música</label>
          </div>
          <div className="input-field col s12">
            <Input
              name="link"
              id="link"
              type="text"
              className="validate"
              placeholder="https://www.youtube.com/embed/zt4s9vbjpeU?list=RDzt4s9vbjpeU"
            />
            <label htmlFor="name">Link de Incorporação</label>
          </div>
          <div className="col s12">
            <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
              <i className="material-icons right">send</i>
            </button>
          </div>
        </Form>

        <br/>
        <div className="row">
          <div className="col s12">
            <br/>
          <h5>Top3 Cadastrados</h5>
          <table>
        <thead>
          <tr>
              <th>Artista</th>
              <th>Musica</th>
              <th>Imagem</th>
              <th>Atualizar</th>
              <th>Deletar</th>
          </tr>
        </thead>

        <tbody>
        {top3.map(el => (
          <tr key={el.id}>
            <td>{el.artista}</td>
            <td>{el.musica}</td>
            <td className="col s4">
              <img style={{maxWidth: 55}} className="responsive-img" src={el.image? el.image.url: 'null'} alt="imagemTOp3"/>
            </td>
            <td>
              <a href={`/attTop3/${el.id}`}>Atualziar</a>
            </td>
            <td>
              <button onClick={() => handlDelete(el.id)} className="btn-floating waves-effect waves-light red"><i className="material-icons">delete</i></button>
            </td>
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
