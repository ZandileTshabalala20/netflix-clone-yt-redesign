// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABhFBCGXGKN_26yHnK-hdt9tFul5Up04M",
    authDomain: "netflix-clone-yt-b5a87.firebaseapp.com",
    projectId: "netflix-clone-yt-b5a87",
    storageBucket: "netflix-clone-yt-b5a87.appspot.com",
    messagingSenderId: "101138495843",
    appId: "1:101138495843:web:3ca4310997d64d43a73b56"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }