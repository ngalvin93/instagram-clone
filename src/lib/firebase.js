import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { seedDatabase } from "../seed";
import 'firebase/auth'

const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = initializeApp(config);
const db = getFirestore();

seedDatabase(db);

export { firebaseApp, db }