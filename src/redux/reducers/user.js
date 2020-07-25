const initialState = {
  isLoading: false,
  isLoadingImg: false,
  isLoadingLoc: false,
  isLoadingAva: false,
  isError: false,
  errorMsg: '',
  dataUser: [],
  isLoadingSearch: false,
  dataSearch: []
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
    case 'SEARCHUSER_PENDING': {
      return {
        ...state,
        isLoadingSearch: true,
        isError: false
      }
    }
    case 'SEARCHUSER_REJECTED': {
      return {
        ...state,
        isLoadingSearch: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'SEARCHUSER_FULFILLED': {
      return {
        ...state,
        isLoadingSearch: false,
        isError: false,
        dataSearch: action.payload._data,
      }
    }
    case 'UPLOADIMG_PENDING': {
      return {
        ...state,
        isLoadingImg: true,
        isError: false
      }
    }
    case 'UPLOADIMG_REJECTED': {
      return {
        ...state,
        isLoadingImg: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'UPLOADIMG_FULFILLED': {
      return {
        ...state,
        isLoadingImg: false,
        isError: false,
      }
    }
    case 'LOCATION_PENDING': {
      return {
        ...state,
        isLoadingLoc: true,
        isError: false
      }
    }
    case 'LOCATION_REJECTED': {
      return {
        ...state,
        isLoadingLoc: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'LOCATION_FULFILLED': {
      return {
        ...state,
        isLoadingLoc: false,
        isError: false,
      }
    }
    case 'REMOVEAVA_PENDING': {
      return {
        ...state,
        isLoadingAva: true,
        isError: false
      }
    }
    case 'REMOVEAVA_REJECTED': {
      return {
        ...state,
        isLoadingAva: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'REMOVEAVA_FULFILLED': {
      return {
        ...state,
        isLoadingAva: false,
        isError: false,
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
        dataUser: []
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