import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBy7-1oWtHLrbMO4AEY3lXh5pP9-LYuE0I",
  authDomain: "netflix-clone-59a3f.firebaseapp.com",
  projectId: "netflix-clone-59a3f",
  storageBucket: "netflix-clone-59a3f.firebasestorage.app",
  messagingSenderId: "384155138598",
  appId: "1:384155138598:web:c7d4d061525ee994da44e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password)=>{

    try{


    }catch(error){
 
        
    }
}