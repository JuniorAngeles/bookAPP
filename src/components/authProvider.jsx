import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, userExists, registerNewUser } from "../services/firebase.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({
  children,
  onUserLoggenIn,
  onUserNotLoggenIn,
  onUserNotRegistered,
}) {
  const navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);

        if (isRegistered) {
          onUserLoggenIn(user);
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            username: "",
            processCompleted: false,
          });
          onUserNotRegistered(user);
        }
      } else {
        onUserNotLoggenIn();
      }
    });
  }, [navigate, onUserLoggenIn, onUserNotLoggenIn, onUserNotRegistered]);

  return <div>{children}</div>;
}
