import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image, Alert, ActivityIndicator} 
      from 'react-native'
import {connect} from 'react-redux'
import {searchUser} from '../redux/actions/user'
import storage from '@react-native-firebase/storage'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class AddChat extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '-',
      username: '-',
      bio: '-',
      image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
      imageName: '',
      location: {},
      email: ''
    }
  }
  chat = () => {
    const {name, image, email, bio, location, username} = this.state

    this.props.navigation.navigate('chat-detail', {
      name: name,
      image: image,
      email: email,
      myEmail: this.props.auth.email,
      bio: bio,
      location: location,
      username: username
    })
  }
  search = () => {
    const {email} = this.state

    this.props.searchUser(email).then(() => {
      this.setState({
        name: this.props.user.dataSearch.fullname,
        username: this.props.user.dataSearch.username,
        bio: this.props.user.dataSearch.bio,
        imageName: this.props.user.dataSearch.image,
        location: this.props.user.dataSearch.location,
      })
      this.getUrlUpload()
    }).catch(function() {
      Alert.alert('Hmmm', `Can't found ${email}`)
    })
  }
  getUrlUpload = () => {
    const {imageName} = this.state
    storage().ref(imageName).getDownloadURL().then((url) => {
      this.setState({image: url})
    })
  }
  render() {
    const {name, username, bio, image} = this.state
    const {isLoadingSearch} = this.props.user
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          {isLoadingSearch ? (
            <View style={style.loading}>
              <ActivityIndicator size='large' color='white'/>
            </View>
          ):(
            <>
              <View style={style.header}>
                <TextInput 
                  placeholder='Looking for someone?' 
                  placeholderTextColor='#B8B8B8'
                  style={style.searchInput}
                  onChangeText={(e) => {this.setState({email: e})}}
                />
                <TouchableOpacity style={style.searchBtn} onPress={this.search}>
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
                  <Text style={style.subTitle}>@ {username}</Text>
                  <View style={style.line} />
                </View>
                <View style={style.infoWrapper}>
                  <Text style={style.title}>Bio</Text>
                  <Text style={style.subTitle}>{bio}</Text>
                  <View style={style.line} />
                </View>
                {username === '-' ? (
                  <>
                  </>
                ):(
                  <TouchableOpacity style={style.btnLogout} onPress={this.chat}>
                    <Text style={style.btnLogoutText}>START CHAT</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </View>
      </>
    )
  }
}

const mapDispatchToProps = {searchUser}
const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(AddChat)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  loading: {
    alignSelf: 'center',
    marginTop: 50
  },
  header: {
    marginTop: 50,
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