import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="menu">
      <h1 className="menu-title"> Cemas Library</h1>
      <nav className="menu-nav">
        <span className="menu-nav__link">
          <Link className="menu-nav__link" to="/">
            Inicio
          </Link>
        </span>

        <span className="menu-nav__link">
          <Link className="menu-nav__link" to="/Libres/createBook">
            Subir Libro
          </Link>
        </span>
        <span className="menu-nav__link">
          <Link className="menu-nav__link" to="/Libres/Documentation">
            Documentacion
          </Link>
        </span>
        <span className="menu-nav__link">
          <Link className="menu-nav__link" to="/Libres/signout">
            Cerrar Sesion
          </Link>
        </span>
      </nav>
    </header>
  );
}
