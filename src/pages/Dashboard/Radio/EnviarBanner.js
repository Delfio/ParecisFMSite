import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import api from "../../../services/api";

// import { Container } from './styles';
const secret = process.env.REACT_APP_KEY_SECRET_KEY_WITH_A_AUTHENTICATION;

export default function EnviarBanner(props) {
  const idAdm = props.match.params.id;
  const profile = useSelector(state => state.user.profile);

  const getUploadParams = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append("fileField", file);

      const data = new FormData();

      data.append("file", file);

      if (idAdm && profile.config === secret) {
        await api.post(`banner/${idAdm}/1`, data);
      } else {
        await api.post(`banner/${profile.radio_id}/1`, data);
      }

      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      toast.success("imagem cadastrada com sucesso");

      return { url: "https://httpbin.org/post", body };
    } catch (err) {
      toast.error("Algo deu errado! ");
    }
  };

  const getUploadParamsMobile = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append("fileField", file);

      const data = new FormData();

      data.append("file", file);

      if (idAdm && profile.config === secret) {
        await api.post(`banner/${idAdm}/2`, data);
      } else {
        await api.post(`banner/${profile.radio_id}/2`, data);
      }
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);

      toast.success("imagem cadastrada com sucesso");

      return { url: "https://httpbin.org/post", body };
    } catch (err) {
      toast.error("Algo deu errado! ");
    }
  };

  const getUploadParamsIcon = async ({ file, meta }) => {
    try {
      const body = new FormData();
      body.append("fileField", file);

      const data = new FormData();

      data.append("file", file);

      const iconCad = await api.post(`/icon`, data);
      // const response = await api.get(`principal/${id}`);

      // const { imagens } = response.data;
      // setImages(imagens);
      await relationIconInRadio(iconCad.data.id);

      return { url: "https://httpbin.org/post", body };
    } catch (err) {
      toast.error("Algo deu errado! ");
    }
  };

  async function relationIconInRadio(iconId) {
    try {
      if (idAdm && profile.config === secret) {
        await api.put(`radio/${idAdm}`, {
          icon_id: iconId
        });
      } else {
        await api.put(`radio/${profile.radio_id}`, {
          icon_id: iconId
        });
      }

      toast.success("Icone Cadastrado com sucesso");

      return true;
    } catch (err) {
      toast.error("Algo deu errado! ");

      return false;
    }
  }

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
      <br />
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
      <br />
      <div className="row">
        <div className="col s12 m10 offset-m1 xl12 offset-xl1 left-align">
          <div className="col s12 center">
            <h4>Cadastrar Icone da Rádio</h4>
            <p> Arquivos SVG </p>
            <p> Tamanho máximo dos arquivos '1mb' </p>
          </div>
          <Dropzone
            // disabled={!logo}
            getUploadParams={getUploadParamsIcon}
            // preview="Adicionar imagem"
            inputContent="Selecione ou arraste o icone"
            submitButtonContent="Enviar"
            accept="image/*"
            // maxSizeBytes={4048 * 4048}
            maxFiles={1}
          />
        </div>
      </div>
    </div>
  );
}
