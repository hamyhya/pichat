import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class AddChat extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Ilham Bagas',
      username: 'bgsdilham',
      bio: 'Hey you! Looking for me?',
      image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
      chat: ''
    }
  }
  chat = () => {
    const {name, image, chat} = this.state

    this.props.navigation.navigate('chat-detail', {
      name: name,
      image: image,
      chat: chat
    })
  }
  render() {
    const {name, username, bio, image} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.header}>
            <TextInput 
              placeholder='Looking for someone?' 
              placeholderTextColor='#B8B8B8'
              style={style.searchInput}
            />
            <TouchableOpacity style={style.searchBtn}>
              <Text style={style.searchBtnText}>search</Text>
            </TouchableOpacity>
          </View>
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
              <Text style={style.title}>Bio</Text>
              <Text style={style.subTitle}>{bio}</Text>
              <View style={style.line} />
            </View>
            <TouchableOpacity style={style.btnLogout} onPress={this.chat}>
              <Text style={style.btnLogoutText}>START CHAT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default AddChat

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  searchInput: {
    width: 200,
    height: 40,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#2B2B2B',
    paddingLeft: 10,
    paddingRight: 10
  },
  searchBtn: {
    width: 80,
    height: 40,
    backgroundColor: '#2476C3',
    borderRadius: 10,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBtnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  imgWrapper: {
    marginTop: 70,
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
  btnLogout: {
    width: deviceWidth-50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2476C3',
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  btnLogoutText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5,
    fontSize: 15,
  },
})