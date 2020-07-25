import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'
import MapView, {Marker} from 'react-native-maps'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class FriendLocation extends Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: this.props.route.params.location.latitude,
      longitude: this.props.route.params.location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      x: {
        latitude: this.props.route.params.location.latitude,
        longitude: this.props.route.params.location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }
  back = () => {
    this.props.navigation.goBack()
  }
  render() {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <MapView
          style={style.fill}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}>
          <Marker
            coordinate={this.state.x}
            image={require('../assets/marker.png')}
            onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
          />
        </MapView>
        <TouchableOpacity style={style.btn} onPress={this.back}>
          <Text style={style.btnText}>BACK</Text>
        </TouchableOpacity>
      </>
    )
  }
}

export default FriendLocation

const style = StyleSheet.create({
  fill: {
    flex: 1,
  },
  btn: {
    width: deviceWidth-100,
    height: 50,
    backgroundColor: '#2476C3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -65,
    marginBottom: 15
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2
  }
})