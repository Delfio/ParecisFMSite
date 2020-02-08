import React, { useEffect, useState } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import api from '../../../services/api';

// import { Container } from './styles';

export default function Radio(props) {
  const {id} = props.match.params;

  const getUploadParams = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append('fileField', file);

      const data = new FormData();

      data.append('file', file);

      await api.post(`bannerPromocao/${id}`, data);
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      // toast.success('imagem cadastrada com sucesso');

      return { url: 'https://httpbin.org/post', body };
    } catch (err) {
      // toast.error('Algo deu errado! ');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div style={{marginTop: 55}} className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <h5>Envie uma imagem principal para a promoção</h5>
          <p> Proporções ideias: 1000 x 1000</p>
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
  );
}
