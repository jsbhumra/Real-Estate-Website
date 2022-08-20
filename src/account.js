import { initializeApp } from 'firebase/app';
import { getAuth , onAuthStateChanged , signOut} from 'firebase/auth';

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

onAuthStateChanged(auth, function(user) {

    console.log(user);
    
    if (user) {
        document.getElementById("GreetUser").textContent = "Hello, " + user.email.split("@")[0] + " !";
    } 
  });


document.getElementById("Login").onclick = function() {logout()};

function logout()
{
    signOut(auth).then(() => {
        window.location = 'index.html';
        
      }).catch((error) => {
        console.log(error)
      });
}

