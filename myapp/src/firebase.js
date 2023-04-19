import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAtGUokcQCdVUfE1HGSsAvkrJXwGYsuMTs",
  authDomain: "clone-dcb26.firebaseapp.com",
  projectId: "clone-dcb26",
  storageBucket: "clone-dcb26.appspot.com",
  messagingSenderId: "43880503405",
  appId: "1:43880503405:web:409cb70f0cebed7e80c764",
  measurementId: "G-R4D5Z027PJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };