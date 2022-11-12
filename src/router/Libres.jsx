import { useState } from "react";
import "../App.css";
import "../services/firebase.js";
import {
  uploaFiles,
  saveArchivos,
  traerArchivos,
} from "../services/firebase.js";

const initialNewBookSetate = {
  nombre: "",
  descriccion: "",
  url: "",
};
function Libres() {
  const [file, setfile] = useState(null);
  const [urlImg, seturlImg] = useState("");
  const [newBook, setnewBook] = useState(initialNewBookSetate);

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();

    try {
      const result = await uploaFiles(file);
      seturlImg(result);
    } catch (error) {
      console.log(error);
    }

    const nombre = formData.get("nombre");
    const descriccion = formData.get("descriccion");
    const url = formData.get("url");

    saveArchivos(nombre, descriccion, url);
  };

  return (
    <>
      <h1></h1>
      <form id="formulario" onSubmit={handleSubmit}>
        <label className="nombre">Inserta el titulo</label>
        <input type="text" name="nombre" id="nombre" />

        <label className="descriccion">Inserta la descriccion</label>
        <input type="text" name="descriccion" id="descriccion" />

        <label className="url">Ingresa la url de la ubicacion del libro </label>
        <input type="text" name="url" id="url" />

        <input
          type="file"
          name=""
          id=""
          required
          onChange={(e) => setfile(e.target.files[0])}
        />

        <button> Subir </button>
      </form>

      <div className="data">
        {/* <h1>{nombre.value}</h1>
        <p>{descriccion.value}</p>
        <p>{data}</p>
        <p>{data}</p>
        <a href={data}></a> */}
        <img src={urlImg}></img>
      </div>
    </>
  );
}

export default Libres;