import "../styles/book.css";

export function BookItem({ book }) {
  return (
    <div className="padre">
      <div className="contenedor">
        <figure>
          <img src={book.img} alt={book.nombre} />
          <div className="capa">
            <h1>{book.nombre}</h1>
            <p>{book.descriccion}</p>
            <a target="_blank" href={book.url}>
              Leer
            </a>
          </div>
        </figure>
      </div>
    </div>
  );
}
