import "../styles/book.css";

export function BookItem({ book }) {
  return (
    <div className="books-group">
      <div className="TD-book">
        <h1>{book.nombre}</h1>
        <p>{book.descriccion}</p>
      </div>
      <div className="img-book">
        <a target="_blank" href={book.url}>
          <img src={book.img} alt={book.nombre} />
        </a>
      </div>
    </div>
  );
}
