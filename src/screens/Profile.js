import React, {Component} from 'react'
import {View, ScrollView, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, Alert, Image, ActivityIndicator} 
      from 'react-native'

import {connect} from 'react-redux'
import {logout} from '../redux/actions/auth'
import {getUser} from '../redux/actions/user'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.dataUser.fullname,
      image: 'https://pbs.twimg.com/profile_images/1255095743112765441/_rqz4BY3.jpg',
      username: this.props.user.dataUser.username,
      bio: this.props.user.dataUser.bio,
      email: this.props.auth.email,
      isLoading: this.props.user.isLoading
    }
  }
  edit = () => {
    const {name, image, username, bio, email} = this.state
    this.props.navigation.navigate('edit-profile', 
    {image: image, name: name, username: username, bio: bio, email: email})
  }
  logoutModal = () => {
    Alert.alert(
      'Are you sure?',
      "You'll leave me alone :(",
      [
        {
          text: '',
          // onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Logout', 
          onPress: this.logout 
      }
      ],
      { cancelable: false }
    )
  }
  logout = () => {
    this.props.logout()
    this.props.navigation.navigate('login')
  }
  fetchUser = () => {
    const email =this.state.email
    this.props.getUser(email)
  }

  componentDidMount() {
    this.fetchUser()
  }
  render() {
    const {name, image, username, bio, email, isLoading} = this.state
    // const {username} = this.props.user.dataUser
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          {!isLoading ? (
            <>
              <View style={style.imgWrapper}>
                <Image
                  source={{uri: image}}
                  style={style.img} 
                />
              </View>
              <TouchableOpacity style={style.btnEdit} onPress={this.edit}>
                <Text style={style.btnEditText}>Edit</Text>
              </TouchableOpacity>
              <ScrollView style={style.info}>
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
                <TouchableOpacity style={style.btnLogout} onPress={this.logoutModal}>
                  <Text style={style.btnLogoutText}>LOGOUT</Text>
                </TouchableOpacity>
              </ScrollView>
            </>
          ):(
            <View style={style.loading}>
              <ActivityIndicator size='large' color='white' />
            </View>
          )}
        </View>
      </>
    )
  }
}

const mapDispatchToProps = {logout, getUser}
const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  loading: {
    alignSelf: 'center',
    marginTop: 50
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
  btnLogout: {
    width: deviceWidth-50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#b71c1c',
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
  btnEdit: {
    marginTop: 5,
    width: 50,
    height: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2476C3',
    borderRadius: 5
  },
  btnEditText: {
    color: 'white'
  }
})