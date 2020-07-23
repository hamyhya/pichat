import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {connect} from 'react-redux'

import Login from '../screens/Login'
import Register from '../screens/Register'
import ChatDetail from '../screens/ChatDetail'
import Tab from './Tab'
import EditProfile from '../screens/EditProfile'
import ExploreDetail from '../screens/ExploreDetail'
import Profile from '../screens/Profile'
import AddChat from '../screens/AddChat'
import UserDetail from '../screens/UserDetail'

const Stack = createStackNavigator()

class Navigation extends Component {
  render() {
    const {isLogin} = this.props.auth
    return(
      <NavigationContainer>
        <Stack.Navigator>
          {!isLogin ? (
            <>
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
            </>
          ):(
            <>
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
                component={Profile}
                name='profile'
                options={{
                  title: 'Profile',
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
              <Stack.Screen 
                component={AddChat}
                name='add-chat'
                options={{
                  title: '',
                  headerTransparent: true,
                  headerTintColor: 'white'
                }}
              />
              <Stack.Screen 
                component={UserDetail}
                name='user-detail'
                options={{
                  title: '',
                  headerTransparent: true,
                  headerTintColor: 'black'
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Navigation)