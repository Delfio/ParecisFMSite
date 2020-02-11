import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Inital from '../pages/Inicial'
import Main from '../pages/Main';

import Login from '../pages/auth/login';
import ResetPassword from '../pages/auth/login/EsqueciASenha';
import Stream from '../pages/Main/Stream';
import ListTop3 from '../pages/Main/Top3';
import DetailsPromocao from '../pages/Main/DetailsPromocao';

/* Paineis */
import Dashboard from '../pages/Dashboard';

/* Programações */
import CadastrarPrograma from '../pages/Dashboard/Programa/CadatrarPrograma';
import CadastrarProgramacao from '../pages/Dashboard/Programa/CadastrarProgramacao';
import ListarPrograma from '../pages/Dashboard/Programa/ListProgramas';
import ListarProgramacao from '../pages/Dashboard/Programa/ListProgramacao';

import ProgramaEmExibicao from '../pages/Dashboard/Programa/ProgramaEmExibicao';

/* Radio */
import InfosRadio from '../pages/Dashboard/Radio/Informations';
import EnviarBanner from '../pages/Dashboard/Radio/EnviarBanner';
import CadPromocao from '../pages/Dashboard/Radio/CadastrarPromocoes';
import AllPromotions from '../pages/Dashboard/Radio/ListarPromocoes';
import Top3 from '../pages/Dashboard/Radio/Top3';
import Contato from '../pages/Dashboard/Radio/Contato';

/* User / locutor */
import AllUsers from '../pages/Dashboard/UserLocutores/TodosOsUsuarios';
import AllADMS from '../pages/Dashboard/UserLocutores/TodosOsADM.js';
import CadUser from '../pages/Dashboard/UserLocutores/CadastrarUsuario';
import CadAdm from '../pages/Dashboard/UserLocutores/CadastrarAdministrador';

import CadRadios from '../pages/Dashboard/Radio/adm/CadastrarRadios';
import AllRadios from '../pages/Dashboard/Radio/adm/ListarRadios';

import CadEstado from '../pages/Dashboard/Citys/AdicionarEstado';
import AttEstado from '../pages/Dashboard/Citys/AtualizarEstado';

import CadCity from '../pages/Dashboard/Citys/AdicionarCidades';
import AttCity from '../pages/Dashboard/Citys/AtualizarCity';

import Profile from '../pages/Dashboard/UserLocutores/Profile';

/* Atualizar */
import AttPrograma from '../pages/Dashboard/Programa/Atualizar/AtualizarPrograma';
import AttProgramation from '../pages/Dashboard/Programa/Atualizar/AtualizarProgarmation';
import AttTop3 from '../pages/Dashboard/Radio/AtualizarTop3';

import CadBannerPromotion from '../pages/Dashboard/Radio/CadastrarBannerPromocao';
import CadastrarImagemTop3 from '../pages/Dashboard/Radio/CadastrarImagemTop3';


export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inital}/>
      <Route path="/radio/:id" exact component={Main}/>

      <Route path="/top3/:musica_id/escutar/:id" exact component={ListTop3}/>
      <Route path="/promocao/:id" exact component={DetailsPromocao}/>
      
      <Route path="/login" login component={Login}/>
      <Route path="/esqueciMinhaSenha" login component={ResetPassword}/>
      <Route path="/streamOnline" component={Stream}/>

      <Route path="/painel" exact isPrivate component={Dashboard}/>
      <Route path="/cadPrograma" exact isPrivate component={CadastrarPrograma}/>
      <Route path="/cadProgramacao" exact isPrivate component={CadastrarProgramacao}/>
      <Route path="/allPrograma" exact isPrivate component={ListarPrograma}/>
      <Route path="/allProgramacao" exact isPrivate component={ListarProgramacao}/>
      <Route path="/programasEmExibicao" exact isPrivate component={ProgramaEmExibicao}/>

      <Route path="/sobre" exact isPrivate component={InfosRadio}/>
      <Route path="/sobre/:id" exact isPrivate component={InfosRadio}/>
      <Route path="/cadBanner" exact isPrivate component={EnviarBanner}/>
      <Route path="/cadBanner/:id" exact isPrivate component={EnviarBanner}/>
      <Route path="/cadPromocao" exact isPrivate component={CadPromocao}/>
      <Route path="/allPromocoes" exact isPrivate component={AllPromotions}/>
      <Route path="/top3" exact isPrivate component={Top3}/>
      <Route path="/contato" exact isPrivate component={Contato}/>
      
      <Route path="/admin/AllUser" exact isPrivate component={AllUsers}/>
      <Route path="/admin/AllAdmin" exact isPrivate component={AllADMS}/>
      <Route path="/admin/CadUser" exact isPrivate component={CadUser}/>
      <Route path="/admin/CadAdmin" exact isPrivate component={CadAdm}/>
      
      <Route path="/admin/AllRadio" exact isPrivate component={AllRadios}/>
      <Route path="/admin/CadRadio" exact isPrivate component={CadRadios}/>
      
      <Route path="/attPrograma/:id" exact isPrivate component={AttPrograma}/>
      <Route path="/attProgramacao/:id" exact isPrivate component={AttProgramation}/>

      <Route path="/cadImgPromotion/:id" exact isPrivate component={CadBannerPromotion}/>
      <Route path="/uploadImageTop3/:id" exact isPrivate component={CadastrarImagemTop3}/>

      <Route path="/attTop3/:id" exact isPrivate component={AttTop3}/>

      <Route path="/admin/CadEstado" exact isPrivate component={CadEstado}/>
      <Route path="/attEstado/:id" exact isPrivate component={AttEstado}/>

      <Route path="/admin/CadCity" exact isPrivate component={CadCity}/>
      <Route path="/attCitys/:id" exact isPrivate component={AttCity}/>

      <Route path="/profile" exact isPrivate component={Profile}/>
      
      
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
