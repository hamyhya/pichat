import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useNavigation, useRoute} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const ChatDetail = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const [messages, setMessages] = useState([]);

  const state = {
    image: route.params.image,
    name: route.params.name,
    username: route.params.username,
    bio: route.params.bio,
    location: route.params.location,
    email: route.params.email,
    myEmail: route.params.myEmail,
  }

  const res = state.myEmail.replace('@', '0')
  const res2 = state.email.replace('@', '0')
  const userId = res.replace('.', '0')
  const userReceive = res2.replace('.', '0')

  useEffect(() => {
    const onChildAdd = getMessage((message) =>
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, message),
      ),
    );
    return () =>
      database()
        .ref(`/chat/${userId}/${userReceive}`)
        .off('child_added', onChildAdd);
  }, [userReceive]);

  const getMessage = (callback) => {
    database()
      .ref(`/chat/${userId}/${userReceive}`)
      .limitToLast(20)
      .on('child_added', (snapshot) => callback(fetch(snapshot)));
  };

  const fetch = (snapshot) => {
    const {timestamp, text, user} = snapshot.val();
    const {key: _id} = snapshot;
    const message = {
      _id,
      createdAt: timestamp,
      text,
      user,
    };
    return message;
  }

  // const getMessage = () => {
  //   const res = state.myEmail.replace('@', '0')
  //   const res2 = state.email.replace('@', '0')
  //   const userId = res.replace('.', '0')
  //   const userReceive = res2.replace('.', '0')
  //   database()
  //     .ref(`/chat/${userId}/${userReceive}`)
  //     .once('value')
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         const {timestamp, text, user} = doc.val();
  //         const {key: _id} = doc;
  //         const message = {_id, timestamp, text, user};
  //         setMessages((previousMessages) =>
  //           GiftedChat.append(previousMessages, message),
  //         );
  //       });
  //     });
  //  };

  const sendMessage = useCallback((messages = []) => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const message = {
        _id: new Date().getTime(),
        text,
        user,
        timestamp: new Date().getTime(),
      };
      const send = database().ref(
        `/chat/${userId}/${userReceive}/${new Date().getTime()}`,
      );
      const receive = database().ref(
        `/chat/${userReceive}/${userId}/${new Date().getTime()}`,
      );
      send.set(message);
      receive.set(message);
    }
  }, []);

  return (
    <View style={style.fill}>
      <TouchableOpacity style={style.header} onPress={() => {navigation.navigate('user-detail', {
      image: state.image,
      name: state.name,
      username: state.username,
      bio: state.bio,
      location: state.location,
    })}}>
        <View style={style.imgWrapper}>
          <Image style={style.img} source={{uri: state.image}}/>
        </View>
        <View>
          <Text style={style.name}>{state.name}</Text>
          <Text style={style.bio}>{state.bio}</Text>
        </View>
      </TouchableOpacity>
      <GiftedChat
        messages={messages}
        onSend={(messages) => sendMessage(messages)}
        user={{
          _id: userReceive,
        }}
      />
    </View>
  );
};

export default ChatDetail;

const style = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#1B1B1B'
  },
  header: {
    height: 60,
    backgroundColor: '#2B2B2B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50
  },
  imgWrapper: {
    backgroundColor: 'white',
    width: 40, 
    height: 40,
    borderRadius: 50,
    marginRight: 10
  },
  img: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 50
  },
  name: {
    color: 'white',
    fontWeight: 'bold'
  },
  bio: {
    color: '#B8B8B8'
  },
})