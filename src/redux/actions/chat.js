import database from '@react-native-firebase/database'

const getChat = ()=>{
  return {
    type: 'GETCHAT',
    payload: database()
    .ref('/chat/ilham/bagas')
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
    })
  }
}

export {getChat}