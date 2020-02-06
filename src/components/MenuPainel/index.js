import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function MenuPainel() {
  return (
    <div className="container">
      <ul id="slide-out" className="sidenav sidenav-fixed">
    <li><div className="user-view">
      <div className="background">
        <img alt="imgBG" src="images/office.jpg" />
      </div>
      <Link to="/profile"><img className="circle" alt="imgProfile" src="images/yuna.jpg" /></Link>
      <Link to="profile"><span className="white-text name">John Doe</span></Link>
      <Link to="profile"><span className="white-text email">jdandturk@gmail.com</span></Link>
    </div></li>
    <li>
      <Link to="/fazeraqui">
        <i className="material-icons">face</i>Pefil
      </Link>
    </li>
    <li>
      <Link className="red-text grey lighten-2" to="/fazeraqui">
        <i className="material-icons red-text">exit_to_app</i>Sair
      </Link>
    </li>
    <li>
      <div className="divider"></div>
    </li>
    <li>
      <ul className="collapsible collapsible-accordion">
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">filter_drama</i>Programação</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link> Cadastrar Programas </Link>
                </li>
                <li>
                  <Link> Cadastrar Programação </Link>
                </li>
                <li>
                  <Link> Listar Programas </Link>
                </li>
                <li>
                  <Link> Listar Programação </Link>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">place</i>Radio</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link> Informações </Link>
                </li>
                <li>
                  <Link> Enviar Banner </Link>
                </li>
                <li>
                  <Link> Cadastrar Promoções </Link>
                </li>
                <li>
                  <Link> Listar promoções </Link>
                </li>
                <li>
                  <Link> Top3 </Link>
                </li>
                <li>
                  <Link> Contato </Link>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">whatshot</i>Usuários / locutores</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link> Todos os usuarios </Link>
                </li>
                <li>
                  <Link> Todos os locutores </Link>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </li>
    <li>
      <div className="divider"></div>
    </li>
    { /* Admin */ }
    <li>
      <ul className="collapsible collapsible-accordion">
        <li className="center red white-text">Seção Admin</li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">filter_drama</i>Programação</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link> Cadastrar Programas </Link>
                </li>
                <li>
                  <Link> Cadastrar Programação </Link>
                </li>
                <li>
                  <Link> Listar Programas </Link>
                </li>
                <li>
                  <Link> Listar Programação </Link>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">place</i>Radio</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link> Informações </Link>
                </li>
                <li>
                  <Link> Enviar Banner </Link>
                </li>
                <li>
                  <Link> Cadastrar Promoções </Link>
                </li>
                <li>
                  <Link> Listar promoções </Link>
                </li>
                <li>
                  <Link> Top3 </Link>
                </li>
                <li>
                  <Link> Contato </Link>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">whatshot</i>Usuários / locutores</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link> Todos os usuarios </Link>
                </li>
                <li>
                  <Link> Todos os locutores </Link>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </li>
    
  </ul>
    </div>
  );
}
