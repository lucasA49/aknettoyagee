import "../styles/Footer.css";
import insta from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import Logo from "../assets/images/aknettoyage.png";

function Footer() {
  return (
    <>
      <footer>
        <h5 className="titre-footer">
          Vous avez besoin de plus d’informations ?
        </h5>
        <p className="p-footer">
          N'hésitez surtout pas à nous contacter au <strong>0756936273</strong>
        </p>
        <p className="p2-footer">ou par nos reseaux </p>
        <img className="facebook" src={facebook} alt="" />
        <img className="insta" src={insta} alt="" />{" "}
      </footer>
      <article className="footer-blanc">
        <div className="footer-info">
          <img src={Logo} alt="" />
          <p>
            07 56 93 62 73 <br /> 49300 CHOLET
          </p>
          <p>
            Mentions Légales <br />
            Politique de confidentialité
          </p>
        </div>
      </article>
    </>
  );
}

export default Footer;
