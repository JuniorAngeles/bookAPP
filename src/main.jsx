import React from "react";
import ReactDOM from "react-dom/client";
import Libres from "./router/Libres";
import Login from "./router/loginView";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signout from "./router/singout";
import Dasboard from "./router/Dasboar";
import EditProfile from "./router/editProfile";
import Profile from "./router/Profile";
import UsernameView from "./router/UsernameView";
import { Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/Libres"} />} />
      <Route path="/Libres" element={<Libres />} />
      <Route path="/Libres/login" element={<Login />} />
      <Route path="/Libres/Dasboard" element={<Dasboard />} />
      <Route path="/Libres/signout" element={<Signout />} />
      <Route path="/Libres/dashboard/profile" element={<EditProfile />} />
      <Route path="/Libres/u/:username" element={<Profile />} />
      <Route path="/Libres/choose-username" element={<UsernameView />} />
    </Routes>
  </BrowserRouter>
);
