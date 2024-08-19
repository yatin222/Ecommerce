
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwtGgHBi8prjADLUm_MoQrrnUXKnE8lwc",
  authDomain: "myecomm-1807d.firebaseapp.com",
  projectId: "myecomm-1807d",
  storageBucket: "myecomm-1807d.appspot.com",
  messagingSenderId: "94578087665",
  appId: "1:94578087665:web:84a3ea32ae45be8121fb50"
};
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth }