import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";


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
       const res = await createUserWithEmailAndPassword (auth, email, password);
       const user = res.user;
       await addDoc(collection(db, 'user'), {
        uid: user.uid, 
        name, 
        authProvider: "local",
       })

    }catch(error){
      console.log(error)
      toast.error(error.code.split('/')[1].split('-').join("  "));
    }
}



const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join("  "));
  }
}


const logout = ()=>{
   signOut(auth)
}
export {auth, db, login, signup, logout};