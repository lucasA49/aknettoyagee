import soinparticulier from "../assets/icones/soinparticulier.png";
import materieladaptée from "../assets/icones/materieladaptée.png";
import produitbio from "../assets/icones/produitbio.png";
import "../styles/Accueil.css";

function Engagement() {
  return (
    <div className="card-grey">
      <img className="imgbio" src={produitbio} alt="" />
      <h4>Produits Bio et écologique</h4>
      <p className="p-bio">
        Dans le cadre d'une démarche <br /> éco-responsable, nous n'utilisons
        que des produits bio et écologique
      </p>
      <img src={materieladaptée} alt="" />
      <img src={soinparticulier} alt="" />
    </div>
  );
}

export default Engagement;
