import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, Alert, ActivityIndicator, Image} 
      from 'react-native'
import ImagePicker from 'react-native-image-picker'
    
import {connect} from 'react-redux'
import {editUser, uploadImage} from '../redux/actions/user'
import {logout} from '../redux/actions/auth'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.route.params.name,
      image: this.props.route.params.image,
      imageName: 'Change Avatar',
      imageUrl: this.props.route.params.image,
      username: this.props.route.params.username,
      bio: this.props.route.params.bio,
      email: this.props.route.params.email,
      isLoading: this.props.user.isLoading,
      isLoadingImg: this.props.user.isLoadingImg,
      imgSource: []
    }
  }
  logoutModal = () => {
    Alert.alert(
      'Are you sure?',
      "You'll redirected to login page",
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
        { text: 'Okay', 
          onPress: this.save 
      }
      ],
      { cancelable: false }
    )
  }
  save = () => {
    const {name, username, bio, email, imageName} = this.state

    this.props.editUser(email, name, bio, username, imageName).then(() => {
      this.props.logout()
      this.props.navigation.navigate('login')
      Alert.alert('Yay!', 'Succes, now restart your session')
    }).catch(function() {
      Alert.alert('Oops!', 'Failed update data :(')
    })
    
  }
  selectImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.uri;
        this.setState({
          image: uri,
          imageName: response.fileName,
          imgSource: response
        });
      }
    })
  }
  upload = () => {
    const {imageName, image, imgSource} = this.state

    if(imgSource.fileSize <= 1500000 && imgSource.type === 'image/jpeg'){
      this.props.uploadImage(imageName, image).then(() => {
        Alert.alert('Yay!', 'Success upload image')
      })
    }else {
      Alert.alert('Ooops!', 'Please select image less than 1,5 mb')
    }
  }
  render() {
    const {name, image, bio, username, isLoading, imageName, isLoadingImg} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.imgForm}>
            <View style={style.imgWrapper}>
              <Image source={{uri: image}} style={style.img}/>
            </View>
            <View>
              <TouchableOpacity onPress={this.selectImage}>
                <Text style={style.imgEditText}>{imageName}</Text>
              </TouchableOpacity>
              {isLoadingImg ? (
                <View style={style.uploadBtn}>
                <ActivityIndicator size='small' color='white' />
              </View>
              ):(
                <TouchableOpacity style={style.uploadBtn} onPress={this.upload}>
                <Text style={style.uploadBtnText}>upload</Text>
              </TouchableOpacity>
              )}
            </View>
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
              <Text style={style.formTitle}>Username</Text>
              <TextInput
                style={style.formInput}
                value={username}
                onChangeText={(e) => {this.setState({username: e})}}
              />
            </View>
            <View style={style.formWrapper}>
              <Text style={style.formTitle}>Bio</Text>
              <TextInput
                style={style.formInput}
                value={bio}
                onChangeText={(e) => {this.setState({bio: e})}}
                multiline
              />
            </View>
            {!isLoading ? (
              <TouchableOpacity style={style.btnEdit} onPress={this.logoutModal}>
                <Text style={style.btnEditText}>SAVE</Text>
              </TouchableOpacity>
            ):(
            <View style={style.btnEdit}>
              <Text style={style.btnEditText}>SAVE</Text>
            </View>
            )}
          </View>
        </View>
      </>
    )
  }
}

const mapDispatchToProps = {editUser, logout, uploadImage}
const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

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
  uploadBtn: {
    marginTop: 10,
    width: 60,
    height: 22,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadBtnText: {
    color: 'white'
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