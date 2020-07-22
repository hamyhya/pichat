import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Register from '../screens/Register'
import ChatDetail from '../screens/ChatDetail'
import Tab from './Tab'
import EditProfile from '../screens/EditProfile'
import ExploreDetail from '../screens/ExploreDetail'

const Stack = createStackNavigator()

class Navigation extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Login} name='login' options={{headerShown: false}} />
          <Stack.Screen 
            component={Register} 
            name='register' 
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }} 
          />
          <Stack.Screen component={Tab} name='home' options={{headerShown: false}} />
          <Stack.Screen 
            component={ChatDetail}
            name='chat-detail'
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}
          />
          <Stack.Screen 
            component={EditProfile}
            name='edit-profile'
            options={{
              title: 'Edit Profile',
              headerTransparent: true,
              headerTintColor: 'white'
            }}
          />
          <Stack.Screen 
            component={ExploreDetail}
            name='explore-detail'
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigation