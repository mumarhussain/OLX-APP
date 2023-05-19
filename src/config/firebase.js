// import { initializeApp } from "firebase/app";
// import {getStorage} from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";
// import { getFireStore , collection, getDocs, getDoc} from "firebase/firestore"





// // Initialize Firebase
// const app = initializeApp(firebase);
// // const analytics = getAnalytics(app);
// export const db = getFireStore(app)



import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA8C7Dr8cYwSA6ZiqPgObHte0aICZcodnU",
    authDomain: "olx-app-91d43.firebaseapp.com",
    projectId: "olx-app-91d43",
    storageBucket: "olx-app-91d43.appspot.com",
    messagingSenderId: "474574720665",
    appId: "1:474574720665:web:c01f8190efe6d6e04d3208",
    measurementId: "G-40ESS4SE1J"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


