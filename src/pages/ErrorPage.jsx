import Footer from "../components/Footer";
import Header from "../components/Header";
import "./ErrorPage.css";
import error404Image from "/src/assets/404.svg"

function ErrorPage() {
  document.title = "XDefiant Italia - Errore"
  return(
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-5">
            <img src={error404Image} alt="Errore" class="img-fluid" width="100"/>
            <h1 className="text-center mt-5">Oops! Pagina non trovata</h1>
            <p className="text-center text-secondary">
              A quanto pare questa pagina non è stata trovata! <br />
              Se credi che questo sia un errore contatta lo sviluppatore. <br />
              <hr />
              Apparently this page could not be found! <br />
 If you believe this is an error please contact the developer.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;