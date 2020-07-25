import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

const createUser = (email, username)=>{
  return {
    type: 'CREATEUSER',
    payload: firestore()
    .collection('users')
    .doc(email)
    .set({
      username: username,
      fullname: '-',
      bio: '-',
      image: 'ava.jpg',
      location: {
        latitude: -6.200000,
        longitude: 106.816666
      }
    })
  }
}
const getUser = (email)=>{
  return {
    type: 'GETUSER',
    payload: firestore()
    .collection('users')
    .doc(email)
    .get()
  }
}
const searchUser = (email)=>{
  return {
    type: 'SEARCHUSER',
    payload: firestore()
    .collection('users')
    .doc(email)
    .get()
  }
}
const editUser = (email, name, bio, username, imageName)=>{
  return {
    type: 'CREATEUSER',
    payload: firestore()
    .collection('users')
    .doc(email)
    .update({
      fullname: name,
      username: username,
      bio: bio,
      image: imageName
    })
  }
}
const deleteAvatar = (email)=>{
  return {
    type: 'REMOVEAVA',
    payload: firestore()
    .collection('users')
    .doc(email)
    .update({
      image: 'ava.jpg'
    })
  }
}
const uploadImage = (imageName, image)=>{
  return {
    type: 'UPLOADIMG',
    payload: storage()
    .ref(imageName)
    .putFile(image)
  }
}
const setLocation = (email, latitude, longitude)=>{
  return {
    type: 'LOCATION',
    payload: firestore()
    .collection('users')
    .doc(email)
    .update({
      location: {
        latitude: latitude,
        longitude: longitude
      }
    })
  }
}

export {createUser, getUser, searchUser, editUser, uploadImage, setLocation, deleteAvatar}