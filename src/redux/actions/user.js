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
      image: 'ava.jpg'
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
const uploadImage = (imageName, image)=>{
  return {
    type: 'UPLOADIMG',
    payload: storage()
    .ref(imageName)
    .putFile(image)
  }
}

export {createUser, getUser, editUser, uploadImage}