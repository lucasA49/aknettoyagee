import canap from "../assets/images/lavcanapé.png";
import exterieur from "../assets/images/lavexterieur.png";
import interieur from "../assets/images/lavinterieur.png";
import pressingsiege from "../assets/images/pressingsiege.png"
import "../styles/BodyAccueil.css";

function BodyAccueil() {
  return (
    <>
      <div className="contenaire-body">
        <div className="titre-image-container">
          <h2 className="titre-body">
            AK NETTOYAGE à votre service, ses compétences sur Cholet et aux
            alentours
          </h2>
          <div className="image-body-container">
            <img className="interieur" src={interieur} alt="" />
            <img className="exterieur" src={exterieur} alt="" />
            <img className="canap" src={canap} alt="" />
            </div>
          </div>
        </div>
    <div className="contenaire-presentation">
              <h3 className="titre-prestations">
                Quelles sont les prestations de nettoyage proposées par
                l'entreprise ?
              </h3>
              <img className="img-texte-accueil"src={pressingsiege} alt="" />
              </div>
   
    </>
  );
}

export default BodyAccueil;
