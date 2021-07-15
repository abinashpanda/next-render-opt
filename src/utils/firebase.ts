import firebase from 'firebase/app'
import 'firebase/auth'

try {
  firebase.initializeApp({
    apiKey: 'AIzaSyBbsTjTtQvbOK_aIvY190OiInTmDefWewM',
    authDomain: 'next-render-opt.firebaseapp.com',
    projectId: 'next-render-opt',
    storageBucket: 'next-render-opt.appspot.com',
    messagingSenderId: '820840089071',
    appId: '1:820840089071:web:107e41341c975a36f6221a',
  })
} catch (error) {}

export const auth = firebase.auth()
