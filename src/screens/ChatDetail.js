import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {useNavigation, useRoute} from '@react-navigation/native';
import database from '@react-native-firebase/database';

const ChatDetail = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    ReceiveMessage();
  }, []);

  const ReceiveMessage = () => {
    const userId = 'bagas'
    database()
      .ref(`/chat/${userId}/ilham`)
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const {timestamp, text, user} = doc.val();
          const {key: _id} = doc;
          const message = {_id, timestamp, text, user};
          setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, message),
          );
        });
      });
  };

  const sendMessage = useCallback((messages = []) => {
    for (let i = 0; i < messages.length; i++) {
      const {text, user} = messages[i];
      const userId = 'ilham'
      const userReceive = 'bagas'
      const message = {
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
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
      send.set(message);
      receive.set(message);
    }
  }, []);
  
  const state = {
    image: route.params.image,
    name: route.params.name,
  }
  return (
    <View style={style.fill}>
      <TouchableOpacity style={style.header}>
        <View style={style.imgWrapper}>
          <Image style={style.img} source={{uri: state.image}}/>
        </View>
        <View>
          <Text style={style.name}>{state.name}</Text>
          <Text style={style.bio}>Hey there! I'm not using Whatsapp</Text>
        </View>
      </TouchableOpacity>
      <GiftedChat
        messages={messages}
        onSend={(messages) => sendMessage(messages)}
        user={{
          _id: 'ilham',
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