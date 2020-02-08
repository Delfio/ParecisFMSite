import React, {useEffect, useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';
// import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const [perfil, setPerfil] = useState({})
  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const response = await api.get(`users/${profile.id}`);

    setPerfil(response.data);
  };

  async function getUploadParams(data){

  }

  return (
    <div className="container">
      <div className="row">
        <center style={{marginTop: 35}}>
          <img style={{border: '2px solid #eee'}} src='https://api.adorable.io/avatars/285/abott@adorable.png' alt="" class="circle responsive-img" />
        </center>
        <div style={{display: 'flex', justifyContent: 'center'}} className="col s12">
        <Dropzone
              // disabled={!logo}
              getUploadParams={getUploadParams}
              // preview="Adicionar imagem"
              inputContent="Selecione ou arraste sua foto de perfil"
              submitButtonContent="Enviar"
              accept="image/*"
              maxSizeBytes={2024 * 2024}
              maxFiles={1}
            />
        </div>
        <div style={{marginTop: 35}} className="col s12">
          <h4>Informações Cadastrais</h4>
          <Form initialData={perfil}>
            <div className="row">
              <div class="input-field col s6">
                <Input name="name" id="name" type="text" class="validate" />
                <span>Nome</span>
              </div>
              <div class="input-field col s6">
                <Input name="email" id="email" type="email" class="validate" />
                <span>Email</span>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
