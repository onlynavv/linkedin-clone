import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDT1jiGxM7UJghDZwcRXAMYl7bGtV9ze5g",
  authDomain: "linkedin-clone-ef0a7.firebaseapp.com",
  projectId: "linkedin-clone-ef0a7",
  storageBucket: "linkedin-clone-ef0a7.appspot.com",
  messagingSenderId: "933547687675",
  appId: "1:933547687675:web:2b6fe2150fdb9c7470ba5e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth};