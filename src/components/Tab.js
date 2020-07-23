import React, { Component } from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../screens/Chat'
import Explore from '../screens/Explore'
import Location from '../screens/Location'
import storage from '@react-native-firebase/storage'

import {connect} from 'react-redux'
import settings from '../assets/settings.png'

const TopTab = createMaterialTopTabNavigator()

class Tab extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
      imageName: this.props.user.dataUser.image
    }
  }
  profile = () => {
    this.props.navigation.navigate('profile')
  }
  // getUrlUpload = () => {
  //   const {imageName} = this.state
  //   storage().ref(imageName).getDownloadURL().then((url) => {
  //     this.setState({image: url})
  //   })
  // }
  // componentDidMount(){
  //   this.getUrlUpload()
  // }
  render() {
    const {image} = this.state
    return(
      <>
        <View style={style.header}>
          <Text style={style.title}>Pichat</Text>
          <TouchableOpacity onPress={this.profile} style={style.profileWrapper}>
            <View style={style.imgWrapper}>
              <Image 
                source={settings} 
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Tab)

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
    width: 25,
    height: 25,
  },
  img: {
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    flex: 1
  },
})