import firestore from '@react-native-firebase/firestore'

const createUser = (email, username)=>{
  return {
    type: 'CREATEUSER',
    payload: firestore()
    .collection('users')
    .doc(email)
    .set({
      username: username,
      fullname: '-',
      bio: '-'
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
const editUser = (email, name, bio, username)=>{
  return {
    type: 'CREATEUSER',
    payload: firestore()
    .collection('users')
    .doc(email)
    .update({
      fullname: name,
      username: username,
      bio: bio
    })
  }
}

export {createUser, getUser, editUser}