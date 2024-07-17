import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import imgBanner from "../assets/images/background-header.jpg";
import logo from "../assets/images/aknettoyage.png";

function Header() {
  return (
    <header>
      <nav id="top-nav">
        <img className="logo" src={logo} alt="" />
        <div id="contact-nav">
          <p className="numero-tel">0756936273</p>
          <NavLink className="bouton-header" to="/">
            <p>CONTACTEZ NOUS</p>{" "}
          </NavLink>
        </div>
      </nav>

      {/* EN ATTENTE DE ROOT POUR LE BOUTON !! */}
      <nav id="banner">
        <NavLink>Lavage Intérieur</NavLink>
        <NavLink>Lavage Extérieur </NavLink>
        <NavLink>Nettoyage de Mobilier textille</NavLink>
      </nav>

      <section id="banner-image">
        <img className="image-background" src={imgBanner} alt="" />
        <div className="blue-banner" />
        <hgroup>
          <h3>Lavage intérieur à partir de 30€</h3>
          <h3>Lavage Extérieur à partir de 30€</h3>
          <h3>Lavage intérieur à partir de 25€</h3>
        </hgroup>
      </section>
    </header>
  );
}

export default Header;
