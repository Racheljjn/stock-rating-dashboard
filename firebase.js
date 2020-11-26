import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCaAXdfjvSY0l6o3iTw4c_u2AGxQSlk0Bc",
    authDomain: "stockdash-1f281.firebaseapp.com",
    databaseURL: "https://stockdash-1f281.firebaseio.com",
    projectId: "stockdash-1f281",
    storageBucket: "stockdash-1f281.appspot.com",
    messagingSenderId: "66517576434",
    appId: "1:66517576434:web:1b46526e09af55510c3e6b"
})
 
export const auth = app.auth()
export default app