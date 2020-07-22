const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataUser: []
}

const user = (state=initialState, action) => {
  switch(action.type){
    case 'CREATEUSER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'CREATEUSER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'CREATEUSER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    }
    case 'GETUSER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GETUSER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'GETUSER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataUser: action.payload._data,
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

export default user