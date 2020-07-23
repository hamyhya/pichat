import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, Alert, ActivityIndicator, Image} 
      from 'react-native'
import {connect} from 'react-redux'
import {login} from '../redux/actions/auth'
import {getUser} from '../redux/actions/user'
import AnimatedSplash from "react-native-animated-splash-screen"
import logo from '../assets/logo.png'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      isLoaded: false
    }
  }
  register = () => {
    this.props.navigation.navigate('register')
  }
  fetchUser = () => {
    const email = 'bagas@mail.com'
    this.props.getUser(email)
  }
  login = () => {
    const { email, password } = this.state

    this.props.login(email, password).then(() => {
      this.props.navigation.navigate('home')
    }).catch(function() {
      Alert.alert('Ooops!', 'Incorrect email or password :(')
    })
  }
  loaded = () => {
    this.setState({isLoaded: true})
  }
  componentDidMount(){
    setTimeout(this.loaded, 3000)
  }
  render() {
    const loading = {
      user: this.props.user.isLoading,
      auth: this.props.auth.isLoading
    }
    const {isLoaded} =this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        {isLoaded ? (
          <View style={style.fill}>
            <View style={style.header}>
              <Image source={logo} style={style.img}/>
            </View>
            <View style={style.formWrapper}>
              <TextInput 
                placeholder='Email'
                style={style.input} 
                placeholderTextColor='#B8B8B8'
                onChangeText={(e) => {this.setState({email: e})}}
              />
              <TextInput 
                placeholder='Password'
                style={style.input} 
                placeholderTextColor='#B8B8B8'
                secureTextEntry
                onChangeText={(e) => {this.setState({password: e})}}
              />
              {!loading.user && !loading.auth ? (
              <TouchableOpacity style={style.btn} onPress={this.login}>
                <Text style={style.btntext}>LOGIN</Text>
              </TouchableOpacity>
              ):(
                <View style={style.btn}>
                  <ActivityIndicator size='large' color='white' />
                </View>
              )}
              <TouchableOpacity style={style.footer} onPress={this.register}>
                <Text style={style.footerText}>New user? Join here</Text>
              </TouchableOpacity>
            </View>
          </View>
        ):(
          <AnimatedSplash
            translucent={true}
            isLoaded={isLoaded}
            logoImage={require("../assets/splash.png")}
            backgroundColor={"#1B1B1B"}
            logoHeight={120}
            logoWidht={120}
          />
        )}
      </>
    )
  }
}

const mapDispatchToProps = {login, getUser}
const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  header: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 50,
  },
  img: {
    flex: 1, 
    resizeMode: 'cover',
    width: 90,
    height: 90,
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  formWrapper: {
    marginTop: 60
  },
  input: {
    marginTop: 15,
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: '#2B2B2B',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white'
  },
  btn: {
    marginTop: 30,
    width: 300,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2476C3'
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5,
    fontSize: 15
  },
  footer: {
    marginTop: 15,
    alignSelf: 'center'
  },
  footerText: {
    color: '#2476C3',
    textDecorationLine: 'underline',
    letterSpacing: 2
  }
})