import { useState } from "react";
import "../App.css";
import "../services/firebase.js";
import { uploaFiles, saveArchivos } from "../services/firebase.js";

const initialNewBookSetate = {
  nombre: "",
  descriccion: "",
  url: "",
  img: "",
};
function Libres() {
  const [file, setfile] = useState(null);
  const [urlImg, seturlImg] = useState("");
  const [newBook, setNewBook] = useState(initialNewBookSetate);

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();

    try {
      const result = await uploaFiles(file);
      seturlImg(result);

      const nombre = formData.get("nombre");
      const descriccion = formData.get("descriccion");
      const url = formData.get("url");
      const img = result;
      // encarga de guardar los datos

      // guardar datos en firestore
      console.log(nombre);
      console.log(descriccion);
      console.log(url);
      console.log(img);

      const newObj = {
        nombre,
        descriccion,
        url,
        img,
      };

      // setNewBook(newObj);
      await saveArchivos(newObj);

      // funcion para almacenar datos en firesetore(newBook)
      console.log(newObj);
      // limpiar formulario
    } catch (error) {
      console.log(error);
    }
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

        <button type="submit"> Subir </button>
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
