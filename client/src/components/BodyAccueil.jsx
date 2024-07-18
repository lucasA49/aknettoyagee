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
              <h3 className="titre-prestations">
                Quelles sont les prestations de nettoyage proposées par
                l'entreprise ?
              </h3>
            <div className="contenaire-presentation">
              <img className="img-texte-accueil"src={pressingsiege} alt="" />
              <p className="p-presentation">Pour la plupart des personnes, nettoyer sa voiture est une véritable corvée.<br/>
 Vous devez passer l’aspirateur à l’intérieur, nettoyer les vitres,<br/>
  frotter le tableau de bord sans oublier le nettoyage de l’extérieur. <br/>
   Pourtant, c’est une tâche qui doit obligatoirement se faire assez fréquemment. <br/>
    En effet, vous ne pouvez pas empêcher la poussière d’entrer dans votre habitacle, <br/>
     vous entrez dans la voiture avec vos chaussures parfois sales et les intempéries peuvent salir vos vitres. <br/>
 C'est pour cela que AK NETTOYAGE  propose aux particuliers et professionnels, de laver votre voiture à votre place.</p>              
              </div>
           
   
    </>
  );
}

export default BodyAccueil;
