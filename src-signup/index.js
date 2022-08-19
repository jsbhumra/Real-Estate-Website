import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const signUpEmail = document.querySelector('#signUpEmail')
const signUpPassword = document.querySelector('#signUpPassword')
const signUpSubmit = document.querySelector('#signUpSubmit')

const firebaseConfig = {
    apiKey: "AIzaSyCmvDj3wHb12urN2_s99BVP1A7smoQP3Ys",
    authDomain: "real-estate-b6984.firebaseapp.com",
    projectId: "real-estate-b6984",
    storageBucket: "real-estate-b6984.appspot.com",
    messagingSenderId: "559503361695",
    appId: "1:559503361695:web:a0e3e34acb011b5fd304aa",
    measurementId: "G-Z75WY60EPS"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const signUpEmailPassword = async () => {
    const signUpEmail1 = signUpEmail.value;
    const signUpPassword1 = signUpPassword.value;
    const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail1, signUpPassword1);
    console.log(userCredential.user);
}

signUpSubmit.addEventListener("click", signUpEmailPassword);

