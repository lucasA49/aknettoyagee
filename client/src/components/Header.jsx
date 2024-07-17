import "../styles/Header.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
     <article className="blanc-header">
<img className="logo" src="../assets/images/aknettoyage.png" alt="" />
     <p className="numero-tel">0756936273</p>
     <NavLink className="bouton-header" to="/">CONTACTEZ NOUS</NavLink>
     {/* //  ici tu mettera le bouton */}
     <main className="bandeau-gris">
<p className="Lavage-intérieur-header">Lavage Intérieur</p>
<p className="lavage-extérieur-header">Lavage Extérieur </p>
<p className="nettoyage-mobilier-header">Nettoyage de Mobilier textille</p>
     </main>
     <main className="background-header">
    <img className="image-background" src="../assets/images/background-header.jpg" alt=""  />
     </main>
     </article>

    );
  }
  
  export default Header;
  