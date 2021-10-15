import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChange,
} from "firebase/auth";
import { useEffect, useState } from "react";

const UseFireBase = () => {
  const [users, SetUsers] = useState({});
  const auth = getAuth();

  const GoogleSignin = () => {
    const Googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, Googleprovider).then((res) => {
      SetUsers(res.user);
    });
  };

  const Logout = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChange(auth, (user) => {
      if (user) {
        SetUsers(user);
      } else {
        SetUsers({});
      }
    });
    return () => unSubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    users,
    GoogleSignin,
    Logout,
  };
};
export default UseFireBase;
