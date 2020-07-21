import React, {Component} from 'react'
import {View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity,
        Text, FlatList, Image} 
      from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

class Chat extends Component {
  register = () => {
    this.props.navigation.navigate('register')
  }
  render() {
    const data = [
      {
        id: 1,
        name: 'Adik Kelas',
        image: 'https://inikpop.com/wp-content/uploads/2018/10/header-22.jpg',
        chat: 'Assalamualaikum kak',
        date: '17:38'
      },
      {
        id: 2,
        name: 'Chelsea Islan',
        image: 'https://www.nusabali.com/article_images/50144/chelsea-islan-imbau-pemuda-tak-golput-800-2019-04-08-142033_0.jpg',
        chat: 'Lagi apah?',
        date: '10:38'
      },
      {
        id: 3,
        name: 'Citra neww',
        image: 'https://cdn1-production-images-kly.akamaized.net/tmIGEGCsOkWOmKR8h60WHHWMR18=/1x72:1080x680/375x211/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3153640/original/077775200_1592279280-98116458_248059119952243_2879662084095306537_n.jpg',
        chat: 'Ham, sibuk nggak?',
        date: '10:12'
      },
      {
        id: 4,
        name: 'Mbak Isa',
        image: 'https://img.okezone.com/content/2020/02/05/194/2163765/daftar-100-wanita-tercantik-di-dunia-pesona-raisa-kalahkan-dua-lipa-fJSgQ61c9p.jpg',
        chat: 'Ilham??',
        date: '10:05'
      },
      {
        id: 5,
        name: 'Lisa',
        image: 'https://www.nusabali.com/article_images/51115/lisa-blackpink-wanita-tercantik-di-dunia-800-2019-04-25-171318_0.jpg',
        chat: 'Woyyyyy',
        date: '9:324'
      },
      {
        id: 6,
        name: 'Tzuyu',
        image: 'https://www.minews.id/wp-content/uploads/2019/12/Tzuyu.jpg',
        chat: 'Main skuy ;)',
        date: '8:38'
      },
      {
        id: 7,
        name: 'Chelsea Islan',
        image: 'https://inikpop.com/wp-content/uploads/2018/10/header-22.jpg',
        chat: 'Woyyyyyyy?',
        date: '10:38'
      },
      {
        id: 8,
        name: 'Chelsea Islan',
        image: 'https://inikpop.com/wp-content/uploads/2018/10/header-22.jpg',
        chat: 'Woyyyyyyy?',
        date: '10:38'
      },
    ]
    return(
      <>
        <StatusBar backgroundColor='#121212' />
        <View style={style.fill}>
          <View style={style.chatWrapper}>
            <View style={style.header}>
              <TextInput 
                placeholder='Find conversations' 
                placeholderTextColor='#B8B8B8'
                style={style.searchInput}
              />
              <TouchableOpacity style={style.searchBtn}>
                <Text style={style.searchBtnText}>search</Text>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={data}
                style={style.flatList}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('chat-detail', 
                  {image: item.image, name: item.name, chat: item.chat})}>
                    <List
                      name={item.name}
                      image={item.image}
                      chat={item.chat}
                      date={item.date}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
          <View style={style.btnWrapper}>
            <TouchableOpacity style={style.btn} >
              <Text style={style.btnText}>+</Text>
            </TouchableOpacity>
          </View>
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
          <View style={style.chatInfoWrapper}>
            <View style={style.imgWrapper}>
              <Image 
                source={{uri: this.props.image}}
                style={style.img}
              />
            </View>
            <View>
              <Text style={style.chatTitle}>{this.props.name}</Text>
              <Text style={style.chatSubTitle}>{this.props.chat}</Text>
            </View>
          </View>
          <Text style={style.chatDate}>{this.props.date}</Text>
        </View>
        <View style={style.line} />
      </>
    )
  }
}

export default Chat

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  chatWrapper: {
    backgroundColor: '#1B1B1B',
    flex: 5
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  searchInput: {
    width: 250,
    height: 40,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#2B2B2B',
    paddingLeft: 10,
    paddingRight: 10
  },
  searchBtn: {
    width: 80,
    height: 40,
    backgroundColor: '#2476C3',
    borderRadius: 10,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchBtnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  flatList: {
    marginBottom: 15
  },
  listWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  chatInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 10
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 50
  },
  chatTitle: {
    color: 'white',
    fontWeight: 'bold'
  },
  chatSubTitle: {
    color: 'white',
  },
  chatDate: {
    color: '#2476C3',
  },
  line: {
    width: deviceWidth-20,
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#2476C3',
    marginTop: 10
  },
  btnWrapper: {
    marginTop: -120,
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#2476C3',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35
  }
})