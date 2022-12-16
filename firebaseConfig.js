// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { initializeAppCheck } from 'firebase/app-check'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics"
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
// const appCheck = initializeAppCheck(app, {
//   // appcheck public key
//   provider: new ReCaptchaV3Provider('6LfRcgMjAAAAAFJq2BsugaQf0qbZcrBqIBpbKvmN'),
//   isTokenAutoRefreshEnabled: true
// })
const analytics = getAnalytics(app)
const functions = getFunctions(app)
const auth = getAuth(app)

export { 
  app, 
  analytics, 
  auth,
  functions
}