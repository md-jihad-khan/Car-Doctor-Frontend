import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.js";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      } else {
        axios.post("http://localhost:5000/logout", loggedUser, {
          withCredentials: true,
        });
      }

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [reload]);

  const authInfo = {
    loading,
    setLoading,
    user,
    createUser,
    logOut,
    signIn,
    googleLogin,
    updateUserProfile,
    reload,
    setReload,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {/* {loading ? <Skeleton></Skeleton> : children} */}
      {children}
    </AuthContext.Provider>
  );
};

// AuthProvider.propTypes = {
//   children: PropTypes.node,
// };

export default AuthProvider;
