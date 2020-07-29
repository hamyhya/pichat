import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, Alert, ActivityIndicator} 
      from 'react-native'

import {connect} from 'react-redux'
import {register} from '../redux/actions/auth'
import {createUser} from '../redux/actions/user'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  register = () => {
    const {email, password, username} = this.state

    if(email === '' || email === ' ' || username === '' || username === ' ' || password === ''){
      Alert.alert('Ooops!', 'All form must be filled')
    }else {
      this.props.register(email, password).then(() => {
        this.props.createUser(email, username).then(() => {
          this.props.navigation.navigate('login')
          Alert.alert('Yay!', 'Register successfully')
        }).catch(function ()  {
          Alert.alert('Oops!', 'Registered failed')
        })
      }).catch(function ()  {
        Alert.alert('Oops!', 'Registered failed')
      })
    }
  }
  render() {
    const {isLoading} = this.props.auth

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
              onChangeText={(e) => {this.setState({email: e})}}
            />
            <TextInput 
              placeholder='Username'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
              onChangeText={(e) => {this.setState({username: e})}}
            />
            <TextInput 
              placeholder='Password'
              style={style.input} 
              placeholderTextColor='#B8B8B8'
              secureTextEntry
              onChangeText={(e) => {this.setState({password: e})}}
            />
            {!isLoading ? (
              <TouchableOpacity style={style.btn} onPress={this.register}>
                <Text style={style.btntext}>REGISTER</Text>
              </TouchableOpacity>
            ):(
              <View style={style.btn}>
                <ActivityIndicator size='large' color='white' />
              </View>
            )}
          </View>
        </View>
      </>
    )
  }
}

const mapDispatchToProps = {register, createUser}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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