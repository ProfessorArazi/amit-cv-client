import "../../scss/App.scss";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css"></link>
      </Helmet>

      <div className={"footer-basic"}>
        <footer>
          <div className={"logo"}>
            <h4>Amit Arazi</h4>
          </div>
          <div className={"social"}>
            <a href="https://api.whatsapp.com/send?phone=+972543438551">
              <i className="icon ion-social-whatsapp"></i>
            </a>
            <a href="https://github.com/ProfessorArazi">
              <i className="icon ion-social-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/amit-arazi-bb706b217/">
              <i className="icon ion-social-linkedin"></i>
            </a>
          </div>
          <p className={"copyright"}>Amit Arazi © 2022</p>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Footer;
