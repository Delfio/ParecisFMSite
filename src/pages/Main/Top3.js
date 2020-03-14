import React, { useEffect, useState } from "react";
import Menu from "../../components/MenuDefault/MenuPageExtra";
import api from "../../services/api";
import Promocao from "./Promocoes";
import Footer from "../../components/Footer";

// import { Container } from './styles';

export default function ListTop3(props) {
  const { musica_id, id } = props.match.params;

  const [videoExecucao, setVideoExecucao] = useState({});
  const [top3, setTop3s] = useState([]);

  useEffect(() => {
    loadVideo(musica_id);
    loadTop3s();
  }, [props]);

  async function loadVideo(musica_id) {
    const response = await api.get(`top3Att/${musica_id}`);
    setVideoExecucao(response.data);
  }

  async function loadTop3s() {
    const response = await api.get(`top3/${id}`);

    setTop3s(response.data);
  }

  return (
    <>
      <Menu id={id} />
      <div className="row">
        <div className="container">
          <h1
            style={{
              fontSize: 50,
              letterSpacing: 8,
              color: "red",
              marginLeft: 35
            }}
          >
            <span>
              <i style={{ color: "#f9ab00" }} className="material-icons">
                play_arrow
              </i>
            </span>
            TOP3
          </h1>
          <div className="col s12">
            <div className="col l8 s12">
              <div className="video-container">
                <iframe
                  title="videoTop3"
                  width="853"
                  height="480"
                  src={videoExecucao ? videoExecucao.link : null}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col l4 s12">
              <h5 className="center">Confira nossa lista</h5>
              <ul>
                {top3.map((el, indice) => (
                  <li
                    key={el.id}
                    style={{
                      display: "flex",
                      marginTop: 15,
                      alignItems: "stretch",
                      borderBottom: "dotted 1px rgba(0,0,0,0.7)"
                    }}
                    className="col s12"
                  >
                    <span
                      style={{
                        marginRight: 10,
                        display: "flex",
                        minHeight: "100%",
                        alignItems: "center"
                      }}
                    >
                      <button
                        onClick={() => loadVideo(el.id)}
                        style={{
                          backgroundColor:
                            videoExecucao.id === el.id ? "#f9ab00" : "red"
                        }}
                        className="btn-small waves-effect waves-light"
                      >
                        #{indice + 1}
                      </button>
                    </span>
                    <span style={{ padding: 0 }}>
                      {" "}
                      <span style={{ padding: 0 }}>{el.artista}</span>
                      <br />
                      <span
                        style={{ fontSize: 25, fontWeight: 700, padding: 0 }}
                      >
                        {el.musica}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Promocao id={id} />
      <Footer />
    </>
  );
}
