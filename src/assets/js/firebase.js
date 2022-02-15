// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyAPFPtUrFDEK5hta81lPzK57v0os_307WU',
  authDomain: 'kakao-web-a34f3.firebaseapp.com',
  projectId: 'kakao-web-a34f3',
  storageBucket: 'kakao-web-a34f3.appspot.com',
  messagingSenderId: '604887150196',
  appId: '1:604887150196:web:35be83aef2c3b348a3ab21'
}
export const app = initializeApp(firebaseConfig)
console.log(app)
