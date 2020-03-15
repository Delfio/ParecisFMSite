import React, { useEffect } from "react";
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
  minuto: Yup.string().required("Selecione algum minuto"),
  dia: Yup.string().required("Selecione algum Dia"),
  locutor: Yup.string().required("Selecione algum Locutor"),
  programa: Yup.string().required("Selecione algum Programa")
});

export default function CadastrarProgramacao() {
  //Suave

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
    try {
      const { hora, minuto } = data;

      var horarios = new Array();
      var minutos = new Array();

      var horaFormatada = "";

      horarios.push(hora.split(","));
      minutos.push(minuto.split(","));

      var lengthHorario = horarios[0].length;
      var lengthMinutos = minutos[0].length;

      const horariosFormated = horarios[0];
      const minutosFormated = minutos[0];

      if (lengthHorario != lengthMinutos) {
        return toast.error(
          "Verifique os horarios e minutos! cada horario deve ter um minuto na mesma sequência"
        );
      }

      for (let index = 0; index < horariosFormated.length; index++) {
        if (horaFormatada.length === 0) {
          horaFormatada = `${horariosFormated[index]}:${minutosFormated[index]}`;
        } else {
          horaFormatada += ` ${horariosFormated[index]}:${minutosFormated[index]}`;
        }
      }

      console.log(horaFormatada);

      await api.post("/programacaos", {
        horario: horaFormatada,
        programa_id: data.programa,
        dia_id: data.dia,
        user_id: data.locutor,
        radio_id: profile.radio_id
      });

      loadProgramas();
      resetForm();
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

  const horas = [
    { id: "00", title: "00" },
    { id: "01", title: "01" },
    { id: "02", title: "02" },
    { id: "03", title: "03" },
    { id: "04", title: "04" },
    { id: "05", title: "05" },
    { id: "06", title: "06" },
    { id: "07", title: "07" },
    { id: "08", title: "08" },
    { id: "09", title: "09" },
    { id: "10", title: "10" },
    { id: "11", title: "11" },
    { id: "12", title: "12" },
    { id: "13", title: "13" },
    { id: "14", title: "14" },
    { id: "15", title: "15" },
    { id: "16", title: "16" },
    { id: "17", title: "17" },
    { id: "18", title: "18" },
    { id: "19", title: "19" },
    { id: "20", title: "20" },
    { id: "21", title: "21" },
    { id: "22", title: "22" },
    { id: "23", title: "23" }
  ];

  const minutos = [
    { id: "00", title: "00" },
    { id: "20", title: "20" },
    { id: "25", title: "25" },
    { id: "30", title: "30" },
    { id: "35", title: "35" },
    { id: "40", title: "40" },
    { id: "45", title: "45" }
  ];

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ marginTop: 50 }}
          className="col s12 m10 offset-m1 xl12 offset-xl1 left-align"
        >
          <h3>Progamações</h3>

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
                <div className="col l3 s6">
                  <Selected
                    name="hora"
                    label="Selecione a hora"
                    options={horas}
                    multiple={true}
                  />
                </div>
                <div className="col l3 s6">
                  <Selected
                    name="minuto"
                    label="Selecione os minutos"
                    options={minutos}
                    multiple={true}
                  />
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
          <Table />
        </div>
      </div>
    </div>
  );
}
