import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { signInRequest } from '../../../store/modules/auth/actions'

import { Form, Input } from '@rocketseat/unform';

import Logo from '../../../assets/logoParecis.svg'

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um email válido').required('Insira um email'),
  password: Yup.string().required('Favor insira sua senha')
})

export default function LoginRequest() {

  const dispatch = useDispatch();

  async function handleSubmit({email, password}){
    dispatch(signInRequest(email, password))
  }

  return (
    <div className="section">
      <main>
        <center>
          <Link title="retornar" to="/">
            <img className="responsive-img" style={{width: '120px', marginTop: '5vh', marginBottom: -15}} src={Logo} alt="logoParecis"/>
          </Link>
          <div className="section" />
          
          <h5 className="indigo-text">Área Restrita, informe suas credênciais</h5>
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
                    <Input className='validate' type='email' name='email' id='email' />
                    <label htmlFor='email'>Insira seu Email</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <Input className='validate' type='password' name='password' id='password' />
                    <label htmlFor='password'>Insira sua Senha</label>
                  </div>
                  <label style={{float: 'right'}}>
                    <a className='pink-text' href='#!'><b>Esqueceu sua senha?</b></a>
                  </label>
                </div>

                <br />
                <center>
                  <div className='row'>
                    <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
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
