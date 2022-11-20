// import { async } from '@firebase/util'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, userExists } from "../services/firebase.js";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import AuthProvider from "../components/authProvider.jsx";

export default function Login(params) {
  const navigate = useNavigate();
  //   const [currentUser, setcurrentUser] = useState(null);
  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
*/
  const [state, setcurrentState] = useState(0);
  //   useEffect(() => {
  //     setcurrentState(1);
  //     onAuthStateChanged(auth, async (user) => {
  //       if (user) {
  //         const isRegistered = await userExists(user.uid);

  //         if (isRegistered) {
  //           navigate("/Dasboard");
  //           setcurrentState(2);
  //         } else {
  //           navigate("/choose-username");
  //           setcurrentState(3);
  //         }
  //       }
  //       if (user) {
  //         setcurrentState(3);
  //         console.log(user.displayName);
  //       } else {
  //         setcurrentState(4);
  //         console.log("no hay nadie autenticado...");
  //       }
  //     });
  //   }, []);

  async function handlerUserStateChaged(user) {}

  async function handleOnclick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
        localStorage.setItem("userid", res.user.uid);
      } catch (error) {
        navigate("/Libres");
        console.error(error);
      }
    }
    navigate("/Libres");
  }

  function handlerUserLoggedIn(user) {
    navigate("/Dasboard");
  }

  function handleUserNotRegistered(user) {
    navigate("/Libres");
  }

  function handlerUserNotLoggedIn(user) {
    setcurrentState(4);
  }

  if (state == 2) {
    return <div>Estas registrado y autenticado</div>;
  }

  if (state == 3) {
    return <div>Estas autenticado pero no registrado </div>;
  }

  if (state == 4) {
    return (
      <div>
        <button onClick={handleOnclick}>Login with Google</button>
      </div>
    );
  }

  if (state == 5) {
    return (
      <div>
        <button onClick={handleOnclick}>Login with Google</button>
      </div>
    );
  }

  return (
    <AuthProvider
      onUserLoggenIn={handlerUserLoggedIn()}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggenIn={handlerUserNotLoggedIn}
    ></AuthProvider>
  );
}
