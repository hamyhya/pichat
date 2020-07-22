import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class ExploreDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: this.props.route.params.image,
      title: this.props.route.params.title
    }
  }
  render() {
    const {image, title} = this.state
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.detail}>
            <Text style={style.title}>{title}</Text>  
            <View style={style.imgWrapper}>
              <Image source={{uri: image}} style={style.img} />
            </View>
            <Text style={style.description}>
            Madrid mengunci gelar juara Liga Spanyol usai mengalahkan Villarreal 2-1 pada Jumat 
            (17/7/2020) dini hari WIB. Mengumpulkan 86 poin dari 37 pertandingan, Madrid sudah tak mungkin 
            dikejar oleh Barcelona yang punya 79 poin.

            Dalam perjalanannya menuju tangga juara Liga Spanyol, Madrid menyapu bersih kemenangan dalam 
            pertandingan-pertandingan setelah kompetisi dilanjutkan untuk menyalip Barcelona di klasemen. 
            Tim arahan Zinedine Zidane memenangi 10 laga secara beruntun.
            </Text>
          </View>
        </View>
      </>
    )
  }
}

export default ExploreDetail

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  detail: {
    width: 300,
    alignSelf: 'center',
    marginTop: 60
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  imgWrapper: {
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15
  },
  img: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10
  },
  description: {
    color: 'white',
    marginTop: 30
  }
})