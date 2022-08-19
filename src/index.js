

gsap.registerPlugin(ScrollTrigger);


gsap.to(".offerTitle", {
    duration: 3,
    scrollTrigger: {
        trigger: ".offerCaption" ,
        toggleActions: "restart none restart none",
    }, 
    ease: CustomEase.create("custom", "M0,0 C0,0 0.174,0.722 0.424,0.972 0.674,1.222 1,0 1,0 "),
    y: -15
});




gsap.to(".line1",{
    x : 150,
    duration: 10,
    scrollTrigger: {
        trigger: ".line1" ,
        start: "top 60%",
        end: "top -50%",
        scrub: true,
        toggleActions: "restart none none none",

    },
});

gsap.to(".line3",{
    x : 150,
    duration: 10,
    scrollTrigger: {
        trigger: ".line1" ,
        start: "top 60%",
        end: "top -50%",
        scrub: true,
        toggleActions: "restart none none none",

    },
});

gsap.to(".line2",{
    x : -150,
    duration: 10,
    scrollTrigger: {
        trigger: ".line1" ,
        start: "top 60%",
        end: "top -50%",
        scrub: true,
        toggleActions: "restart none none none",

    },
});


let sections = gsap.utils.toArray(".panel");


gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".topOffers",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".hell").offsetWidth,

        onLeave: function(self){
            self.disable()
            self.animation.progress(1)
        }
    }
});




import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
  const app = initializeApp(firebaseConfig);
const auth = getAuth();
// Detect Auth state
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});