const initialState = {
  isLoading: false,
  isLogin: false,
  isError: false,
  errorMsg: '',
  dataLogin: [],
  dataCurrent: [],
}

const auth = (state=initialState, action) => {
  switch(action.type){
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    }
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataLogin: action.payload.data,
        isLogin: true
      }
    }
    case 'CURRENT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'CURRENT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'CURRENT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataCurrent: action.payload.data,
        isLogin: true
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth