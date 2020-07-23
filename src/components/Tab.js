import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../screens/Chat'
import Explore from '../screens/Explore'
import Location from '../screens/Location'

const TopTab = createMaterialTopTabNavigator()

export default class Tab extends Component {
  profile = () => {
    this.props.navigation.navigate('profile')
  }
  render() {
    return(
      <>
        <View style={style.header}>
          <Text style={style.title}>Pichat</Text>
          <TouchableOpacity onPress={this.profile} style={style.profileWrapper}>
            <View style={style.imgWrapper}>
              <Image 
                source={{uri: 'https://pbs.twimg.com/profile_images/1255095743112765441/_rqz4BY3.jpg'}} 
                style={style.img}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TopTab.Navigator 
          tabBarOptions={{
          style: {
            backgroundColor: '#2B2B2B'
          },
            activeTintColor: 'white'
          }}
        >
          <TopTab.Screen name='chat' component={Chat} />
          <TopTab.Screen name='explore' component={Explore} />
          <TopTab.Screen name='location' component={Location} />
        </TopTab.Navigator>
      </>
    )
  }
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#2B2B2B',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 2
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  username: {
    color: 'white'
  },
  imgWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#2476C3',
    marginLeft: 10,
    position: 'relative',
    borderWidth: 3,
    borderColor: '#2476C3'
  },
  img: {
    borderRadius: 50,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1
  },
})