import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'
import MapView from 'react-native-maps'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Location extends Component {
  render() {
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.mapWrapper}>
            <MapView
              style={style.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <TouchableOpacity style={style.btnEdit}>
            <Text style={style.btnEditText}>SHARE LOCATION</Text>
          </TouchableOpacity>
          <View style={style.locationWrapper}>
            <Text style={style.btnEditText}>You're latest location :</Text>
            <Text style={style.locationInfo}>Kedalon, Kalikajar, Wonosobo, Central Java</Text>
          </View>
        </View>
      </>
    )
  }
}

export default Location

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  mapWrapper: {
    marginTop: 30,
    width: 300,
    height: 200,
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