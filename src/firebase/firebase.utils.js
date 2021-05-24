import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyDHDyR5F58hkFXVXQHHTc_UvBxFRrMASDI",
    authDomain: "ecommercedb-68554.firebaseapp.com",
    projectId: "ecommercedb-68554",
    storageBucket: "ecommercedb-68554.appspot.com",
    messagingSenderId: "817683820243",
    appId: "1:817683820243:web:417bd4b540beb1c61c2e26",
    measurementId: "G-XDEKBS9NWN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;