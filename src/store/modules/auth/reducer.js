import produce from 'immer';

const secret = process.env.REACT_APP_KEY_SECRET_KEY_WITH_A_AUTHENTICATION;

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  config: null,
}

export default function auth(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){

      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.config = action.payload.user.adm ? secret : false;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.config = null;
        break;
      }
      case '@user/TOKEN_EXPIRADO': {
        draft.token= null;
        draft.signed= false;
        draft.loading= false;
        draft.config= null;
        break;
      }
      default :
        break;
    }
  });
}