import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import Logo from '../../../assets/logoParecis.svg'
import api from '../../../services/api';
import history from '../../../services/history';
import { toast } from 'react-toastify';


const schema = Yup.object().shape({
  cfp_request: Yup.string().required('Insira seu CPF').min(11, 'Quantidade de números invalidos').max(11, 'Somente Números'),
  cpf_password: Yup.string().required('Favor insira uma nova senha')
})

export default function ResetPassword() {

  async function handleSubmit(data){
    try {
      await api.put('users/1', {
        ...data
      })
      toast.success("Senha alterada com sucesso");
      history.push('/login')
    } catch(err){
      toast.error("Dados inválidos, verifique seus dados ou consulte o RH");

    }
  }



  return (
    <div className="section">
      <main>
        <center>
          <Link title="retornar" to="/">
            <img className="responsive-img" style={{width: '120px', marginTop: '5vh', marginBottom: -15}} src={Logo} alt="logoParecis"/>
          </Link>
          <div className="section" />
          
          <h5 className="indigo-text">Informe suas credênciais</h5>
          <div className="section"></div>

          <div className="container">
            <div style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #eee'}} className="z-depth-1 grey lighten-4 row">
              <Form style={{color: 'red'}} schema={schema} onSubmit={handleSubmit} className="col s12">
                <div className='row'>
                  <div className='col s12'>
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <Input className='validate' type='text' name='cfp_request' id='text' />
                    <label htmlFor='email'>Informe seu CPF SOMENTE NÚMEROS</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <Input className='validate' type='password' name='cpf_password' id='password' />
                    <label htmlFor='password'>Insira uma nova senha</label>
                  </div>
                  <label style={{float: 'right'}}>
                    <Link className='pink-text'to="/login"><b>Retornar ao Login</b></Link>
                  </label>
                </div>

                <br />
                <center>
                  <div className='row'>
                    <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>CRIAR NOVA SENHA</button>
                  </div>
                </center>
              </Form>
            </div>
          </div>
        </center>
      </main>
    </div>
  );
}

