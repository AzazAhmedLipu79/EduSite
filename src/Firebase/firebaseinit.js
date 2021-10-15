import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaeconfig";
// Initialize Firebase
const InitializeAuth = () => {
  initializeApp(firebaseConfig);
};
export default InitializeAuth;
