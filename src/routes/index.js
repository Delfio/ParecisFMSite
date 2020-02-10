import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Inital from '../pages/Inicial'
import Main from '../pages/Main';

import Login from '../pages/auth/login';

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
import AllLocutores from '../pages/Dashboard/UserLocutores/TodosOsLocutores';

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

      <Route path="/login" login component={Login}/>

      <Route path="/painel" exact isPrivate component={Dashboard}/>
      <Route path="/cadPrograma" exact isPrivate component={CadastrarPrograma}/>
      <Route path="/cadProgramacao" exact isPrivate component={CadastrarProgramacao}/>
      <Route path="/allPrograma" exact isPrivate component={ListarPrograma}/>
      <Route path="/allProgramacao" exact isPrivate component={ListarProgramacao}/>
      <Route path="/programasEmExibicao" exact isPrivate component={ProgramaEmExibicao}/>

      <Route path="/sobre" exact isPrivate component={InfosRadio}/>
      <Route path="/cadBanner" exact isPrivate component={EnviarBanner}/>
      <Route path="/cadPromocao" exact isPrivate component={CadPromocao}/>
      <Route path="/allPromocoes" exact isPrivate component={AllPromotions}/>
      <Route path="/top3" exact isPrivate component={Top3}/>
      <Route path="/contato" exact isPrivate component={Contato}/>
      
      <Route path="/allUsers" exact isPrivate component={AllUsers}/>
      <Route path="/allLocutores" exact isPrivate component={AllLocutores}/>

      <Route path="/attPrograma/:id" exact isPrivate component={AttPrograma}/>
      <Route path="/attProgramacao/:id" exact isPrivate component={AttProgramation}/>

      <Route path="/cadImgPromotion/:id" exact isPrivate component={CadBannerPromotion}/>
      <Route path="/uploadImageTop3/:id" exact isPrivate component={CadastrarImagemTop3}/>

      <Route path="/attTop3/:id" exact isPrivate component={AttTop3}/>


      <Route path="/profile" exact isPrivate component={Profile}/>
      
      
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
