import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class UserDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: this.props.route.params.image,
      name: this.props.route.params.name,
      username: this.props.route.params.username,
      bio: this.props.route.params.bio,
      location: this.props.route.params.location,
    }
  }
  location = () => {
    this.props.navigation.navigate('friend-location', {location: this.state.location})
  }
  render() {
    const {image, name, bio, username} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.imgWrapper}>
            <Image source={{uri: image}} style={style.img}/>
          </View>
          <Text style={style.name}>{name}</Text>
          <View style={style.locationWrapper}>
            <Text style={style.btnEditText}>Username :</Text>
            <Text style={style.locationInfo}>@{username}</Text>
          </View>
          <View style={style.locationWrapper}>
            <Text style={style.btnEditText}>Bio :</Text>
            <Text style={style.locationInfo}>{bio}</Text>
          </View>
          <TouchableOpacity style={style.locationWrapper} onPress={this.location}>
            <Text style={style.btnEditText}>{name} latest location :</Text>
            <Text style={style.locationInfo}>Tap to see location</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

export default UserDetail

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  imgWrapper: {
    width: deviceWidth,
    height: 250,
    backgroundColor: 'pink',
  },
  img: {
    flex: 1,
    resizeMode: 'cover'
  },
  name: {
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 3, 
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  btnEditText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  locationWrapper: {
    width: deviceWidth-50,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    alignSelf: 'center',
    marginTop: 20
  },
  locationInfo: {
    color: 'white',
    marginTop: 10,
    fontSize: 15
  }
})