import { dataUser } from "../services/firebase";
import { BookItem } from "../components/BookItem";
import { useState, useEffect } from "react";
export default function Profile() {
  const [userData, setuserData] = useState([]);

  const userId = localStorage.getItem("userid");

  const user = {
    userId,
  };

  console.log(user);

  useEffect(() => {
    dataUser();
  });

  return <></>;
}
