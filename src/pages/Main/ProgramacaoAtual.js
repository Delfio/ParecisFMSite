import React, { useEffect, useState } from "react";
import LogoParecis from "../../assets/MARY_GONÇALVES_MG_1343.JPG";
// logoParecis.png
import { DivLocutor, DivInfosLocutor } from "./styles";

export default function ProgramacaoAtual(props) {
  const [programaAtual, setProgramaAtual] = useState({});

  useEffect(() => {
    setProgramaAtual(props.programacao[0]);
  }, [props]);

  return (
    <div style={{ marginTop: 25 }} className="row">
      {/* Tablete e Desktop */}
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
        className="container hide-on-small-only"
      >
        <div className="col l6 s12">
          <div className="col l6 s12 right">
            <DivLocutor
              bg={
                programaAtual
                  ? programaAtual.locutor
                    ? programaAtual.locutor.avatar
                      ? programaAtual.locutor.avatar.url
                      : LogoParecis
                    : LogoParecis
                  : LogoParecis
              }
              className="col s12"
            />
            <div
              style={{
                display: "flex",
                marginTop: -25,
                padding: 0,
                height: 45,
                alignItems: "center",
                justifyContent: "center"
              }}
              className="col s12 red"
            >
              <p style={{ fontWeight: "bold" }} className="white-text center">
                MARY GONÇALVES
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center"
          }}
          className="col s6"
        >
          <div style={{ margin: 0, padding: 0 }} className="col s2">
            <a
              style={{
                width: 85,
                height: 85,
                display: "flex",
                alignItems: "center",
                border: "solid 4px red"
              }}
              href="/streamOnline"
              title="Assistir"
              className="btn-floating btn-large waves-effect waves-light white"
            >
              <i
                style={{
                  fontSize: 55
                }}
                className="large material-icons center red-text"
              >
                play_arrow
              </i>
            </a>
          </div>
          <DivInfosLocutor
            // style={{ margin: 0, padding: 0, marginLeft: -20 }}
            className="col s10"
          >
            <div
              style={{ margin: 0, paddin: 0, marginRight: 150 }}
              className="red"
            >
              <h5
                style={{
                  marginLeft: 30,
                  fontWeight: "bold",
                  marginBottom: 0,
                  padding: 5
                }}
                className="white-text"
              >
                AO VIVO
              </h5>
            </div>
            <div
              style={{ margin: 0, paddin: 0, marginTop: 0 }}
              className="grey darken-3"
            >
              <h5
                style={{
                  marginLeft: 30,
                  fontWeight: "bold",
                  marginTop: 0,
                  padding: 5
                }}
                className="white-text"
              >
                Programação Livre
              </h5>
            </div>
          </DivInfosLocutor>
        </div>
      </div>
      {/* Mobile */}

      <div className="container hide-on-med-and-up">
        <div className="container">
          <div className="col s12">
            <div style={{ margin: 0, padding: 0 }} className="col s12">
              <img class="responsive-img" src={LogoParecis} alt="ss" />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: -20,
                padding: 0,
                height: 45,
                alignItems: "center",
                justifyContent: "center"
              }}
              className="col s12 red"
            >
              <p style={{ fontWeight: "bold" }} className="white-text center">
                MARY GONÇALVES ALVES
              </p>
            </div>
            <div
              style={{
                margin: 0,
                padding: 0,
                marginTop: 10,
                display: "flex",
                alignItems: "center"
              }}
              className="col s12"
            >
              <div style={{ margin: 0, padding: 0 }} className="col s2">
                <a
                  style={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    border: "solid 4px red"
                  }}
                  href="/streamOnline"
                  title="Assistir"
                  className="btn-floating btn-large waves-effect waves-light white"
                >
                  <i
                    style={{
                      fontSize: 55
                    }}
                    className="large material-icons center red-text"
                  >
                    play_arrow
                  </i>
                </a>
              </div>
              <div style={{ margin: 0, padding: 0 }} className="col s10">
                <div style={{ margin: 0, paddin: 0 }} className="red">
                  <h5
                    style={{
                      marginLeft: 30,
                      fontWeight: "bold",
                      marginBottom: 0,
                      padding: 5
                    }}
                    className="white-text"
                  >
                    AO VIVO
                  </h5>
                </div>
                <div
                  style={{ margin: 0, paddin: 0, marginTop: 0 }}
                  className="grey darken-3"
                >
                  <h5
                    style={{
                      marginLeft: 30,
                      fontWeight: "bold",
                      marginTop: 0,
                      padding: 5
                    }}
                    className="white-text"
                  >
                    Programação Livre
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
