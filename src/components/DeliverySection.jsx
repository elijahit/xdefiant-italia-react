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
        <div className={"delivery-style mb-1 "+ divOpacityLeft}>
          <h1 className="fs-1 fw-bold m-0 p-0 text-center text-lg-start mb-1 mb-lg-0">LA COMMUNITY 
          <div className="fs-2 fw-bold p-0 m-0 text-center text-lg-start">ITALIANA</div></h1>
        </div>
        <div className="row">
          <div className={"col-12 col-lg-6 "+ divOpacity}>
            <p className="fs-5">
              <span className="fw-bold fs-4">S</span>iamo la community italiana di XDefiant, attiva dal 2021, dedicata a tenere i giocatori aggiornati su novità, eventi speciali e competizioni del gioco. Utilizziamo vari canali social per informare la community e creare un ambiente accogliente dove condividere esperienze, strategie e partecipare a tornei. Invitiamo tutti i fan a unirsi a noi per rimanere aggiornati e far parte di una community vibrante e attiva.
            </p>
            <div className="d-flex justify-content-center">
              <a className="btn btn-primary" href="https://store.ubisoft.com/it/xdefiant/60f03a8c0d253c1a30f224ba.html" role="button">Scarica ora XDefiant</a>
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