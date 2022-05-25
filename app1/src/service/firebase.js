import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {

    apiKey: "AIzaSyBa5wZi11XM3BpCSlzBSaVByljsflV9lK4",
  
    authDomain: "compro-94dcf.firebaseapp.com",
  
    projectId: "compro-94dcf",
  
    storageBucket: "compro-94dcf.appspot.com",
  
    messagingSenderId: "501195719456",
  
    appId: "1:501195719456:web:bfe031251059b65deecd45"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export default{
    googleLogar: async()=>{
      const provider = new firebase.auth.GoogleAuthProvider();
      var result
      try{
        result = await auth.signInWithPopup(provider);
      }catch(e){
        console.error(e);
      }
      return result;
    }
  }