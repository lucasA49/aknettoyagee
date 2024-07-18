import "../styles/Footer.css";
import insta from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";

function Footer() {
  return (
    <footer className="footer-color">
      <h5 className="titre-footer">
        Vous avez besoin de plus d’informations ?
      </h5>
      <p className="p-footer">
        N'hésitez surtout pas à nous contacter au <strong>0756936273</strong>
      </p>
      <p className="p2-footer">ou par nos reseaux </p>
      <img className="insta" src={insta} alt="" />
      <img className="facebook" src={facebook} alt="" />
    </footer>
  );
}

export default Footer;
