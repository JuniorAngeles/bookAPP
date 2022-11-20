import { salir } from "../services/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout(params) {
  const navigate = useNavigate();
  useEffect(() => {
    salir()
      .then(() => {
        alert("Sesion Cerrada");
      })
      .then(() => {
        navigate("/Libres/login");
      });
  }, []);

  return <h1>Cargando</h1>;
}
