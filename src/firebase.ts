import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDuBB_YJlzJwwqOC8qmPP_Da06n2jbqWqo",
  authDomain: "eduly-ai.firebaseapp.com",
  projectId: "eduly-ai",
  storageBucket: "eduly-ai.firebasestorage.app",
  messagingSenderId: "477035123539",
  appId: "1:477035123539:web:b2b49eadd23b79cd1147a6"
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)