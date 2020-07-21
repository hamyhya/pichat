import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Login extends Component {
  register = () => {
    this.props.navigation.navigate('register')
  }
  login = () => {
    this.props.navigation.navigate('home')
  }
  render() {
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.header}>
            <Text style={style.title}>p!</Text>
          </View>
          <View style={style.formWrapper}>
            <TextInput 
              placeholder='Email'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
            />
            <TextInput 
              placeholder='Password'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
              secureTextEntry
            />
            <TouchableOpacity style={style.btn} onPress={this.login}>
              <Text style={style.btntext}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.footer} onPress={this.register}>
              <Text style={style.footerText}>New user? Join here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}



export default Login

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  header: {
    width: 90,
    height: 90,
    backgroundColor: '#2476C3',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
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