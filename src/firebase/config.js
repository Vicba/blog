import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Get Firestore Timestamp
const timestamp = Timestamp;

export { db, timestamp };
