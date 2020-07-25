import React, {Component} from 'react'
import {View, ActivityIndicator, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image, Alert} 
      from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import {connect} from 'react-redux'
import {setLocation} from '../redux/actions/user'
import Geolocation from '@react-native-community/geolocation'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Location extends Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      email: this.props.auth.email,
      x: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }
  modal = () => {
    Alert.alert(
      'Are you sure?',
      "Your friends can see your location",
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
        { text: 'Share', 
          onPress: this.shareLoc 
      }
      ],
      { cancelable: false }
    )
  }
  shareLoc = () => {
    const {x, email} = this.state

    this.props.setLocation(email, x.latitude, x.longitude).then(() => {
      Alert.alert('OK!', 'Your location has been shared')
    }).catch(function() {
      Alert.alert('Oops!', 'Failed to share location')
    })
  }
  componentDidUpdate(){
    console.log(this.state.x)
  }
  componentDidMount(){
    Geolocation.getCurrentPosition(info => this.setState({
      latitude: info.coords.latitude,
      longitude: info.coords.longitude,
      x:{
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
      }
    }))
  }
  render() {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state
    const {isLoadingLoc, isLoading} = this.props.user
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          {isLoading? (
            <View style={style.loading}>
              <ActivityIndicator size='large' color='white' />
            </View>
          ):(
            <>
              <View style={style.mapWrapper}>
                <MapView
                  style={style.map}
                  initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: latitudeDelta,
                    longitudeDelta: longitudeDelta,
                  }}>
                  <Marker draggable
                    coordinate={this.state.x}
                    image={require('../assets/marker.png')}
                    onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                  />
                </MapView>
              </View>
              {isLoadingLoc ? (
                <View style={style.btnEdit}>
                  <ActivityIndicator size='small' color='white' />
                </View>
              ):(
                <TouchableOpacity style={style.btnEdit} onPress={this.modal}>
                  <Text style={style.btnEditText}>SHARE LOCATION</Text>
                </TouchableOpacity>
              )}
              {/* <View style={style.locationWrapper}>
                <Text style={style.btnEditText}>You're latest location :</Text>
                <Text style={style.locationInfo}>Kedalon, Kalikajar, Wonosobo, Central Java</Text>
              </View> */}
            </>
          )}
        </View>
      </>
    )
  }
}

const mapDispatchToProps = {setLocation}
const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Location)

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  loading: {
    marginTop: 20,
    alignSelf: 'center'
  },
  mapWrapper: {
    marginTop: 30,
    width: 300,
    height: 400,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  map: {
    flex: 1,
  },
  btnEdit: {
    width: 300,
    marginTop: 20,
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
  },
  locationWrapper: {
    width: 300,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    alignSelf: 'center',
    marginTop: 40
  },
  locationInfo: {
    color: 'white',
    marginTop: 20
  }
})