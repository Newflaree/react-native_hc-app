
export const authReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[AUTH] - AddError':
      return {
        ...state,
        user: null,
        token: null,
        status: 'not-authenticared',
        errorMessage: action.payload
      };

    case '[AUTH] - RemoveError':
      return {
        ...state,
        errorMessage: ''
      };

    case '[AUTH] - SignUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticared',
        token: action.payload.token,
        user: action.payload.user
      };

    case '[AUTH] - LogOut':
    case '[AUTH] - NotAuthenticared':
      return {
        ...state,
        status: 'not-authenticared',
        token: null,
        user: null
      };

    default: 
      return state;
  }
};
