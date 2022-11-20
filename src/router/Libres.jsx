import { useState, useEffect } from "react";
import "../services/firebase.js";
import { traerDatos } from "../services/firebase.js";
import { BookItem } from "../components/BookItem";
import { Link } from "react-router-dom";

function Libres() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    traerDatos().then(setLibros);
    // console.log(libros);
  }, []);

  return (
    <>
      <div className="padre">
        {libros.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })}
        {/* <img src={urlImg} /> */}
      </div>
    </>
  );
}

export default Libres;
