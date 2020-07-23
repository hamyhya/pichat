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
      bio: 'Hey you!'
    }
  }
  render() {
    const {image, name, bio} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.imgWrapper}>
            <Image source={{uri: image}} style={style.img}/>
          </View>
          <Text style={style.name}>{name}</Text>
          <View style={style.locationWrapper}>
            <Text style={style.btnEditText}>Fullname :</Text>
            <Text style={style.locationInfo}>{name} {name}</Text>
          </View>
          <View style={style.locationWrapper}>
            <Text style={style.btnEditText}>Bio :</Text>
            <Text style={style.locationInfo}>{bio}</Text>
          </View>
          <View style={style.locationWrapper}>
            <Text style={style.btnEditText}>{name} latest location :</Text>
            <Text style={style.locationInfo}>Kedalon, Kalikajar, Wonosobo, Central Java</Text>
          </View>
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