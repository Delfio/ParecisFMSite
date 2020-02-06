import produce from 'immer';
const secret = process.env.REACT_APP_KEY_SECRET_KEY_WITH_A_AUTHENTICATION;
const INITIAL_STATE = {
  profile: null,
}

export default function user(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = {
          id: action.payload.user.id,
          name: action.payload.user.name,
          radio_id: action.payload.user.radio_id,
          locutor: action.payload.user.locutor,
          email: action.payload.user.email,
          config: action.payload.user.adm ? secret : null,
          avatar: action.payload.user.avatar
        }
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default :
    }
  });
}

