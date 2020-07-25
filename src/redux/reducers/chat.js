const initialState = {
  isLoadingChat: false,
  isLogin: false,
  isError: false,
  errorMsg: '',
}

const chat = (state=initialState, action) => {
  switch(action.type){
    case 'GETCHAT_PENDING': {
      return {
        ...state,
        isLoadingChat: true,
        isError: false
      }
    }
    case 'GETCHAT_REJECTED': {
      return {
        ...state,
        isLoadingChat: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'GETCHAT_FULFILLED': {
      return {
        ...state,
        isLoadingChat: false,
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

export default chat