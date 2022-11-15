import "../styles/book.css";

export function BookItem({ book }) {
  return (
    <div className="books-group">
      <h1 className="title-book">{book.nombre}</h1>
      <p className="description-book">{book.descriccion}</p>

      <div className="img-book">
        <a target="_blank" href={book.url}>
          <img src={book.img} alt={book.nombre} />
        </a>
      </div>
    </div>
  );
}
