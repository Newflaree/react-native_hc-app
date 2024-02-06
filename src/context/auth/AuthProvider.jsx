// React
import {
  useReducer
} from 'react';
// Api
import { hcApi } from '../../api';
// Context
import { AuthContext } from './AuthContext';
// Reducer
import { authReducer } from './authReducer';


const AUTH_INITIAL_STATE = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await hcApi.post( '/auth/login', { email, password } );

      dispatch({
        type: '[AUTH] - SignUp',
        payload: {
          token: data.token,
          user: data.user,
        }
      });
    
    } catch ( error ) {
      const message = error.response.data.message || error.response.data.errors[0].msg;

      dispatch({
        type: '[AUTH] - AddError',
        payload: message
      });
    }
  }
   
  const signUp = () => {}
  const logOut = () => {}

  const removeError = () => {
    dispatch({
      type: '[AUTH] - RemoveError',
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        logOut,
        removeError
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

