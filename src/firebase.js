import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBDK8XtVGKA9xFSNNRKcZ3d-BxV4iZ62ZM',
  authDomain: 'esports-historia.firebaseapp.com',
  projectId: 'esports-historia',
  storageBucket: 'esports-historia.firebasestorage.app',
  messagingSenderId: '1017731832029',
  appId: '1:1017731832029:web:8b4486c8f3d5cbe639e334',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)