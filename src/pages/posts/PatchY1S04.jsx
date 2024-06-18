import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import HeroSection from "../../components/HeroSection";
import image1 from "../../assets/posts-images/img-patchy1s04-1.jpg";
import { Outlet } from "react-router-dom";

function PatchY1S04() {
  return (
    <>
      <Helmet>
        <title>XDefiant Patch Y1S0.4</title>
      </Helmet>
      <Header />
      <HeroSection />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fs-2">XDefiant Patch Y1S0.4</h1>
            <p className="text-secondary text-end">
              18/06/2024 | 15:00 - <b>Elijah</b>
            </p>
            <p className="fs-5">Se pensavi che non avremmo fatto un altro aggiornamento nella Preseason, ti sbagliavi! Leggi di più su cosa sta cambiando nell'aggiornamento di oggi Y1S0.4.
            </p>
            <article>
              <h2>Gameplay</h2>
              <p className="fs-5">
                Abbiamo velocizzato il processo di sblocco degli accessori per le armi riducendo la quantità di XP necessaria per livellare la tua arma primaria, da 3.500 a 3.000, e la tua arma secondaria, da 1.500 a 1.000. Questo cambiamento è retroattivo, il che significa che i livelli delle tue armi esistenti saranno probabilmente ancora più alti ora. Pausa per un applauso educato.
              </p>
              <p className="fs-5">
                Per bilanciare questo accesso più rapido agli accessori migliorativi delle prestazioni--e fornire una maggiore sfida alla comunità--i requisiti di livello della Maestria delle Armi sono stati aumentati. Tuttavia, qualsiasi giocatore che ha già sbloccato le skin Bronzo/Argento/Oro le manterrà. Non siamo mostri.
              </p>
              <h2>Armi</h2>
              <p className="fs-5">
              I giocatori che brandivano l'MDR mentre sfoggiavano la skin Firestorm stavano sperimentando un livello anomalo di rinculo, che è stato riportato al livello normale. Quindi sfoggia pure.
              </p>
              <h2>Netcode</h2>
              <p className="fs-5">
              Migliorata la velocità di reazione della tua salute quando vieni colpito, il che dovrebbe ridurre la sensazione di essere colpito dietro i muri.
              </p>
              <h2>Fazioni</h2>
              <p className="fs-5">
              Ripristinata la decenza di sdraiarsi quando morti ai giocatori che in precedenza rimanevano in piedi dopo essere morti sotto l'influenza dell'ultra Medico Supremo di Libertad.
              </p>
              <h2>Varie</h2>
              <p className="fs-5">
              Ulteriori correzioni di crash.
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

export default PatchY1S04;