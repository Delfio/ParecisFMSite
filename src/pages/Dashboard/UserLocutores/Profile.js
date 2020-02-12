import React, {useEffect, useState} from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileRequest } from '../../../store/modules/user/actions'
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';
import { toast } from 'react-toastify';
// import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const [perfil, setPerfil] = useState({})
  const dispatch = useDispatch();

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const response = await api.get(`users/${profile.id}`);

    setPerfil(response.data);
  };

  async function getUploadParams({meta, file}){
    const body = new FormData();
      body.append('fileField', file);

      const data = new FormData();

      data.append('file', file);

      const response = await api.post(`imageProfile`, data);
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      const idDaFoto = response.data.id;

      await api.put('/profileLocutor', {
        user_id: profile.id,
        foto_locutor_id: idDaFoto
      });

      loadProfile();

      toast.success('imagem atualizada com sucesso');

      return { url: 'https://httpbin.org/post', body };
  };

  async function handleUpdateProfile(data){
    dispatch(updateProfileRequest(data))
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">

          <center style={{marginTop: 35}}>
            <img style={{border: '2px solid #eee', maxWidth: 450, maxHeight: 450}} 
              src={perfil.avatar? perfil.avatar.url : 'https://api.adorable.io/avatars/285/abott@adorable.png'}
             alt="ProfileFOTO" 
             className="circle responsive-img" />
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
            <Form initialData={perfil} onSubmit={handleUpdateProfile}>
              <div className="row">
                <div className="input-field col s6">
                  <Input name="name" id="name" type="text" className="validate" />
                  <span>Nome</span>
                </div>
                <div className="input-field col s6">
                  <Input name="email" id="email" type="email" className="validate" />
                  <span>Email</span>
                </div>
                <div className="input-field col s6">
                  <Input style={{WebkitAppearance: 'none', appearance: 'textfield'}} name="telefone" type="number" className="validate" />
                  <span>Telefone</span>
                </div>
                <div className="input-field col s6">
                  <Input name="cidade" id="cidade" type="text" className="validate" />
                  <span>Cidade</span>
                </div>

                <div className="input-field col s12">
                  <Input name="password" id="password" type="password" className="validate" />
                  <span>Nova Senha</span>
                </div>
                <div className="input-field col s12">
                  <Input name="confirmPassword" id="confirmPassword" type="password" className="validate" />
                  <span>Confirmar Nova Senha</span>
                </div>
                <div className="input-field col s12">
                  <Input name="oldPassword" id="oldPassword" type="password" className="validate" />
                  <span>Senha Atual</span>
                </div>
                <div className="col s12">
                  <button style={{zIndex: 0}} className="btn waves-effect waves-light" type="submit" name="action">Cadastrar
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </Form>
          </div>
      
        </div>
      </div>
    </div>
  );
}
