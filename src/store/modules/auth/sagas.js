import { takeLatest, call ,all, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history'

import {toast} from 'react-toastify';

import { signInSuccess } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password
    });
  
    const { token, user } = response.data;
  
    yield put(signInSuccess(token, user));
  
    yield history.push('/painel');
    toast.success('Bem vindo')
  } catch (err) {
    toast.error('Algo deu errado! Confira seus dados')
  }
}

export function setToken({payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);