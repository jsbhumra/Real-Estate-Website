
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const txtEmail = document.querySelector('#txtemail')
const txtPassword = document.querySelector('#txtpassword')
const loginSubmit = document.querySelector('#btnsubmit')

const firebaseConfig = {
    apiKey: "AIzaSyCmvDj3wHb12urN2_s99BVP1A7smoQP3Ys",
    authDomain: "real-estate-b6984.firebaseapp.com",
    projectId: "real-estate-b6984",
    storageBucket: "real-estate-b6984.appspot.com",
    messagingSenderId: "559503361695",
    appId: "1:559503361695:web:a0e3e34acb011b5fd304aa",
    measurementId: "G-Z75WY60EPS"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
}
loginSubmit.addEventListener("click", loginEmailPassword);

