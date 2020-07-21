import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Register extends Component {
  render() {
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.header}>
            <Text style={style.title}>JOIN</Text>
          </View>
          <View style={style.formWrapper}>
            <TextInput 
              placeholder='Email'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
            />
            <TextInput 
              placeholder='Username'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
            />
            <TextInput 
              placeholder='Password'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
              secureTextEntry
            />
            <TouchableOpacity style={style.btn}>
              <Text style={style.btntext}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default Register

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  header: {
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 5
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
    textDecorationLine: 'underline'
  }
})