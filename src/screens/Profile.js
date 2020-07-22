import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'
import { concat } from 'react-native-reanimated'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Ilham Bagas',
      image: 'https://pbs.twimg.com/profile_images/1255095743112765441/_rqz4BY3.jpg',
      username: 'bgsilham',
      bio: "Hey there! I'm not using Whatsapp",
      email: 'ilhambagas92@gmail.com'
    }
  }
  edit = () => {
    const {name, image, username, bio, email} = this.state
    this.props.navigation.navigate('edit-profile', {image: image, name: name, email: email, bio: bio})
  }
  render() {
    const {name, image, username, bio, email} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.imgWrapper}>
            <Image
              source={{uri: image}}
              style={style.img} 
            />
          </View>
          <View style={style.info}>
            <View style={style.infoWrapper}>
              <Text style={style.title}>Name</Text>
              <Text style={style.subTitle}>{name}</Text>
              <View style={style.line} />
            </View>
            <View style={style.infoWrapper}>
              <Text style={style.title}>Username</Text>
              <Text style={style.subTitle}>@{username}</Text>
              <View style={style.line} />
            </View>
            <View style={style.infoWrapper}>
              <Text style={style.title}>Email</Text>
              <Text style={style.subTitle}>{email}</Text>
              <View style={style.line} />
            </View>
            <View style={style.infoWrapper}>
              <Text style={style.title}>Bio</Text>
              <Text style={style.subTitle}>{bio}</Text>
              <View style={style.line} />
            </View>
            <TouchableOpacity style={style.btnEdit} onPress={this.edit}>
              <Text style={style.btnEditText}>EDIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}


export default Profile

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  imgWrapper: {
    marginTop: 30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#2476C3',
    alignSelf: 'center'
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 50
  },
  info: {
    marginTop: 40
  },
  infoWrapper: {
    width: deviceWidth-50,
    alignSelf: "center",
    marginTop: 10
  },
  title: {
    color: '#B8B8B8'
  },
  subTitle: {
    color: 'white',
    fontSize: 20
  },
  line: {
    width: deviceWidth-50,
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#2476C3',
    marginTop: 10
  },
  btnEdit: {
    width: deviceWidth-50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2476C3',
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 30
  },
  btnEditText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5,
    fontSize: 15,
  }
})