import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Explore extends Component {
  constructor(props){
    super(props)
    this.state = {
      sort: 0
    }
  }
  detail = () => {
    this.props.navigation.navigate('explore-detail')
  }
  render() {
    const asc = [
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
    const desc = [
      {
        id: 1,
        image: 'https://cdn2.tstatic.net/ternate/foto/bank/images/juru-bicara-pemerintah-untuk-penanganan-covid-19-achmad-yurianto.jpg',
        title: 'Tambah 1.693, Jumlah Kasus Virus Corona di Indonesia Jadi 88.214 per 20 Juli 2020'
      },
      {
        id: 2,
        image: 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/ekspresi-lionel-messi-saat-melawa-celta-vigo.jpg',
        title: 'Kalah Bersaing dengan Real Madrid, Barcelona Juga Catatkan Rekor Buruk'
      },
      {
        id: 3,
        image: 'https://cdn1-production-images-kly.akamaized.net/YIRZ6r1cM7GNHoVUWi7v7bTbsXc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3182232/original/027640200_1594951548-000_1VB1M3.jpg',
        title: 'Jos! Real Madrid Juara La Liga 2019/20'
      },
    ]
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.sortWrapper}>
            <Text style={style.sortTitle}>Sort by :</Text>
            {this.state.sort === 0 ? (
              <View style={style.btnSortWrapper}>
                <TouchableOpacity style={style.btnOff} onPress={() => this.setState({sort: 0})}>
                  <Text style={style.btnText}>new</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btnOn} onPress={() => this.setState({sort: 1})}>
                  <Text style={style.btnText}>old</Text>
                </TouchableOpacity>
              </View>
            ):(
              <View style={style.btnSortWrapper}>
                <TouchableOpacity style={style.btnOn2} onPress={() => this.setState({sort: 0})}>
                  <Text style={style.btnText}>new</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btnOff2} onPress={() => this.setState({sort: 1})}>
                  <Text style={style.btnText}>old</Text>
                </TouchableOpacity>
              </View>
            )}
            
          </View>
          {this.state.sort === 0 ? (
            <FlatList
              data={asc}
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
          ):(
            <FlatList
              data={desc}
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
          )}
          
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
  },
  sortWrapper: {
    flexDirection: 'row',
    width: 350,
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center'
  },
  sortTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  btnSortWrapper: {
    flexDirection: 'row',
    marginLeft: 10
  },
  btnOn: {
    width: 50,
    height: 25,
    backgroundColor: '#2476C3',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  btnOff: {
    width: 50,
    height: 25,
    borderWidth: 1,
    borderColor: '#2476C3',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnOn2: {
    width: 50,
    height: 25,
    backgroundColor: '#2476C3',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnOff2: {
    width: 50,
    height: 25,
    borderWidth: 1,
    borderColor: '#2476C3',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  btnText: {
    color: 'white'
  }
})