import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" // CON ESTA FUNCION OBTENGO LA REFERENCIA A MI BASE DE DATOS DE FIRESTORE

const firebaseConfig = {
  apiKey: "AIzaSyBCdHGLUpAo-4vdQYRNj0i1t_ERtkP27-0",
  authDomain: "goat-hoops.firebaseapp.com",
  projectId: "goat-hoops",
  storageBucket: "goat-hoops.appspot.com",
  messagingSenderId: "893137474985",
  appId: "1:893137474985:web:f0eafa3c9d7f343615a0b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDDBB = getFirestore(app);