import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          {/* FOOTER PER DESKTOP */}
          <div className="row mt-3">
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-6 d-none d-lg-block">
                  <h6 className="text-white-50">Navigazione</h6>
                  <nav id="navigation-secondary">
                    <ul className="list-unstyled">
                      <li>
                        <Link to={"/"} className="text-decoration-none text-white">Home</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-12 col-lg-6">
                  <h6 className="text-white-50 text-center text-lg-start">Informazioni</h6>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-center text-lg-start">
                        Questo sito web è in sviluppo, questa è la sua versione base
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <h6 className="text-white-50 text-center text-lg-start">Site Copyright</h6>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-center text-lg-start">
                        Developed with 💛 by <br />
                        <a className="text-decoration-none text-white-50 copyrigth-hover" href="https://www.linkedin.com/in/gabriele-tosto/" target="_blank">Gabriele Mario Tosto</a> <br />
                        &copy; 2024 - playxdefiant.it
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                  <ul className="social-navigation list-unstyled d-flex gap-2 align-items-center">
                    <li>
                      <a href="https://www.facebook.com/PlayXDefiantIT/" target="_blank">
                        <i className="bi bi-facebook text-white fs-2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/playxdefiant_IT/" target="_blank">
                        <i className="bi bi-instagram text-white fs-2"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/playxdefiant_it" target="_blank">
                        <i className="bi bi-twitter text-white fs-2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;