import React, { Component } from 'react'
import Navigation from './src/components/Navigation'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from './src/redux/store'

export default class App extends Component {
  render(){
    return(
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </>
    )
  }
}