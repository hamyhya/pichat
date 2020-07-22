import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from '@react-native-community/async-storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import auth from './auth'
import user from './user'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  debug: false,
}

const reducer = combineReducers({
  auth,
  user
})

export default persistReducer(persistConfig, reducer)
