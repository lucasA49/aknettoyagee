import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import imgBanner from "../assets/images/background-header.jpg";
import logo from "../assets/images/aknettoyage.png"

function Header() {
  return (
    <header className="blanc-header">
      <img className="logo" src={logo} alt="" />
      <p className="numero-tel">0756936273</p>
      <NavLink className="bouton-header" to="/">
        CONTACTEZ NOUS
      </NavLink>
      {/* //  ici tu mettera le bouton */}
      <nav className="bandeau-gris">
        <p className="Lavage-intérieur-header">Lavage Intérieur</p>
        <p className="lavage-extérieur-header">Lavage Extérieur </p>
        <p className="nettoyage-mobilier-header">
          Nettoyage de Mobilier textille
        </p>
      </nav>
      <img className="image-background" src={imgBanner} alt="" />
      <div className="blue-header">
        <h1>oui</h1>
      </div>
 <p className="lav-blue">Lavage intérieur à partir de 30€</p>
 <p className="ext-blue">Lavage Extérieur à partir de 30€</p>
 <p className="mobilier-blue">Lavage intérieur à partir de 25€</p>
    </header>
  );
}

export default Header;
