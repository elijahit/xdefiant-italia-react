import { useState } from "react";
import "./DeliverySection.css";
import characterConcept from "/src/assets/Kersey_Concept.webp";

function DeliverySection() {
  const [divOpacity, setDivOpacity] = useState("opacity-no");
  const [divOpacityLeft, setDivOpacityLeft] = useState("opacity-no-left");
  const [divOpacityRight, setDivOpacityRight] = useState("opacity-no-right");


  function runObserver() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setDivOpacity("opacity-no opacity-timing");
      setDivOpacityLeft("opacity-no-left opacity-timing-left");
      setDivOpacityRight("opacity-no-right opacity-timing-right");
      intersectionObserver.unobserve(document.querySelector("#observer-delivery"))
    });
    setTimeout(() => {
      intersectionObserver.observe(document.querySelector("#observer-delivery"));
    }, 200);
  }

  return (
    <>
      <div onLoad={runObserver()} id="observer-delivery" className="container mb-5">
        <div className={"delivery-style mb-1 " + divOpacityLeft}>
          <h1 className="fs-1 fw-bold m-0 p-0 text-center text-lg-start mb-1 mb-lg-0">LA COMMUNITY
            <div className="fs-2 fw-bold p-0 m-0 text-center text-lg-start">ITALIANA</div></h1>
        </div>
        <div className="row">
          <div className={"col-12 col-lg-6 " + divOpacity}>
            <p className="fs-5">
              <span className="fw-bold fs-4">S</span>iamo la community italiana di XDefiant, un gruppo appassionato e dedicato a questo fantastico gioco, attivo dal 2021. Abbiamo diversi canali social, facilmente consultabili nella sezione ⁠link-utili, che utilizziamo per tenere costantemente aggiornata la nostra community. Qui potete trovare tutte le informazioni sugli ultimi aggiornamenti del gioco, novità, eventi speciali e competizioni italiane di XDefiant.

              Il nostro obiettivo è creare un ambiente accogliente e informativo dove i giocatori possono condividere le loro esperienze, scoprire nuove strategie e partecipare a tornei e sfide entusiasmanti. Invitiamo tutti i fan di XDefiant a unirsi a noi sui nostri canali social per non perdere nessuna novità e per essere sempre al passo con tutto ciò che riguarda il mondo di XDefiant in Italia.

              Dal 2021, la nostra community è il cuore pulsante delle attività di XDefiant nel nostro paese, e siamo entusiasti di accogliere nuovi membri che condividono la nostra passione per questo straordinario gioco. Unisciti a noi e diventa parte di una community vibrante e attiva!
            </p>
            <div className="d-flex justify-content-center">
              <a className="btn btn-primary mb-4 p-3" href="https://store.ubisoft.com/it/xdefiant/60f03a8c0d253c1a30f224ba.html" role="button">Scarica ora XDefiant</a>
            </div>
          </div>
          <div className={"col-12 col-lg-6 d-flex flex-column align-items-center " + divOpacityRight}>
            <img src={characterConcept} width="250" height="400" alt="Immagine di Kersey" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliverySection;