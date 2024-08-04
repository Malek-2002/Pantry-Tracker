import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC7nP0IMwVJkKENbFEQX_mtvNggBuueZow",
  authDomain: "inventory-management-app-f90d9.firebaseapp.com",
  projectId: "inventory-management-app-f90d9",
  storageBucket: "inventory-management-app-f90d9.appspot.com",
  messagingSenderId: "378370725782",
  appId: "1:378370725782:web:361b0af6bf0f257c0dafb7",
  measurementId: "G-GK5Q9HENC0"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };

