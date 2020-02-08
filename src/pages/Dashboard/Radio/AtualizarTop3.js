import React, { useEffect, useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import * as Yup from 'yup'
import api from '../../../services/api';
import { Form, Input } from '@rocketseat/unform'
import { toast } from 'react-toastify';

// import { Container } from './styles';
const schema = Yup.object().shape({
  artista: Yup.string().required('Favor insira um nome'),
  musica: Yup.string().required('Favor insira o nome da música')
})

export default function AtualizarTop3(props) {
  const { id } = props.match.params
  const [top3, setTop3] = useState({});

  useEffect(() => {
    loadTop3();
  }, [])

  async function loadTop3() {
    const response = await api.get(`top3Att/${id}`);

    setTop3(response.data)
  }

  async function handleUpdateTop3(data){
    try {
      await api.put(`top3/${id}`, {
        ...data
      })

      toast.success('Top3 Atualizado com sucesso')
    } catch (err){
      toast.error('Algo Deu errado')
    }
  };

  async function getUploadParams({ file, meta }){
    try {
      const body = new FormData();
      body.append('fileField', file);

      const data = new FormData();

      data.append('file', file);

      const resposne  = await api.post(`imageTop3/`, data);

      const defu = resposne.data.id;

      await api.put(`top3/${id}`, {
        imagem_id: defu
      })
      loadTop3();
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      toast.success('imagem Atualizada com sucesso');

      return { url: 'https://httpbin.org/post', body };
    } catch (err) {
      toast.error('Algo deu errado! ');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <Form initialData={top3} style={{color: 'red'}} schema={schema} onSubmit={handleUpdateTop3}>
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Atualizar Informações</h5>
            </div>
            <div className="input-field col l6 s6">
              <Input
                name="artista"
                id="artista"
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col l6 s6">
              <Input
                name="musica"
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
          <br/>
          <div className="row">
            <br/>
            <div className="col s12">
              <br/>
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m6 l6">
              <div className="card">
                <div className="card-image">
                  <img alt="imgTop3" src={top3.image? top3.image.url: null} />
                  <span className="card-title">Imagem da promoção</span>
                </div>
              </div>
            </div>
            <div className="col s6 m6 l6">
              <h5>Atualizar Imagem</h5>
              <Dropzone
                // disabled={!logo}
                getUploadParams={getUploadParams}
                // preview="Adicionar imagem"
                inputContent="Selecione ou arraste a Arte"
                submitButtonContent="Enviar"
                accept="image/*"
                maxSizeBytes={2024 * 2024}
                maxFiles={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
