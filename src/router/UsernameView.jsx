import AuthProvider from "../components/authProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  existsUserName,
  updateUser,
  registerNewUser,
} from "../services/firebase.js";

export default function UsernameView() {
  const navigate = useNavigate();

  /*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: if exists a users
*/

  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setuserName] = useState("");

  function handlerUserLoggedIn(user) {
    navigate("/");
  }

  function handleUserNotRegistered(user) {
    setCurrentUser(user);
    setState(3);
  }

  function handlerUserNotLoggedIn() {
    navigate("/login");
  }

  function handleInputUserName(e) {
    setuserName(e.target.value);
  }

  async function handleContinue() {
    if (userName != "") {
      const exists = existsUserName(userName);
      if (exists) {
        setState(5);
      } else {
        const tpm = { ...currentUser };
        tmp.userName = userName;
        tpm.processCompleted = true;
        await updateUser(tmp);
      }
    }
  }

  if (state == 3 || state == 5) {
    return (
      <div>
        <h1>Bienbenido {currentUser.displayName}</h1>
        <p>para terminar el proceso eliga un nombre de usuario</p>
        {state == 5 ? <p>El nombre ya existe, escoge otro</p> : ""}
        <div>
          <input type="text" onChange={handleInputUserName} />
        </div>

        <div>
          <button onClick={handleContinue}>continuar</button>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider
      onUserLoggenIn={handlerUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggenIn={handlerUserNotLoggedIn}
    ></AuthProvider>
  );
}
