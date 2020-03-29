/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { Container } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required("Favor insira um nome"),
  link: Yup.string().url("Insira uma URL válida"),
  descricao: Yup.string().required("Insira uma descrição")
});

export default function CadastrarPromocoes(props) {
  const profile = useSelector(state => state.user.profile);
  const [promotions, setPromotions] = useState([]);
  const [facebook, setFacebook] = useState(false);
  const [whats, setWhats] = useState(false);
  const [insta, setInsta] = useState(false);

  useEffect(() => {
    loadPromotions();
  }, []);

  async function loadPromotions() {
    const response = await api.get(`promocao/${profile.radio_id}`);
    setPromotions(response.data);
  }

  async function handleCadastrarPromotion(data) {
    try {
      const response = await api.post(`/promocao/${profile.radio_id}`, {
        ...data,
        facebook: facebook,
        instagram: insta,
        whatsapp: whats
      });
      const promocaoCadastrada = response.data;
      toast.success("Promoção cadastrada com sucesso");
      await props.history.push(`/cadImgPromotion/${promocaoCadastrada.id}`);
    } catch (err) {
      toast.error("Ocorreu um erro, confira seus dados");
    }
  }

  async function handlDelete(data) {
    try {
      await api.post(`/promocao/${data}`);
    } catch (error) {
      toast.error('Algo deu errado!')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ marginTop: 55 }}
          className="col s12 m10 offset-m1 xl12 offset-xl1 left-align"
        >
          <Form
            style={{ color: "red" }}
            schema={schema}
            onSubmit={handleCadastrarPromotion}
          >
            <div className="col s12 hide-on-small-only">
              <h5 className="grey-text">Cadastre uma nova promoção</h5>
            </div>
            <div className="input-field col l6 s12">
              <Input name="nome" id="name" type="text" className="validate" />
              <label htmlFor="name">Nome</label>
            </div>
            <div className="input-field col l6 s12">
              <Input name="link" id="link" type="text" className="validate" />
              <label htmlFor="name">Link</label>
            </div>
            <div className="input-field col l12 s12">
              <Input
                name="descricao"
                id="descricao"
                type="text"
                className="validate"
                multiline
                label="Descrição"
              />
            </div>
            <div
              style={{ marginTop: -8, marginBottom: 15, display: "flex" }}
              className="col s12"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 15
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="face5"
                    id="face5"
                    type="checkbox"
                    className="validate"
                    checked={facebook === true}
                    onChange={e =>
                      facebook === false
                        ? setFacebook(true)
                        : setFacebook(false)
                    }
                  />
                  <span className="blue-text">Facebook</span>
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 15
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="whats5"
                    id="whats5"
                    type="checkbox"
                    className="validate"
                    checked={whats === true}
                    onChange={e =>
                      whats === false ? setWhats(true) : setWhats(false)
                    }
                  />
                  <span className="blue-text">whats</span>
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 15
                }}
                className="col s3"
              >
                <label>
                  <Input
                    value="1"
                    name="insta5"
                    id="insta5"
                    type="checkbox"
                    className="validate"
                    checked={insta === true}
                    onChange={e =>
                      insta === false ? setInsta(true) : setInsta(false)
                    }
                  />
                  <span className="blue-text">whats</span>
                </label>
              </div>
            </div>
            <div className="col s12">
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

          <div className="row">
            <div className="col s12">
              <br />
              <hr />
              <h4>Promoções já cadastradas</h4>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Link</th>
                    <th>facebook</th>
                    <th>whatsapp</th>
                    <th>instagram</th>
                    <th>imagem</th>
                    <th>Atualizar</th>
                    <th>Deletar</th>
                  </tr>
                </thead>

                <tbody>
                  {promotions.map(el => (
                    <tr key={el.id}>
                      <td>{el.nome}</td>
                      <td>{el.link}</td>
                      <td>{el.facebook ? "Sim" : "Não"}</td>
                      <td>{el.whatsapp ? "Sim" : "Não"}</td>
                      <td>{el.instagram ? "Sim" : "Não"}</td>
                      <td>
                        <div className="col s12">
                          <img
                            style={{ maxHeight: 150 }}
                            className="responsive-img"
                            src={el.imagem ? el.imagem.url : null}
                            alt="imagemPromotion"
                          />
                        </div>
                      </td>
                      <td>
                        <Link to={`/attPromotion/${el.id}`}>Atualizar</Link>
                      </td>
                      <td>
                        <button
                          title="deletar usuário"
                          onClick={() => handlDelete(el.id)}
                          className="btn-floating waves-effect waves-light red"
                        >
                          <i className="material-icons">delete</i>
                        </button>
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
