import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/modules/auth/actions'


export default function MenuPainel() {
  const secret = process.env.REACT_APP_KEY_SECRET_KEY_WITH_A_AUTHENTICATION;

  const adm = useSelector(state => state.auth.config);

  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  async function deslogar(){
    await dispatch(signOut())
  }

  return (
    <div className="container">
      <div className="hide-on-large-only" style={{marginTop: 25}}>
        <a  href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
    <li><div className="user-view">
      <div className="background red">
        <img alt="imgBG" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZvxxEWvsEvdFVzN5ADxxvAGCIdCCJK-Wi6UoRHkik1WylSNeN" />
      </div>
      <Link to="profile"><span className="white-text name">{profile.name}</span></Link>
      <Link to="profile"><span className="white-text email">{profile.email}</span></Link>
    </div></li>
    <li>
      <Link to="/profile">
        <i className="material-icons">face</i>Pefil
      </Link>
    </li>
    <li>
      <a href="/">
        <i className="material-icons">home</i>Retornar ao site
      </a>
    </li>
    <li>
      <Link to="/painel">
        <i className="material-icons">dashboard</i>Painel
      </Link>
    </li>
    <li>
      <Link to="#" onClick={deslogar} className="red-text grey lighten-2">
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
                  <Link to="/cadPrograma"> Cadastrar Programas </Link>
                </li>
                <li>
                  <Link to="/cadProgramacao"> Cadastrar Programação </Link>
                </li>
                <li>
                  <Link to="/programasEmExibicao"> Listagem de programações </Link>
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
                  <Link to="/sobre"> Informações </Link>
                </li>
                <li>
                  <Link to="/cadBanner"> Enviar Banner </Link>
                </li>
                <li>
                  <Link to="/cadPromocao"> Cadastrar Promoções </Link>
                </li>
                <li>
                  <Link to="/top3"> Top3 </Link>
                </li>
                <li>
                  <Link to="/contato"> Contatos </Link>
                </li>
              </ul>
            </div>
        </li>
        {/* <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">whatshot</i>Usuários / locutores</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link to="/allUsers"> Todos os usuarios </Link>
                </li>
                <li>
                  <Link to="/allLocutores"> Todos os locutores </Link>
                </li>
              </ul>
            </div>
        </li> */}
      
      </ul>
    </li>
    <li>
      <div className="divider"></div>
    </li>
    { /* Admin */ }
    <li className={`${adm === secret ? "": "hide"}`}>
      <ul className="collapsible collapsible-accordion">
        <li className="center red white-text">Seção Admin</li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">person</i>Usuarios</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link to="/admin/CadUser"> Cadastrar Usuários </Link>
                </li>
                <li>
                  <Link to="/admin/CadAdmin"> Cadastrar Administradores </Link>
                </li>
                <li>
                  <Link to="/admin/AllUser"> Listar Usuarios </Link>
                </li>
                <li>
                  <Link to="/admin/AllAdmin"> Listar Administradores </Link>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">radio</i>Radios</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link to="/admin/AllRadio"> Listar Rádios </Link>
                </li>
                <li>
                  <Link to="/admin/CadRadio"> Cadastrar Rádio </Link>
                </li>
              </ul>
            </div>
        </li>
        <li>
          <div className="collapsible-header waves-effect waves-teal">
            <i className="material-icons">whatshot</i>Cidades / Estados</div>
            <div className="collapsible-body">
              <ul className="">
                <li>
                  <Link to="/admin/CadCity"> Cidades </Link>
                </li>
                <li>
                  <Link to="/admin/CadEstado"> Estados </Link>
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
