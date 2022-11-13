export function BookItem({ book }) {
  return (
    <>
      <h1>{book.nombre}</h1>
      <p>{book.descriccion}</p>
      <a target="_blank" href={book.url}>
        <img src={book.img} alt={book.nombre} />
      </a>
    </>
  );
}
