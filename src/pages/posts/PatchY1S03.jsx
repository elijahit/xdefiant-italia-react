import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/HeroSection";
import image1 from "../../assets/posts-images/img-patchy1s03-1.jpg";
import { Outlet } from "react-router-dom";

function PatchY1S03() {
  return (
    <>
      <Helmet>
        <title>XDefiant Patch Y1S0.3</title>
      </Helmet>
      <Header />
      <HeroSection />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fs-2">XDefiant Patch Y1S0.3</h1>
            <p className="text-secondary text-end">
              12/06/2024 | 17:55 - <b>Elijah</b>
            </p>
            <article>
              <h2>Gameplay</h2>
              <p className="fs-5">
                <ul>
                  <li>
                    Aggiunte penalità per i giocatori che abusano del salto/accovacciamento.
                  </li>
                  <li>
                    Ora puoi spingere il pacchetto in modalità Scorta senza che le gambe si stacchino dal torso.
                  </li>
                </ul>
              </p>
              <h2>Armi</h2>
              <p className="fs-5">
                <ul>
                  <li>
                    Ottimizzazione della mira a lunga distanza e riduzione della velocità di camminata quando trattieni il respiro con armi con mirino.
                  </li>
                  <li>
                    Aumentato il contraccolpo per i cecchini quando vengono colpiti.
                  </li>
                  <li>
                    Risolto un problema su PC che impediva di impostare ADS su toggle dopo una partita.
                  </li>
                </ul>
              </p>
              <h2>Social</h2>
              <p className="fs-5">
                <ul>
                  <li>
                    Risolto un problema su Xbox che bloccava il pulsante Xbox nel menu Social.
                  </li>
                  <li>
                    Risolto un problema che permetteva ai giocatori bloccati di leggere i tuoi messaggi.
                  </li>
                  <li>
                    Migliorato il calcolo del ping nel matchmaking.
                  </li>
                  <li>
                    Ora i giocatori possono unirsi a una partita quasi piena se invitati.
                  </li>
                  <li>
                    Risolto un problema che permetteva ai giocatori di unirsi a partite non compatibili con le loro impostazioni.
                  </li>
                </ul>
              </p>
              <h2>Netcode</h2>
              <p className="fs-5">
                <ul>
                  <li>
                    Risolto un problema di larghezza di banda con le abilità mediche di Libertad.
                  </li>
                </ul>
              </p>
              <h2>Fazioni</h2>
              <p className="fs-5">
                <ul>
                  <li>
                    Ora i giocatori di Echelon diventano invisibili solo con la Tuta Ghillie Digitale.
                  </li>
                  <li>
                    Corretto il riconoscimento delle abilità mediche di Libertad a fine round.
                  </li>
                </ul>
              </p>
              <img src={image1} className="img-fluid mx-auto d-block mb-5" width={700} height={400} alt="Immagine che raffigura il logo della patch" />
            </article>
          </div>
        </div>
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

export default PatchY1S03;