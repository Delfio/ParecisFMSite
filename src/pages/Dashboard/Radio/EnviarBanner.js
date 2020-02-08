import React, { useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { useSelector } from 'react-redux';

import { toast } from 'materialize-css';
import api from '../../../services/api';

// import { Container } from './styles';

export default function EnviarBanner() {
  const profile = useSelector(state => state.user.profile);

  const [banner1, setBanner1] = useState([])

  const getUploadParams = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append('fileField', file);

      const data = new FormData();

      data.append('file', file);

      await api.post(`banner/${profile.radio_id}/1`, data);
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      toast.success('imagem cadastrada com sucesso');

      return { url: 'https://httpbin.org/post', body };
    } catch (err) {
      toast.error('Algo deu errado! ');
    }
  };

  const getUploadParamsMobile = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append('fileField', file);

      const data = new FormData();

      data.append('file', file);

      await api.post(`banner/${profile.radio_id}/2`, data);
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      toast.success('imagem cadastrada com sucesso');

      return { url: 'https://httpbin.org/post', body };
    } catch (err) {
      toast.error('Algo deu errado! ');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <div className="col s12 center">
            <h4>Enviar Banner para desktop</h4>
            <p> 1500x340 </p>
          </div>
          <Dropzone
            // disabled={!logo}
            getUploadParams={getUploadParams}
            // preview="Adicionar imagem"
            inputContent="Selecione ou arraste o banner"
            submitButtonContent="Enviar"
            accept="image/*"
            maxSizeBytes={2024 * 2024}
            maxFiles={1}
          />
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <div className="col s12 center">
            <h4>Enviar Banner para mobile</h4>
            <p> 1500x340 </p>
          </div>
          <Dropzone
            // disabled={!logo}
            getUploadParams={getUploadParamsMobile}
            // preview="Adicionar imagem"
            inputContent="Selecione ou arraste o banner"
            submitButtonContent="Enviar"
            accept="image/*"
            maxSizeBytes={2024 * 2024}
            maxFiles={1}
          />
        </div>
      </div>
    </div>
  );
}
