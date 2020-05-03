import React, { useEffect, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Table from "./Table";
import api from "../../../services/api";
// import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import Selected from "./Selected";

const schema = Yup.object().shape({
  hora: Yup.string().required("Selecione uma hora"),
  dia: Yup.string().required("Selecione algum Dia"),
  locutor: Yup.string().required("Selecione algum Locutor"),
  programa: Yup.string().required("Selecione algum Programa")
});

export default function CadastrarProgramacao() {
  const [programas, setProgs] = useState(1);

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    loadLocutores();
    loadProgramas();
  }, []);

  const conteudo = [];

  const programa = [];

  async function loadLocutores() {
    const response = await api.get(`/locutores/${profile.radio_id}`);
    const { data } = response;

    data.map(el => conteudo.push({ id: el.id, title: el.name }));
  }

  async function loadProgramas() {
    const response = await api.get("/programa");
    const { data } = response;

    data.map(el => programa.push({ id: el.id, title: el.nome }));
  }

  async function loadProgramacao(data, { resetForm }) {
    console.log(data);
    try {
      const { hora } = data;
      console.log(hora);
      await api.post("/programacaos", {
        horario: hora,
        programa_id: data.programa,
        dia_id: data.dia,
        user_id: data.locutor,
        radio_id: profile.radio_id
      });

      loadProgramas();
      resetForm();
      setProgs(programas + 1);
      toast.success("Programação cadastrada com Sucesso");
    } catch (err) {
      toast.error("Algo deu errado! Confira seus dados");
    }
  }

  const dias = [
    { id: 1, title: "Domingo" },
    { id: 2, title: "Segunda" },
    { id: 3, title: "Terça" },
    { id: 4, title: "Quarta" },
    { id: 5, title: "Quinta" },
    { id: 6, title: "Sexta" },
    { id: 7, title: "Sábado" }
  ];

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ marginTop: 50 }}
          className="col s12 m10 offset-m1 xl12 offset-xl1 left-align"
        >
          <h3>Progamações</h3>
          <p>Insira os horários separandos por espaço '15:00 16:00 17:30'</p>

          <div className="row">
            <Form
              style={{ color: "red" }}
              schema={schema}
              onSubmit={loadProgramacao}
            >
              <div className="row">
                <div className="col l6 s12">
                  <Selected name="dia" label="Selecione o Dia" options={dias} />
                </div>
                <div className="col l6 s12">
                  <Selected
                    name="locutor"
                    label="Selecione o Locutor Principal"
                    options={conteudo}
                  />
                </div>
                <div className="col l6 s12">
                  <Selected
                    name="programa"
                    label="Selecione o nome do Programa"
                    options={programa}
                  />
                </div>
                <div className="input-field col s12 m12 l6">
                  <Input name="hora" id="hora" type="text" className="validate" />
                  <label htmlFor="hora">Horarios 15:00 16:00</label>
                </div>
              </div>
              <div style={{ marginTop: "5%" }} className="col s12">
                <button
                  style={{ zIndex: 0 }}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Cadastrar
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </Form>
          </div>
          <br />
          <Table update={programas} />
        </div>
      </div>
    </div>
  );
}
