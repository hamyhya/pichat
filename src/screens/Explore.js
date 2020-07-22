import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Explore extends Component {
  detail = () => {
    this.props.navigation.navigate('explore-detail')
  }
  render() {
    const data = [
      {
        id: 1,
        image: 'https://cdn1-production-images-kly.akamaized.net/YIRZ6r1cM7GNHoVUWi7v7bTbsXc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3182232/original/027640200_1594951548-000_1VB1M3.jpg',
        title: 'Jos! Real Madrid Juara La Liga 2019/20'
      },
      {
        id: 2,
        image: 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/ekspresi-lionel-messi-saat-melawa-celta-vigo.jpg',
        title: 'Kalah Bersaing dengan Real Madrid, Barcelona Juga Catatkan Rekor Buruk'
      },
      {
        id: 3,
        image: 'https://cdn2.tstatic.net/ternate/foto/bank/images/juru-bicara-pemerintah-untuk-penanganan-covid-19-achmad-yurianto.jpg',
        title: 'Tambah 1.693, Jumlah Kasus Virus Corona di Indonesia Jadi 88.214 per 20 Juli 2020'
      },
    ]
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <FlatList
            data={data}
            style={style.flatList}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('explore-detail', 
              {image: item.image, title: item.title}
              )}>
                <List
                  image={item.image}
                  title={item.title}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </>
    )
  }
}

class List extends Component {
  render(){
    return(
      <>
        <View style={style.listWrapper}>
          <View style={style.imgWrapper}>
            <Image
              source={{uri: this.props.image}}
              style={style.img}
            />
          </View>
          <Text style={style.title}>{this.props.title}</Text>
        </View>
      </>
    )
  }
}

export default Explore

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  flatList: {
    marginTop: 20,
    marginBottom: 15
  },
  listWrapper: {
    width: 350,
    height: 210,
    borderRadius: 10,
    backgroundColor: '#2B2B2B',
    alignSelf: 'center',
    marginTop: 10
  },
  imgWrapper: {
    height: 150,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  img: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 10
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5
  }
})