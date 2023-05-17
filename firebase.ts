// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwTqF72PAt2kiilkeTGZ4SOxMXacNjF04",
    authDomain: "netflix-clone-b020e.firebaseapp.com",
    projectId: "netflix-clone-b020e",
    storageBucket: "netflix-clone-b020e.appspot.com",
    messagingSenderId: "818365238723",
    appId: "1:818365238723:web:a78b20c9cbcb60822a8176"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }