import canap from "../assets/images/lavcanapé.png"
import exterieur from "../assets/images/lavexterieur.png"
import interieur from "../assets/images/lavinterieur.png"
import "../styles/BodyAccueil.css"

function BodyAccueil() {
  return (
    
   <div className="contenaire-body">
    <div className="titre-image-container">
      <h2 className="titre-body">AK NETTOYAGE à votre services ses compétences sur Cholet et aux alentours </h2>
      <div className="image-body-container">
        <img className="interieur " src={interieur} alt="" />
        <img className="exterieur" src={exterieur}alt="" />
        <img className="canap"src={canap} alt="" />
      </div>
    </div>
    </div>
    // <h3>Quelles sont les prestations de nettoyage proposées par l’entreprise  ?</h3>

  );
}

export default BodyAccueil;