import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.route.params.name,
      image: this.props.route.params.image,
      email: this.props.route.params.email,
      bio: this.props.route.params.bio,
    }
  }
  save = () => {
    this.props.navigation.navigate('home')
  }
  render() {
    const {name, image, bio, email} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.imgForm}>
            <View style={style.imgWrapper}>
              <Image source={{uri: image}} style={style.img}/>
            </View>
            <TouchableOpacity>
              <Text style={style.imgEditText}>Change avatar</Text>
            </TouchableOpacity>
          </View>
          <View style={style.infoForm}>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Full Name</Text>
              <TextInput
                style={style.formInput}
                value={name}
                onChangeText={(e) => {this.setState({name: e})}}
              />
            </View>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Email</Text>
              <TextInput
                style={style.formInput}
                value={email}
                onChangeText={(e) => {this.setState({email: e})}}
              />
            </View>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Bio</Text>
              <TextInput
                style={style.formInput}
                value={bio}
                onChangeText={(e) => {this.setState({bio: e})}}
              />
            </View>
            <TouchableOpacity style={style.btnEdit} onPress={this.save}>
              <Text style={style.btnEditText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
}

export default EditProfile

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  imgForm: {
    marginTop: 80,
    width: 300,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgWrapper: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 30,
    borderWidth: 2,
    borderColor: '#2476C3'
  },
  img: {
    borderRadius: 50,
    resizeMode: 'cover',
    flex: 1
  },
  imgEditText: {
    color: '#2476C3',
    fontWeight: 'bold'
  },
  infoForm: {
    width: 300,
    alignSelf: 'center',
    marginTop: 30
  },
  formWrapper: {
    marginTop: 10
  },
  formTitle: {
    color: '#B8B8B8'
  },
  formInput: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#2476C3',
    color: 'white'
  },
  btnEdit: {
    width: 300,
    marginTop: 50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2476C3',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnEditText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2
  }
})